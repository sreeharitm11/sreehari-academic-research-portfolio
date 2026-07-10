import { motion } from 'motion/react';

const items = [
  'PhD Scholar · AI & Medical Imaging',
  'Assistant Professor · Presidency University',
  'Deep Learning · Explainable AI',
  'Open to Research Collaboration',
  'Available for Academic Talks',
];

export function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-border py-3 bg-secondary/30">
      <motion.div
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap w-max"
      >
        {repeated.map((item, i) => (
          <span key={i} className="text-xs font-medium tracking-widest uppercase text-muted-foreground flex items-center gap-6">
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
