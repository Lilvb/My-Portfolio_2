import { useRef } from 'react';

const skills = [
  'Python', 'NumPy', 'Pandas', 'C++', 'Java', 'SQL',
  'Power BI', 'Azure', 'Apache Spark', 'Hadoop', 'ETL', 'Seaborn',
];

export default function About() {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImgError = () => {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
      const parent = imgRef.current.parentElement;
      if (parent) {
        parent.style.background =
          'linear-gradient(135deg,rgba(200,255,0,0.08),rgba(0,0,0,0.5))';
      }
    }
  };

  return (
    <section id="about" className="section">
      <div className="section-number reveal">02 — About</div>
      <h2 className="section-title reveal">
        Who
        <br />
        I Am
      </h2>
      <div className="about-layout">
        <div className="about-text">
          <p className="reveal">
            Passionate and detail-oriented Computer Science student and Data Engineer
            trainee with a strong foundation in data analysis and system development.
            With hands-on experience in Python, C++, Java, and SQL, I excel at
            transforming complex data into actionable insights.
          </p>
          <p className="reveal reveal-delay-1">
            Results-driven professional who thrives in collaborative, high-pressure
            environments. My approach is defined by persistence, clear communication,
            and a constant focus on delivering solutions that drive business impact.
          </p>
          <div className="skills-heading reveal reveal-delay-2">Core Skills</div>
          <div className="skills-wrap reveal reveal-delay-3">
            {skills.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="about-photo-col reveal reveal-delay-2">
          <div className="about-photo">
            <img
              ref={imgRef}
              src="/images/AT.jpg"
              alt="Abanob Thabet at GDG Event"
              onError={handleImgError}
            />
            <div className="photo-badge">GDG Event</div>
          </div>
        </div>
      </div>
    </section>
  );
}
