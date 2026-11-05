
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-heading">
        <p className="section-label">A LITTLE ABOUT ME</p>
        <h2>
          Beyond the numbers,
          <br />
          <span>there's a curious mind.</span>
        </h2>
      </div>

      <div className="about-layout">

        <div className="about-left">
          <div className="about-number">01 / ABOUT</div>

          <h3>
            Hello, I'm <span>Shamitha.</span>
          </h3>

          <p>
            I'm a Computer Science and Business Systems graduate
            from K S School of Engineering and Management,
            Bengaluru, with a strong interest in data analytics,
            business intelligence and technology.
          </p>

          <p>
            My work and academic projects have given me experience
            in data preprocessing, dataset validation, exploratory
            data analysis, analytical problem-solving and building
            data-driven applications.
          </p>

          <p>
            I enjoy exploring data, identifying patterns and
            understanding how analytical insights can support
            meaningful business decisions.
          </p>

          <a href="#projects" className="about-link">
            EXPLORE MY PROJECTS ↗
          </a>
        </div>

        <div className="about-right">

          <div className="about-quote">
            <span className="quote-mark">“</span>
            <h3>
              Curiosity drives discovery.
              <br />
              Analysis creates clarity.
            </h3>
            <p>MY APPROACH TO LEARNING AND PROBLEM-SOLVING</p>
          </div>

          <div className="about-details">

            <div className="about-detail-item">
              <span>01</span>
              <div>
                <h4>DATA ANALYTICS</h4>
                <p>Finding patterns and meaningful insights in data.</p>
              </div>
            </div>

            <div className="about-detail-item">
              <span>02</span>
              <div>
                <h4>BUSINESS THINKING</h4>
                <p>Connecting analytical findings with business needs.</p>
              </div>
            </div>

            <div className="about-detail-item">
              <span>03</span>
              <div>
                <h4>CONTINUOUS LEARNING</h4>
                <p>Exploring tools, technologies and new ideas.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="about-bottom">
        <span>COMPUTER SCIENCE</span>
        <span>ANALYTICAL THINKING</span>
        <span>BUSINESS & TECHNOLOGY</span>
        <span>ALWAYS LEARNING</span>
      </div>

    </section>
  );
};

export default About;
