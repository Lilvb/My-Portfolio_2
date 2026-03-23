export default function Hero() {
  return (
    <section id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-top">
        <div className="hero-label">Cairo, Egypt · Data Engineer · CS Student</div>
      </div>

      <div className="hero-main">
        <h1 className="hero-name">
          Abanob
          <br />
          <span>Thabet</span>
        </h1>
        <p className="hero-role">Transforming raw data into decisions that matter.</p>
      </div>

      <div className="hero-bottom">
        <a href="#about" className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </a>
        <div className="hero-counter">
          <span style={{ color: 'var(--acid)' }}>01</span> /{' '}
          <span style={{ color: 'var(--muted)' }}>05</span>
        </div>
        <a
          href="https://drive.google.com/file/d/1dgS8BeEMF5wcBqD_JyLh4R7KzF7U9JSI/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          ↓ Download CV
        </a>
      </div>
    </section>
  );
}
