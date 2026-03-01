import { useState, useEffect } from "react";
import "./ViewCount.css";

const API_URL = import.meta.env.VITE_VIEW_COUNT_API_URL;

function ViewCount() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!API_URL) return;

    const controller = new AbortController();
    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const value = data?.count ?? data?.totalViews ?? data?.views;
        if (typeof value === "number" && value >= 0) {
          setCount(value);
        }
      })
      .catch(() => setError(true));

    return () => controller.abort();
  }, []);

  if (!API_URL || error || count === null) return null;

  const formatted = count >= 1000 
    ? (count / 1000).toFixed(1).replace(/\.0$/, "") + "k" 
    : String(count);

  return (
    <p className="view-count" aria-live="polite">
      {formatted} page views
    </p>
  );
}

export default ViewCount;
