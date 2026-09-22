import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckSquare,
  Square,
  GitBranch,
} from 'lucide-react';
import Button from '../components/Button';

const TRANSCRIPT = [
  {
    t: '09:02',
    who: 'sarah',
    text: "deploy's blocked on the auth migration — anyone got cycles?",
  },
  {
    t: '09:04',
    who: 'alex',
    text: 'i can pick it up. should i pair with jamie?',
  },
  {
    t: '09:05',
    who: 'jamie',
    text: "🟢 available all afternoon, let's do it",
  },
  {
    t: '09:07',
    who: 'sarah',
    text: 'perfect. we still good for the 2.4 release on friday?',
  },
  {
    t: '09:08',
    who: 'priya',
    text: 'yep, just need the migration done by thursday eod',
  },
];

const TranscriptPane = () => (
  <div className="flex-1 min-w-0 border-r border-white/[0.06]">
    <div className="px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
      <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
        Transcript
      </span>

      <span className="font-mono text-[11px] text-white/30">
        8m 24s
      </span>
    </div>

    <div className="px-5 py-4 space-y-3 font-mono text-[12px] sm:text-[13px] leading-relaxed">
      {TRANSCRIPT.map((line, i) => (
        <div key={i} className="flex gap-3">
          <span className="text-white/30 shrink-0">
            [{line.t}]
          </span>

          <div className="min-w-0">
            <span className="text-violet-soft">
              @{line.who}
            </span>

            <span className="text-white/40 mx-1.5">
              ›
            </span>

            <span className="text-white/70">
              {line.text}
            </span>
          </div>
        </div>
      ))}

      <div className="flex gap-3 text-white/30 items-center">
        <span>[09:09]</span>

        <span className="inline-block w-1.5 h-3.5 bg-white/40 animate-pulse" />
      </div>
    </div>
  </div>
);

