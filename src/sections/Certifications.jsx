import "./Certifications.css";

const certifications = [
  {
    number: "01",
    name: "Data Science for Engineers",
    organization: "NPTEL",
    period: "JAN — MAR 2025",
  },
  {
    number: "02",
    name: "Applied Artificial Intelligence",
    organization: "SAP",
    period: "APR 2025",
  },
];

const achievements = [
  {
    number: "01",
    award: "First Prize",
    event: "Project Exhibition",
    detail: "Department of Computer Science and Business Systems",
    period: "NOV 2025",
  },
  {
    number: "02",
    award: "Second Prize",
    event: "Idea Presentation Competition",
    detail:
      "Presented a concept for a Kannada-based Large Language Model for digital accessibility.",
    period: "NOV 2024",
  },
];

function Certifications() {
  return (
    <section className="credentials-section" id="certifications">
      <div className="credentials-container">

        <div className="credentials-heading">
          <span className="section-label">BEYOND THE CLASSROOM</span>

          <h2>
            Learning, recognition
            <br />
            and milestones.
          </h2>

          <p>
            Certifications that strengthened my knowledge and achievements
            that encouraged me to keep exploring new ideas.
          </p>
        </div>

        <div className="credentials-grid">

          {/* CERTIFICATIONS */}

          <div className="credential-column">
            <div className="credential-column-heading">
              <span className="credential-index">01</span>
              <div>
                <span className="credential-label">CONTINUOUS LEARNING</span>
                <h3>Certifications</h3>
              </div>
            </div>

            <div className="credential-items">
              {certifications.map((item) => (
                <article className="credential-card" key={item.number}>
                  <span className="credential-number">{item.number}</span>

                  <div className="credential-card-content">
                    <span className="credential-period">
                      {item.period}
                    </span>

                    <h4>{item.name}</h4>

                    <p>{item.organization}</p>
                  </div>

                  <span className="credential-symbol">↗</span>
                </article>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}

          <div className="credential-column">
            <div className="credential-column-heading">
              <span className="credential-index">02</span>
              <div>
                <span className="credential-label">MILESTONES</span>
                <h3>Achievements</h3>
              </div>
            </div>

            <div className="credential-items">
              {achievements.map((item) => (
                <article className="credential-card" key={item.number}>
                  <span className="credential-number">{item.number}</span>

                  <div className="credential-card-content">
                    <span className="credential-period">
                      {item.period}
                    </span>

                    <h4>{item.award}</h4>

                    <p className="achievement-event">
                      {item.event}
                    </p>

                    <p className="achievement-detail">
                      {item.detail}
                    </p>
                  </div>

                  <span className="credential-symbol">✦</span>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;