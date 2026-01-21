import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a programmer with a passion for creativity and innovative approaches to problem solving. My educational background in animation and video editing was
              developed at Virginia Commonwealth University through their
              diverse Kinetic Imaging program. This and my creative pursuits as
              a hobby musician show how I am able to think outside the box. The
              same skills that are used to storyboard an animation project are
              used when using an AI assistant tool like Cursor or Claude to keep
              my own end goal in mind when directing software programs. I attended a
              coding bootcamp in 2025 that helped me develop an understanding of programming core concepts that I can use to pick up and learn any coding language and
              framework. Specifically this bootcamp taught me transferable
              skills through React for frontend and Ruby on Rails on backend. I
              have a mix of technical expertise and creative inclination to be
              able to use tools that are limited only by your imagination and
              have a passion for the specifics of how technology functions to
              figure out what happens when they don’t go as planned. Apart from
              my professional pursuits, I have a variety of other interests,
              especially in music. I enjoy going to concerts as well as
              songwriting and producing my own music. I play keyboard and
              electric guitar and am learning vocals. I currently reside in the
              Charlottesville, VA area but am in between rentals and open to
              explore any new area where I am offered a job.
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
                <span className="skill-tag">Ruby on Rails</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Cursor</span>
                <span className="skill-tag">Claude</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
