import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Nathaniel Pierson</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
        <p className="hero-description">
          Welcome to my portfolio! Here you'll find a collection of my projects,
          showcasing my skills in web development, software engineering, and more.
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
