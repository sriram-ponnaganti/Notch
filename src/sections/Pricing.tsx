import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';

interface Tier {
  name: string;
  price: string;
  unit?: string;
  blurb: string;
  cta: string;
  features: string[];
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    name: 'Solo',
    price: '$0',
    unit: 'forever',
    blurb: 'For individuals who want their meetings to actually go somewhere.',
    cta: 'Start free',
    features: [
      '5 hours of meetings / month',
      'Action item extraction',
      'Searchable history (30 days)',
      'Slack & email recap',
    ],
  },
  {
    name: 'Team',
    price: '$12',
    unit: 'per seat / month',
    blurb: 'For engineering teams that ship — and need a paper trail.',
    cta: 'Start 14-day trial',
    features: [
      'Unlimited meeting hours',
      'Linear, GitHub, Jira integrations',
      'Speaker-aware summaries',
      'Searchable history (unlimited)',
      'Shared workspaces',
      'Priority email support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'For orgs with strict compliance, audit, or self-host needs.',
    cta: 'Talk to sales',
    features: [
      'Everything in Team',
      'SOC 2 Type II report',
      'SAML SSO + SCIM',
      'BYO key / self-host in VPC',
      'Dedicated CSM',
      '99.99% SLA',
    ],
  },
];

const PricingCard = ({
  tier,
  index,
}: {
  tier: Tier;
  index: number;
}) => {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Very subtle 3D movement
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget;

    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`feature-card group relative rounded-2xl p-7 sm:p-8 flex flex-col gap-6 ${
        tier.featured
          ? 'border border-violet-glow/50 bg-gradient-to-b from-violet-glow/[0.08] to-transparent'
          : 'border-hairline bg-white/[0.015]'
      }`}
      style={
        tier.featured
          ? {
              boxShadow:
                '0 0 60px -20px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            }
          : undefined
      }
    >
      {/* Cursor-following liquid glass */}
      <div className="liquid-glass" />

      {/* Glass reflection */}
      <div className="glass-reflection" />

      {/* Moving glow */}
      <div className="card-edge-glow" />

      {tier.featured && (
        <span className="relative z-10 absolute -top-3 left-7 px-2.5 py-1 rounded-full bg-violet-glow text-white font-mono text-[10px] uppercase tracking-widest font-medium">
          Most popular
        </span>
      )}

      {/* Header */}
      <div className="relative z-10">
        <h3 className="font-semibold text-lg tracking-tight text-white mb-2">
          {tier.name}
        </h3>

        <p className="text-[13.5px] text-white/55 leading-relaxed h-12">
          {tier.blurb}
        </p>
      </div>

      {/* Price */}
      <div className="relative z-10 flex items-baseline gap-2">
        <span className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white">
          {tier.price}
        </span>

        {tier.unit && (
          <span className="font-mono text-[12px] text-white/40">
            {tier.unit}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="relative z-10">
        <Button
          variant={tier.featured ? 'primary' : 'subtle'}
          size="md"
          className="w-full"
        >
          {tier.cta}
        </Button>
      </div>

      {/* Divider */}
      <div className="relative z-10 h-px bg-white/[0.06]" />

      {/* Features */}
      <ul className="relative z-10 space-y-2.5">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-[14px] text-white/75"
          >
            <Check
              size={14}
              strokeWidth={2}
              className={`mt-0.5 shrink-0 ${
                tier.featured
                  ? 'text-violet-soft'
                  : 'text-white/40'
              }`}
            />

            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="flex flex-col items-start sm:items-center text-left sm:text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Eyebrow className="mb-5">PRICING</Eyebrow>

          <h2
            className="text-fade font-semibold tracking-tighter leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Simple pricing.
            <br />
            Honest limits.
          </h2>

          <p className="mt-5 text-white/55 leading-relaxed text-[15px] sm:text-base max-w-lg">
            Free forever for individuals. Per-seat for teams. No "contact us"
            unless you're truly enterprise.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;