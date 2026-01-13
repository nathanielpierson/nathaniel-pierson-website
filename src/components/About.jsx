import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer who loves building innovative solutions
              and bringing ideas to life through code. With a strong foundation
              in modern web technologies, I enjoy working on projects that challenge
              me to learn and grow.
            </p>
            <p>
              My expertise spans across frontend and backend development, with
              a focus on creating user-friendly, performant applications. I'm always
              eager to explore new technologies and best practices.
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
  )
}

export default About
