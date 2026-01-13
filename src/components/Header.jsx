import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <a href="#home">Nathaniel Pierson</a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
