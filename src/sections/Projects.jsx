
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "E-commerce Customer Experience & Business Analysis",
    description:
      "Analysed customer, order, product, payment, delivery and review data to understand business performance and customer behaviour.",
    work: [
      "Used SQL and Python for data cleaning and exploratory analysis.",
      "Calculated business KPIs and examined customer-retention patterns.",
      "Created Power BI dashboards to communicate business trends.",
      "Examined relationships between delivery delays, review scores and repeat purchases.",
    ],
    tools: ["SQL", "Python", "Power BI", "Data Analysis"],
  },
  {
    number: "02",
    category: "MACHINE LEARNING & SUPPLY CHAIN",
    title: "Supply Chain Demand Prediction System",
    description:
      "Developed an end-to-end demand prediction application using the DataCo supply chain dataset, incorporating operational features such as order quantity, shipping delays, profit margins and seasonal indicators.",
    work: [
      "Integrated Random Forest, XGBoost and Neural Network models.",
      "Built a FastAPI backend to generate real-time sales predictions using validated user inputs.",
      "Implemented an analytics dashboard to monitor prediction trends and model usage.",
      "Explored feature relationships and historical records to support data-driven operational insights.",
    ],
    tools: [
      "Python",
      "Random Forest",
      "XGBoost",
      "Neural Networks",
      "FastAPI",
      "Machine Learning",
    ],
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "TaskFlow Management System",
    description:
      "A task management application designed to organise workflows, support collaboration and provide better task visibility.",
    work: [
      "Developed the frontend using React.",
      "Built backend APIs using Django REST Framework.",
      "Implemented JWT authentication and Google OAuth.",
      "Designed an analytics dashboard and role-based access.",
    ],
    tools: [
      "React",
      "Django REST API",
      "Python",
      "JWT",
      "Docker",
    ],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-label">SELECTED WORK</span>

          <h2>
            Ideas transformed
            <br />
            into meaningful work.
          </h2>

          <p>
            A selection of projects reflecting my interests in data,
            technology, business and problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-divider"></div>

                <h4>WHAT I WORKED ON</h4>

                <ul className="project-details">
                  {project.work.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="project-tools">
                  {project.tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
