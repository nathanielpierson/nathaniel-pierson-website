import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img 
          src="/headshot.jpg" 
          alt="Nathaniel Pierson" 
          className="hero-headshot"
        />
        <h1 className="hero-title">
          <span className="highlight">Nathaniel Pierson</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer & AI Workflow Expert</p>
        <p className="hero-description">
          Welcome to my portfolio! I hope spending some time with my body of work shows you my journey of learning, discovery, and conquering difficult challenges to become a proficient developer, any possibly even gives some ideas for your own next project.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
