import "./Education.css";

const education = [
  {
    number: "01",
    level: "UNDERGRADUATE DEGREE",
    period: "2022 — 2026",
    qualification: "B.E. Computer Science and Business Systems",
    institution: "K S School of Engineering and Management",
    location: "Bengaluru, Karnataka",
    result: "8.7 CGPA",
  },
  {
    number: "02",
    level: "HIGHER SECONDARY",
    period: "2022",
    qualification: "12th Grade — CBSE",
    institution: "SRM Public School",
    location: "Trichy",
    result: "70%",
  },
  {
    number: "03",
    level: "SECONDARY SCHOOL",
    period: "2020",
    qualification: "10th Grade — CBSE",
    institution: "Silicon City Academy of Secondary Education",
    location: "Bengaluru",
    result: "80%",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="education-heading">
          <span className="section-label">ACADEMIC BACKGROUND</span>

          <h2>
            Building knowledge,
            <br />
            one step at a time.
          </h2>

          <p>
            My academic journey has helped me build a foundation in
            technology, business systems and analytical thinking.
          </p>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.number}>

              <div className="education-number">
                {item.number}
              </div>

              <div className="education-details">
                <span className="education-level">
                  {item.level}
                </span>

                <h3>{item.qualification}</h3>

                <h4>{item.institution}</h4>

                <p className="education-location">
                  {item.location}
                </p>
              </div>

              <div className="education-result">
                <span className="education-period">
                  {item.period}
                </span>

                <strong>{item.result}</strong>

                <span className="result-label">
                  {item.number === "01" ? "CGPA" : "RESULT"}
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;