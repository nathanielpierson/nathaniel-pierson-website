import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/projects/')

  const handleContactClick = (e) => {
    if (isProjectPage) {
      e.preventDefault()
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // On homepage, the hash link will work naturally
  }

  const handleProjectsClick = (e) => {
    if (isProjectPage) {
      e.preventDefault()
      // Navigate to homepage first, then scroll to projects
      window.location.href = '/#projects'
    }
    // On homepage, the hash link will work naturally
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/">Nathaniel Pierson</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {!isProjectPage && <li><a href="#about">About</a></li>}
          <li>
            {isProjectPage ? (
              <a href="/#projects" onClick={handleProjectsClick}>Projects</a>
            ) : (
              <a href="#projects">Projects</a>
            )}
          </li>
          <li>
            {isProjectPage ? (
              <a href="#contact" onClick={handleContactClick}>Contact</a>
            ) : (
              <a href="#contact">Contact</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
