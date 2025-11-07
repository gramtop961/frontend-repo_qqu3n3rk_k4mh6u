import { useEffect, useRef } from 'react';

// Subtle animated marble texture using canvas noise + blur for a sacred, silent depth
export default function MarbleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    let raf;

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const noise = (x, y, t) => {
      // Simple layered noise for marble-like veining
      return (
        Math.sin(x * 0.9 + t * 0.0008) * 0.6 +
        Math.sin(y * 1.2 + t * 0.0011) * 0.4 +
        Math.sin((x + y) * 0.35 + t * 0.0006) * 0.5
      );
    };

    const render = (t) => {
      const w = canvas.width / devicePixelRatio;
      const h = canvas.height / devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const n = noise(x + frame, y + frame, t);
          const v = Math.floor(10 + (n + 1) * 20); // 0-40 gray levels
          ctx.fillStyle = `rgb(${v}, ${v}, ${v})`;
          ctx.fillRect(x, y, 2, 2);
        }
      }

      // soft vignette and golden whisper
      const grad = ctx.createRadialGradient(w/2, h/2, Math.min(w, h)/4, w/2, h/2, Math.max(w, h)/1.1);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.85)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = 'rgba(180, 140, 40, 0.06)';
      ctx.fillRect(0, 0, w, h);

      frame += 0.2;
      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-[0.85]"
      aria-hidden
    />
  );
}
