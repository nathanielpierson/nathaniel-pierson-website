import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
I am a full stack programmer who has honed my skills in creative problem solving and mastering emerging technologies. I use my experience to create versatile programs with a strong coding foundation but a forward workflow that pushes me to create quality content quickly. My work is informed by both the analytical thinking I developed from my coding bootcamp through Actualize and through my artistic perspective gained in my BFA from Virginia Commonwealth University, allowing me to design solutions that are intentional, flexible, and user-focused.
I studied animation and video editing at Virginia Commonwealth University through the Kinetic Imaging program, where I developed a foundation in visual storytelling and conceptual thinking. This creative background continues to influence how I approach software development, particularly in maintaining a clear vision from concept through execution.
Planning, iteration, and goal-oriented execution are the skills I developed and used to storyboard animation projects, and they translate directly into my programming workflow. I start my projects with user stories and pay attention to the small details, especially when I apply this mindset when working with AI-assisted development tools. I use Cursor and Claude to strategically guide software toward a defined outcome rather than relying on them passively.
In 2025, I completed a full stack coding bootcamp with Actualize that reinforced my understanding of core programming principles and strengthened my ability to quickly adapt to new languages and frameworks. The program emphasized transferable skills through hands-on experience with React for frontend development and Ruby on Rails for backend development, and I have been able to transfer those skills to other frameworks and languages such as Node and Express.js.
Outside of work and spending time with my friends, family, and pets, music is the most important part of my life. I love going to concerts, writing songs, and producing and releasing my own albums. I play keyboard and electric guitar, and I enjoy learning the technical aspects of synthesizers to make my own sounds.
I’m currently based in the central Virginia area, but I’m very open to relocating for the right opportunity. I enjoy exploring new places and would be excited to land somewhere new for work and life.
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">npm</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Ruby on Rails</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Cursor</span>
                <span className="skill-tag">Claude</span>
                <span className="skill-tag">Cline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
