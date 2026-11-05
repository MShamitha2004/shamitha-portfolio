import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">

          <span className="contact-label">LET'S CONNECT</span>

          <h2>
            Have an opportunity
            <br />
            or an idea in mind?
          </h2>

          <p className="contact-description">
            I'm always interested in exploring opportunities, learning
            from new experiences and connecting with people who are
            passionate about technology and business.
          </p>

          <a
            href="mailto:shamitharevanth@gmail.com?subject=Professional%20Opportunity"
            className="contact-email-button"
          >
            Get in touch <span>↗</span>
          </a>

          <div className="contact-divider"></div>

          <div className="contact-details">

            <div>
              <span className="contact-detail-label">EMAIL</span>
              <a href="mailto:shamitharevanth@gmail.com">
                shamitharevanth@gmail.com
              </a>
            </div>

            <div>
              <span className="contact-detail-label">PHONE</span>
              <a href="tel:+917708399713">
                +91 77083 99713
              </a>
            </div>

            <div>
              <span className="contact-detail-label">LOCATION</span>
              <p>Bengaluru, India</p>
            </div>

          </div>

        </div>
      </section>

      <footer className="portfolio-footer">
        <div className="footer-content">

          <a href="#home" className="footer-brand">
            M. SHAMITHA.
          </a>

          <p>
            Designed with curiosity. Built with purpose.
          </p>

          <a href="#home" className="back-to-top">
            BACK TO TOP ↑
          </a>

        </div>

        <div className="footer-bottom">
          <span>© 2026 M. SHAMITHA</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </>
  );
}

export default Contact;