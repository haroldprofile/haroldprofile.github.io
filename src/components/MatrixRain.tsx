import { useEffect, useRef } from 'react';

const CHARS = '01{}<>/;=$#ABCDEF';
const SIZE = 16;

/** Low-opacity code rain behind the hero. Skipped entirely under prefers-reduced-motion. */
export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let drops: number[] = [];
    let raf = 0;
    let last = 0;
    let visible = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / SIZE) }, () => Math.random() * -30);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || t - last < 60) return; // ~16fps is plenty
      last = t;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#10B981';
      ctx.font = `${SIZE - 2}px "JetBrains Mono", monospace`;
      drops.forEach((y, i) => {
        if (y > 0) ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * SIZE, y * SIZE);
        drops[i] = y * SIZE > canvas.height && Math.random() > 0.97 ? 0 : y + 1;
      });
    };

    resize();
    raf = requestAnimationFrame(draw);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="matrix-rain" aria-hidden="true" />;
}
