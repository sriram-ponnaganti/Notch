import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import {
  Zap,
  Search,
  GitMerge,
  Shield,
  Users,
  Send,
} from 'lucide-react';
import Eyebrow from '../components/Eyebrow';

const FEATURES = [
  {
    icon: Zap,
    title: 'Action items, auto-extracted',
    desc: 'Notch listens for verbal commitments, owners, and dates — then surfaces them as a checklist you can actually act on.',
    accent: true,
  },
  {
    icon: Search,
    title: 'Searchable history',
    desc: 'Every meeting becomes a queryable doc. "What did we decide about retries?" → answer in seconds.',
  },
  {
    icon: GitMerge,
    title: 'Native integrations',
    desc: 'Push action items to Linear, GitHub, Jira, or Slack — with the right owner already assigned.',
  },
  {
    icon: Users,
    title: 'Speaker-aware summaries',
    desc: 'Notch knows who said what. Filter by person, role, or team — surface what your tech lead committed to.',
  },
  {
    icon: Shield,
    title: 'Privacy-first by default',
    desc: 'Bring-your-own-key for the LLM. SOC 2 Type II. Self-host in your VPC if you want.',
  },
  {
    icon: Send,
    title: 'Ship a recap in one click',
    desc: 'Auto-drafted recap email or Slack post the moment your call ends. Edit if you want. Or don’t.',
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: typeof FEATURES[number];
  index: number;
}) => {
  const Icon = feature.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    // Cursor position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Very subtle iOS-style perspective
    const rotateX = (percentY - 0.5) * -3;
    const rotateY = (percentX - 0.5) * 3;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;

    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`feature-card group relative rounded-2xl border-hairline bg-white/[0.015] p-7 sm:p-8 ${
        feature.accent ? 'md:col-span-2' : ''
      }`}
    >
      {/* Cursor-following liquid light */}
      <div className="liquid-glass" />

      {/* Glass reflection */}
      <div className="glass-reflection" />

      {/* Top glass highlight */}
      <div className="glass-top-highlight" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="feature-icon w-9 h-9 rounded-lg border-hairline-bright flex items-center justify-center bg-white/[0.03] mb-6"
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
          }}
        >
          <Icon
            size={16}
            strokeWidth={1.6}
            className="text-white/80 transition-colors duration-300"
          />
        </motion.div>

        {/* Title */}
        <motion.h3
          className="feature-title text-lg sm:text-xl font-semibold tracking-tight text-white mb-2.5"
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] text-white/55 leading-relaxed">
          {feature.desc}
        </p>
      </div>

      {/* Bottom edge light */}
      <div className="card-edge-glow" />

      {/* Outer shine */}
      <div className="card-shine" />
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Eyebrow className="mb-5">
            FEATURES
          </Eyebrow>

          <h2
            className="text-fade font-semibold tracking-tighter leading-[1.05]"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            }}
          >
            Built for the way engineers actually meet.
          </h2>

          <p className="mt-5 text-white/55 leading-relaxed text-[15px] sm:text-base max-w-lg">
            No screenshots. No transcripts in a Google Doc graveyard.
            Just clean, structured intel from every call.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;