import { useEffect } from 'react';
import MarbleBackground from './components/MarbleBackground';
import HeroSlide from './components/HeroSlide';
import Slide from './components/Slide';
import Navigation from './components/Navigation';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);

  return (
    <div className="relative min-h-screen text-zinc-100 bg-black">
      <MarbleBackground />

      <main className="relative z-10 snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        <HeroSlide />

        <Slide
          title="Private Sessions"
          subtitle="Remote. Discreet. Precise."
          lines={[
            'One-to-one transmissions for sovereign leaders.',
            'Silent diagnostics. Exact prescriptions. Immediate refinement.',
            'Encrypted scheduling. Confidential by design.'
          ]}
          note="By invitation only"
        />

        <Slide
          title="Ceremonies"
          subtitle="Thresholds & Consecrations"
          lines={[
            'Rites that open destiny gates and seal vows of mastery.',
            'Conducted with Tibetan precision, adapted for modern dynasties.',
          ]}
          right
        />

        <Slide
          title="Tailor‑Made Retreats"
          subtitle="Quiet Power, Designed"
          lines={[
            'Bespoke retreats in France, Japan and hidden sanctuaries.',
            'Architecture of days: breath, ritual, counsel, and silence.',
          ]}
        />

        <Slide
          title="Long‑Term Private Accompaniment"
          subtitle="Stewardship of a Lineage, Applied"
          lines={[
            'A private cadence for founders and families sustaining legacies.',
            'Strategy as sadhana: influence, protection, merit, transmission.',
          ]}
          right
        />

        <Slide
          title="Nos Creare Club"
          subtitle="Invitationnel"
          lines={[
            'A discreet circle of creation, philanthropy and enlightened wealth.',
            'Few members. Strong vows. Real consequences.',
          ]}
        />

        <Slide
          title="Experience & Pricing"
          subtitle="Sur‑Mesure"
          lines={[
            'Each engagement is composed uniquely. There is no catalogue.',
            'Honoraria reflect depth, risk and lineage commitments.',
          ]}
          right
        />

        <section className="relative h-screen w-full snap-start flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />
          <div className="relative z-10 max-w-2xl px-6 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight">Contact</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">Très Discret</p>
            <p className="mt-8 text-zinc-300/90">Introduce yourself in one sentence and share a secure channel. If aligned, we will respond.</p>
            <a
              href="mailto:contact@seiyobrinpoche.com"
              className="mt-10 inline-block rounded-full border border-amber-500/40 px-6 py-2 text-xs tracking-widest uppercase text-amber-300/80 hover:bg-amber-500/10 transition-colors"
            >
              Send a discreet email
            </a>
          </div>
        </section>

        <footer className="relative h-[50vh] w-full snap-start flex items-end pb-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 flex items-center justify-between text-xs text-zinc-500/70">
            <span>© {new Date().getFullYear()} Seiyo Bhagavan Rinpoche</span>
            <span className="tracking-[0.3em] uppercase">Silent Authority</span>
          </div>
        </footer>
      </main>

      <Navigation />

      <div className="pointer-events-none fixed inset-0 z-20 bg-[radial-gradient(ellipse_at_center,rgba(212,163,115,0.06),transparent_60%)]" />
    </div>
  );
}
