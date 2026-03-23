const contactItems = [
  {
    label: 'Email',
    href: 'mailto:abanob.ajban@gmail.com',
    text: 'abanob.ajban@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+201202255785',
    text: '+20 120 225 5785',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abanob-thabet',
    text: 'abanob-thabet',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Lilvb',
    text: 'Lilvb',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-number reveal">05 — Contact</div>
      <div className="contact-layout">
        <div>
          <h2 className="contact-big reveal">
            Let's
            <br />
            <span>Connect</span>
          </h2>
          <p className="contact-sub reveal reveal-delay-1">
            Always open to discussing data engineering opportunities, new projects, or
            collaboration ideas. Don't hesitate to reach out.
          </p>
        </div>
        <div className="contact-items reveal reveal-delay-2">
          {contactItems.map((item) => (
            <div key={item.label} className="contact-row">
              <span className="contact-label">{item.label}</span>
              <a
                href={item.href}
                className="contact-link"
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
