import { motion } from 'framer-motion';

function Line({ children }) {
  return (
    <motion.p
      className="text-zinc-200/90 leading-tight"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export default function HeroSlide() {
  return (
    <section
      className="relative h-screen w-full snap-start flex items-center justify-center text-center select-none"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-6">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-zinc-100"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Seiyo Bhagavan Rinpoche</span>
          <span className="mt-3 block text-sm md:text-base uppercase tracking-[0.3em] text-zinc-400/80">French Buddhist Master</span>
          <span className="mt-1 block text-xs md:text-sm tracking-widest text-zinc-500/80">Recognized by the 17th Karmapa (2003)</span>
        </motion.h1>

        <motion.div
          className="mt-10 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <Line>
            I transmit the Tantric Lifestyle as a path of mastery and sovereign influence
          </Line>
          <Line>
            in modern society for elite leaders, visionary founders and UHNW families.
          </Line>
        </motion.div>

        <motion.div
          className="mt-14 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          <span className="text-[11px] tracking-[0.35em] uppercase text-amber-400/70">Invitation Only</span>
          <div className="h-px w-10 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
