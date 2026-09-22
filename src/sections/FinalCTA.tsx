import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const FinalCTA = () => {
  return (
    <section className="relative py-28 sm:py-40 border-t border-white/[0.06] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139, 92, 246, 0.22), transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl text-center px-5 sm:px-8"
      >
        <h2
          className="text-fade font-semibold tracking-tightest leading-[0.95] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Stop taking notes.
          <br />
          Start shipping.
        </h2>

        <p className="text-white/55 leading-relaxed max-w-md mx-auto mb-10 text-[15px] sm:text-base">
          Free for individuals. 14-day trial for teams. No credit card to start —
          and no consultant call before you can try it.
        </p>

<div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3">

  {/* Try Notch Free */}
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
      Try Notch free
    </Button>

    <span className="hero-button-glow" />
    <span className="hero-button-reflection" />
  </div>


  {/* Book Demo */}
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
      Book a 15-min demo
    </Button>

    <span className="hero-button-glow" />
    <span className="hero-button-reflection" />
  </div>

</div>

        <div className="mt-10 font-mono text-[11px] uppercase tracking-widest text-white/30">
          ⚡ Live in your workspace in under 2 minutes
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
