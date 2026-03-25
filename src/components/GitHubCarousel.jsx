import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./GitHubCarousel.css";

const GITHUB_USERNAME = "nathanielpierson";
const MAX_COMMITS = 10;
const DEBUG = import.meta.env.DEV;

function formatCommitDate(isoDate) {
  return new Date(isoDate).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function commitSubject(fullMessage) {
  const first = fullMessage.split("\n").find((line) => line.trim());
  return (first ?? fullMessage).trim();
}

function GitHubCarousel() {
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const eventsUrl = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;
    const ac = new AbortController();

    (async () => {
      try {
        const eventsRes = await fetch(eventsUrl, { signal: ac.signal });
        if (DEBUG) {
          const remaining = eventsRes.headers.get("X-RateLimit-Remaining");
          console.log("[GitHubCarousel] GET", eventsUrl, "→", eventsRes.status, eventsRes.statusText, {
            rateLimitRemaining: remaining ?? "(no header)",
          });
        }
        if (!eventsRes.ok) {
          throw new Error(`GitHub events ${eventsRes.status} ${eventsRes.statusText}`);
        }

        const events = await eventsRes.json();
        if (!Array.isArray(events)) {
          if (DEBUG) console.warn("[GitHubCarousel] Events API did not return an array:", events);
          setCommits([]);
          return;
        }

        const pushEvents = events.filter((event) => event.type === "PushEvent");
        const seenHead = new Set();
        const recentCommits = [];

        for (const event of pushEvents) {
          if (recentCommits.length >= MAX_COMMITS) break;
          const headSha = event.payload?.head;
          const repoFullName = event.repo?.name;
          if (!headSha || !repoFullName || seenHead.has(headSha)) continue;
          seenHead.add(headSha);

          try {
            const commitUrl = `https://api.github.com/repos/${repoFullName}/commits/${headSha}`;
            const commitRes = await fetch(commitUrl, { signal: ac.signal });
            if (DEBUG) {
              const rem = commitRes.headers.get("X-RateLimit-Remaining");
              console.log("[GitHubCarousel] GET commit", repoFullName.slice(0, 40), "… →", commitRes.status, {
                rateLimitRemaining: rem ?? "(no header)",
              });
            }
            if (!commitRes.ok) continue;

            const data = await commitRes.json();
            const message = data?.commit?.message;
            if (typeof message !== "string") continue;

            recentCommits.push({
              id: `${event.id}-${headSha}`,
              message: commitSubject(message),
              repo: repoFullName,
              date: event.created_at,
            });
          } catch {
            if (ac.signal.aborted) return;
            continue;
          }
        }

        if (DEBUG) {
          console.log("[GitHubCarousel] Resolved:", {
            eventCount: events.length,
            pushEventCount: pushEvents.length,
            slideCount: recentCommits.length,
          });
          if (recentCommits.length === 0) {
            console.warn(
              "[GitHubCarousel] No slides — no resolvable PushEvents, or commit lookups failed (private repo, 404, or rate limit).",
            );
          }
        }

        setCommits(recentCommits);
      } catch (err) {
        if (ac.signal.aborted) return;
        if (DEBUG) console.warn("[GitHubCarousel] Load failed (carousel hidden):", err);
        setError(true);
      }
    })();

    return () => ac.abort();
  }, []);

  if (error || commits.length === 0) return null;

  return (
    <section className="github-carousel-section" aria-label="Recent GitHub commits">
      <div className="github-carousel-band">
        <div className="github-carousel-inner">
          <h2 className="github-carousel-title">Recent GitHub Activity</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={commits.length > 1}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            className="github-swiper"
          >
            {commits.map((commit) => (
              <SwiperSlide key={commit.id}>
                <article className="commit-slide">
                  <p className="commit-message">{commit.message}</p>
                  <p className="commit-repo">{commit.repo}</p>
                  <time className="commit-date">{formatCommitDate(commit.date)}</time>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default GitHubCarousel;
