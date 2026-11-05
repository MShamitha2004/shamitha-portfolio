import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span className="section-label">PROFESSIONAL JOURNEY</span>

          <h2>
            Learning through
            <br />
            real-world experience.
          </h2>

          <p>
            Opportunities that helped me develop my technical skills,
            analytical thinking and understanding of practical workflows.
          </p>
        </div>

        <div className="experience-card">

          <div className="experience-left">
            <span className="experience-number">01</span>
            <span className="experience-period">
              FEB 2026 — MAR 2026
            </span>
          </div>

          <div className="experience-content">

            <span className="experience-type">
              INTERNSHIP · AI / MACHINE LEARNING
            </span>

            <h3>AI/ML Intern</h3>

            <h4>Evoastra Ventures INC</h4>

            <p className="experience-intro">
              Worked with Python-based data preparation and analytical
              workflows, focusing on improving data quality and supporting
              reliable AI/ML applications.
            </p>

            <div className="experience-divider"></div>

            <h5>KEY RESPONSIBILITIES</h5>

            <ul>
              <li>
                Performed data cleaning, preprocessing and dataset
                validation to improve data quality and reliability.
              </li>

              <li>
                Used Python-based workflows for data transformation,
                feature preparation and evaluation of analytical results.
              </li>

              <li>
                Documented data preparation procedures and workflows
                to support reproducibility and consistent analysis.
              </li>

              <li>
                Collaborated with cross-functional team members to
                investigate data issues and support data-driven outcomes.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>Data Cleaning</span>
              <span>Data Preprocessing</span>
              <span>Dataset Validation</span>
              <span>AI / ML</span>
            </div>

          </div>
        </div>

        <div className="experience-note">
          <span>01</span>
          <p>
            Every experience is an opportunity to learn, contribute
            and grow.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;