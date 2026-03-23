import { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // ── Custom Cursor ──
  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mouseX = -999;
    let mouseY = -999;
    let ringX = -999;
    let ringY = -999;
    let visible = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        cur.classList.add('visible');
        ring.classList.add('visible');
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      cur.style.left = mouseX + 'px';
      cur.style.top = mouseY + 'px';
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(animate);

    // Hover effects on interactive elements
    const interactiveSelector =
      'a, button, .project-card, .skill-tag, .contact-row';

    const onEnter = () => {
      cur.classList.add('big');
      ring.classList.add('small');
    };
    const onLeave = () => {
      cur.classList.remove('big');
      ring.classList.remove('small');
    };

    const attach = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Attach after a small delay so all elements are rendered
    const timeout = setTimeout(attach, 100);

    // Re-attach on DOM changes (e.g. drawer opening)
    const observer = new MutationObserver(() => {
      attach();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      clearTimeout(timeout);
      observer.disconnect();
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  // ── Scroll Reveal ──
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="cur" ref={curRef} />
      <div className="cur-ring" ref={ringRef} />

      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
