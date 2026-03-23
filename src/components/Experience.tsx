const experiences = [
  {
    date: 'May 2025',
    org: 'Digital Egypt Pioneers Initiative (DEPI) · Microsoft Track',
    title: 'Data Engineering Trainee',
    points: [
      'Enrolled in intensive Microsoft-focused Data Engineering program covering Python, SQL, ETL, data wrangling, and visualization',
      'Gaining practical experience with Pandas, Seaborn, Hadoop, Apache Spark, and Azure Cloud for scalable data processing',
      'Designing and implementing ETL workflows to extract, transform, and load real-world datasets',
      'Collaborating on team-based projects to build dashboards and deliver business intelligence insights',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-number reveal">03 — Experience</div>
      <h2 className="section-title reveal">
        Work &
        <br />
        Training
      </h2>
      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-org">{exp.org}</div>
            </div>
            <div className="exp-body">
              <h3>{exp.title}</h3>
              <ul>
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
