import { useEffect, useRef } from 'react';

export default function Navigation() {
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const dots = Array.from(container.querySelectorAll('button'));

    const update = () => {
      const sections = Array.from(document.querySelectorAll('section'));
      const mid = window.innerHeight / 2;
      let active = 0;
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        if (Math.abs(center - mid) < Math.abs(sections[active].getBoundingClientRect().top + sections[active].getBoundingClientRect().height/2 - mid)) {
          active = i;
        }
      });
      dots.forEach((d, i) => {
        d.classList.toggle('opacity-100', i === active);
        d.classList.toggle('opacity-40', i !== active);
      });
      const ind = indicatorRef.current;
      if (ind) {
        ind.style.transform = `translateY(${active * 28}px)`;
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToIndex = (i) => {
    const sections = Array.from(document.querySelectorAll('section'));
    const target = sections[i];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
      <div ref={containerRef} className="relative flex flex-col items-center gap-3">
        <span ref={indicatorRef} className="absolute left-1/2 -translate-x-1/2 h-5 w-px bg-amber-400/70 transition-transform duration-500" />
        {Array.from({ length: 9 }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-3 w-3 rounded-full bg-zinc-500/40 hover:bg-zinc-300/60 transition-opacity opacity-40"
          />
        ))}
      </div>
    </div>
  );
}