const NotesPane = () => (
  <div className="w-full md:w-[44%] shrink-0 bg-white/[0.015]">
    <div className="px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles
          size={12}
          className="text-violet-soft"
          strokeWidth={2}
        />

        <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft">
          Notch summary
        </span>
      </div>

      <span className="font-mono text-[11px] text-white/30">
        auto · 0.4s
      </span>
    </div>

    <div className="px-5 py-4 space-y-5 text-[13px]">
      {/* Action items */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
          Action items
        </div>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Square
              size={14}
              className="text-white/30 shrink-0 mt-0.5"
              strokeWidth={1.5}
            />

            <span className="text-white/85 leading-snug">
              Pair on auth migration

              <span className="text-white/40 ml-1.5 font-mono text-[11px]">
                @alex @jamie
              </span>
            </span>
          </li>

          <li className="flex items-start gap-2">
            <Square
              size={14}
              className="text-white/30 shrink-0 mt-0.5"
              strokeWidth={1.5}
            />

            <span className="text-white/85 leading-snug">
              Finalize 2.4 release notes

              <span className="text-white/40 ml-1.5 font-mono text-[11px]">
                @sarah
              </span>
            </span>
          </li>

          <li className="flex items-start gap-2 opacity-60">
            <CheckSquare
              size={14}
              className="text-violet-soft shrink-0 mt-0.5"
              strokeWidth={1.5}
            />

            <span className="text-white/60 line-through leading-snug">
              Confirm Thursday deploy window
            </span>
          </li>
        </ul>
      </div>

      {/* Decisions */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
          Decisions
        </div>

        <p className="text-white/85 leading-snug">
          Ship release{' '}
          <span className="font-mono text-violet-soft">
            2.4
          </span>{' '}
          on Friday, pending auth migration by Thursday EOD.
        </p>
      </div>

      {/* Mentions */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2.5">
          Mentions
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[
            'PRJ-3847',
            'auth-service',
            'hotfix/9',
            'release-2.4',
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono text-[11px] text-white/60"
            >
              <GitBranch
                size={10}
                strokeWidth={1.8}
              />

              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProductMockup = () => {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const rotateX =
      ((y / rect.height) - 0.5) * -2.5;

    const rotateY =
      ((x / rect.width) - 0.5) * 2.5;

    card.style.setProperty(
      '--hero-rotate-x',
      `${rotateX}deg`
    );

    card.style.setProperty(
      '--hero-rotate-y',
      `${rotateY}deg`
    );
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget;

    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    card.style.setProperty('--hero-rotate-x', '0deg');
    card.style.setProperty('--hero-rotate-y', '0deg');
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">

      {/* Glow underlay */}
      <div
        className="absolute -inset-x-20 -bottom-20 top-10 bg-spotlight pointer-events-none"
        aria-hidden
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hero-product-mockup relative rounded-2xl border-hairline-bright bg-ink-50 overflow-hidden shadow-2xl"
        style={{
          boxShadow:
            '0 50px 120px -20px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >

        {/* Cursor glass reflection */}
        <div className="hero-mockup-glow" />

        {/* Window chrome */}
        <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span>standup.notch</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-white/30">
            <span>mar 14</span>
          </div>
        </div>

        {/* Two-pane content */}
        <div className="relative z-10 flex flex-col md:flex-row min-h-[420px]">
          <TranscriptPane />
          <NotesPane />
        </div>

        {/* Bottom glass reflection */}
        <div className="hero-mockup-edge" />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const handleAnnouncementMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty(
      '--announcement-x',
      `${x}px`
    );

    element.style.setProperty(
      '--announcement-y',
      `${y}px`
    );
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] pointer-events-none"
        aria-hidden
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 bg-spotlight pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Announcement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex justify-center mb-8"
        >
          <a
            href="#"
            onMouseMove={handleAnnouncementMove}
            className="hero-announcement group relative inline-flex items-center gap-2 rounded-full border-hairline bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-white/60 transition-all duration-300 hover:text-white"
          >
            {/* Liquid cursor glow */}
            <span className="hero-announcement-glow" />

            <span className="relative z-10 inline-block w-1.5 h-1.5 rounded-full bg-violet-glow animate-pulse-dot" />

            <span className="relative z-10">
              New · Notch for Linear & GitHub now in beta
            </span>

            <ArrowRight
              size={12}
              strokeWidth={2}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-fade text-center font-semibold tracking-tightest leading-[0.95] mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 7.5vw, 6rem)',
          }}
        >
          Meeting notes,
          <br />
          written by your meetings.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mx-auto max-w-xl text-center text-white/55 leading-relaxed mb-10"
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
          }}
        >
          Notch turns every standup, sync, and incident review into clean,
          searchable, shareable notes — with action items piped straight into
          the tools your team already lives in.
        </motion.p>

{/* CTAs */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 sm:mb-24"
>
  {/* Start Free */}
  <div
    className="hero-liquid-button hero-liquid-primary"
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      e.currentTarget.style.setProperty(
        '--btn-x',
        `${e.clientX - rect.left}px`
      );

      e.currentTarget.style.setProperty(
        '--btn-y',
        `${e.clientY - rect.top}px`
      );
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.setProperty('--btn-x', '50%');
      e.currentTarget.style.setProperty('--btn-y', '50%');
    }}
  >
    <Button
      variant="primary"
      size="lg"
      iconRight={
        <ArrowRight
          size={14}
          strokeWidth={2}
        />
      }
      className="hero-liquid-button-inner"
    >
      Start free · no card
    </Button>

    <span className="hero-button-glow" />
    <span className="hero-button-reflection" />
  </div>

  {/* Watch Demo */}
  <div
    className="hero-liquid-button hero-liquid-secondary"
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      e.currentTarget.style.setProperty(
        '--btn-x',
        `${e.clientX - rect.left}px`
      );

      e.currentTarget.style.setProperty(
        '--btn-y',
        `${e.clientY - rect.top}px`
      );
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.setProperty('--btn-x', '50%');
      e.currentTarget.style.setProperty('--btn-y', '50%');
    }}
  >
    <Button
      variant="ghost"
      size="lg"
      className="hero-liquid-button-inner"
    >
      Watch 90-second demo
    </Button>

    <span className="hero-button-glow" />
    <span className="hero-button-reflection" />
  </div>
</motion.div>

        {/* Product mockup */}
        <ProductMockup />

      </div>
    </section>
  );
};

export default Hero;