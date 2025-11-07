import { motion } from 'framer-motion';

export default function Slide({ title, subtitle, lines = [], note, right }) {
  return (
    <section className="relative h-screen w-full snap-start flex items-center" aria-label={title}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className={`flex items-center ${right ? 'md:order-2 justify-start' : 'justify-end'}`}>
          <div className="max-w-xl">
            <motion.h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-zinc-100"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-500"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
            <div className="mt-8 space-y-3">
              {lines.map((l, i) => (
                <motion.p
                  key={i}
                  className="text-zinc-300/90 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.06 }}
                >
                  {l}
                </motion.p>
              ))}
            </div>
            {note && (
              <motion.p
                className="mt-8 text-xs tracking-widest uppercase text-amber-400/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                {note}
              </motion.p>
            )}
          </div>
        </div>
        <div className={`hidden md:flex items-center ${right ? 'md:order-1 justify-end' : 'justify-start'}`}>
          <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-amber-500/30 via-amber-300/10 to-transparent blur-3xl" />
        </div>
      </div>
    </section>
  );
}
