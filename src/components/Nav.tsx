import { useState, useEffect, useCallback } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 160) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  return (
    <>
      <nav>
        <div className="nav-logo">AT</div>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={activeSection === l.href.slice(1) ? 'active' : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger ${drawerOpen ? 'open' : ''}`}
          onClick={toggleDrawer}
          aria-label="Toggle menu"
          aria-expanded={drawerOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="drawer-link" onClick={closeDrawer}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="drawer-footer">Abanob Thabet · Data Engineer</div>
      </div>
    </>
  );
}
