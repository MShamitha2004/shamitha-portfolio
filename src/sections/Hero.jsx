
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-eyebrow">
          COMPUTER SCIENCE & BUSINESS SYSTEMS
        </p>

        <h1>
          Turning data into
          <br />
          <span>meaningful</span> decisions.
        </h1>

        <p className="hero-description">
          Hello, I'm Shamitha. A Computer Science and Business
          Systems graduate passionate about data analytics,
          business intelligence and technology.
          I enjoy exploring data, discovering patterns and
          transforming information into meaningful insights.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary-btn">
            Explore My Work ↗
          </a>

          <a href="#about" className="hero-secondary-btn">
            More About Me
          </a>
        </div>

        <div className="hero-location">
          <span className="location-dot"></span>
          Bengaluru, India
        </div>

      </div>

      <div className="hero-visual">
        <div className="hero-image-placeholder">
          <span>DATA</span>
          <span>&</span>
          <span>INSIGHTS</span>
        </div>

        <div className="hero-side-note">
          CURIOUS MIND. ANALYTICAL THINKING.
          <br />
          MEANINGFUL WORK.
        </div>
      </div>

      <div className="hero-bottom">
        <span>DATA ANALYTICS</span>
        <span>BUSINESS INTELLIGENCE</span>
        <span>TECHNOLOGY</span>
        <span>2026 — PORTFOLIO</span>
      </div>

    </section>
  );
};

export default Hero;
