
import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'DATA ANALYTICS',
    subtitle: 'Working with data to uncover insights',
    skills: [
      'Data Cleaning',
      'Data Preprocessing',
      'Exploratory Data Analysis',
      'Data Validation',
      'Statistical Analysis',
      'Data Interpretation',
    ],
  },
  {
    number: '02',
    title: 'PROGRAMMING',
    subtitle: 'Languages and analytical libraries',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Scikit-learn',
      'JavaScript',
    ],
  },
  {
    number: '03',
    title: 'BUSINESS INTELLIGENCE',
    subtitle: 'Transforming information into insights',
    skills: [
      'Power BI',
      'DAX',
      'Data Modelling',
      'Dashboard Development',
      'KPI Reporting',
      'Excel',
    ],
  },
  {
    number: '04',
    title: 'DATABASES & TECHNOLOGY',
    subtitle: 'Working with data and applications',
    skills: [
      'SQL',
      'PostgreSQL',
      'Supabase',
      'React',
      'Next.js',
      'Django REST API',
    ],
  },
  {
    number: '05',
    title: 'TOOLS & PLATFORMS',
    subtitle: 'Tools used across projects and workflows',
    skills: [
      'GitHub',
      'VS Code',
      'Figma',
      'Canva',
      'Streamlit',
      'Docker',
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-heading">
        <div>
          <p className="skills-eyebrow">MY TECHNICAL TOOLKIT</p>

          <h2>
            Skills that bring
            <br />
            <span>ideas to life.</span>
          </h2>
        </div>

        <p className="skills-intro">
          A combination of analytical thinking,
          programming knowledge and technology
          that helps me explore problems and
          build meaningful solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>

            <div className="skill-card-top">
              <span className="skill-number">{group.number}</span>
              <span className="skill-arrow">↗</span>
            </div>

            <h3>{group.title}</h3>

            <p className="skill-subtitle">{group.subtitle}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </article>
        ))}
      </div>

      <div className="skills-footer">
        <span>ALWAYS EXPLORING</span>
        <span>ALWAYS LEARNING</span>
        <span>ALWAYS BUILDING</span>
      </div>

    </section>
  );
};

export default Skills;
