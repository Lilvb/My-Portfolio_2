const projects = [
  {
    num: '01',
    title: 'Titanic Dataset Analysis',
    desc: 'Comprehensive analysis of the Titanic dataset exploring passenger survival rates, age distributions, and family sizes using advanced data science techniques.',
    tags: ['Python', 'Pandas', 'Data Viz'],
    delay: 0,
  },
  {
    num: '02',
    title: 'Abstract Shapes Framework',
    desc: 'Framework for calculating area and perimeter of geometric shapes using abstract classes to enforce a standard structure, easily extensible for new forms.',
    tags: ['Python', 'OOP', 'Abstraction'],
    delay: 1,
  },
  {
    num: '03',
    title: 'Employee Salary System',
    desc: 'Updates employee salaries from tuple-based increment data with robust conditional validation ensuring only existing records are modified.',
    tags: ['Python', 'Data Processing', 'Validation'],
    delay: 2,
  },
  {
    num: '04',
    title: 'Product Price Analysis',
    desc: 'Analyzes product tuples of name, price, and quantity to extract items exceeding thresholds via advanced list slicing and conditional filtering.',
    tags: ['Python', 'Analysis', 'Filtering'],
    delay: 0,
  },
  {
    num: '05',
    title: 'Java Contact App',
    desc: 'Full-featured desktop contact manager with Swing GUI. Complete CRUD operations for names, phone numbers, and email addresses.',
    tags: ['Java', 'Swing', 'GUI'],
    delay: 1,
  },
  {
    num: '06',
    title: 'Library Management',
    desc: 'Inventory management system to add books and track existing stock, making library management easier and more efficient for day-to-day operations.',
    tags: ['System Design', 'CRUD', 'Data Mgmt'],
    delay: 2,
  },
  {
    num: '07',
    title: 'Smart Calculator',
    desc: 'Arithmetic operations tool featuring robust error handling for edge cases including division-by-zero protection and input validation.',
    tags: ['Algorithms', 'Error Handling', 'Math'],
    delay: 0,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-number reveal">04 — Projects</div>
      <h2 className="section-title reveal">
        Selected
        <br />
        Work
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.num}
            className={`project-card reveal${p.delay ? ` reveal-delay-${p.delay}` : ''}`}
          >
            <div className="project-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-tags">
              {p.tags.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
