import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to concepts of innovation, creativity, and emerging
          technology. Feel free to reach out to connect one of the following
          ways, whether it's regarding business opportunities, questions about
          my projects I am continually building, or even if you want to talk
          music or video art.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:nathanielepierson@gmail.com">
                nathanielepierson@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/nathaniel-pierson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nathaniel-pierson/
              </a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a
                href="https://github.com/nathanielpierson"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/nathanielpierson
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
