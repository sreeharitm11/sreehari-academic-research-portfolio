import { motion } from 'motion/react';
import { ArrowRight, Mail, Copy, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// ─── Inline count-up logic ────────────────────────────────────────────────────
function StatNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const duration = 1400;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span ref={ref} className="text-3xl font-display italic text-foreground">
      {count}{suffix}
    </span>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sreeharitm11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-end pb-16 px-6 pt-32 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated glow orbs */}
      <div
        className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74,144,164,0.12) 0%, transparent 70%)',
          animation: 'float1 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74,144,164,0.07) 0%, transparent 70%)',
          animation: 'float2 16s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74,144,164,0.05) 0%, transparent 70%)',
          animation: 'float3 20s ease-in-out infinite',
        }}
      />

      {/* CSS animations injected via style tag */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 20px) scale(1.08); }
          66% { transform: translate(15px, -10px) scale(0.97); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 30px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          PhD Scholar · AI & Medical Imaging · VTU
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-6"
        >
          Research that{' '}
          <span className="font-display italic text-accent">explains itself.</span>
          <br />
          <span className="text-muted-foreground">Teaching that{' '}</span>
          <span className="font-display italic">actually lands.</span>
        </motion.h1>

        {/* Sub-headline + actions row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12"
        >
          <div className="max-w-lg">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Sreehari T M</span> — Assistant
              Professor at Presidency University & PhD Scholar building explainable AI systems for
              medical imaging diagnosis.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all cursor-pointer"
            >
              View Work <ArrowRight size={15} />
            </button>
            <a
              href="/sreehari-tm-cv.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer"
            >
              Download CV <Download size={15} />
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer group"
            >
              {copied ? (
                <>Copied! <Copy size={15} className="text-accent" /></>
              ) : (
                <>sreeharitm11@gmail.com <Mail size={15} /></>
              )}
            </button>
          </div>
        </motion.div>

        {/* Animated Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-2xl overflow-hidden mt-16 bg-border"
        >
          {[
            { target: 4, suffix: '+', label: 'Publications' },
            { target: 2, suffix: '', label: 'Patents Filed' },
            { target: 6, suffix: '', label: 'Projects Built' },
            { target: 5, suffix: '+', label: 'Years Teaching' },
          ].map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-5 flex flex-col gap-1">
              <StatNumber target={stat.target} suffix={stat.suffix} />
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
