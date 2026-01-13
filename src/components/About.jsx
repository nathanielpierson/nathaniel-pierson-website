import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              My educational background in animation and video editing was
              developed at Virginia Commonwealth University through their
              diverse Kinetic Imaging program. This and my creative pursuits as
              a hobby musician show how I am able to think outside the box. The
              same skills that are used to storyboard an animation project are
              used when using an AI assistant tool like Cursor or Claude to keep
              my own end goal in mind when directing software programs. I took a
              coding bootcamp in 2025 that taught me well-rounded skills for
              being able to pick up and learn in any coding language and
              framework. Specifically this bootcamp taught me transferable
              skills through React for frontend and Ruby on Rails on backend. I
              have a mix of technical expertise and creative inclination to be
              able to use tools that are limited only by your imagination and
              have a passion for the specifics of how technology functions to
              figure out what happens when they don’t go as planned.
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
