import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Changelog', href: '#' },
  { label: 'Docs', href: '#' },
];

const Logo = () => (
  <a href="#" className="flex items-center gap-2 group">
    {/* Mark - a notched square */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform group-hover:rotate-90 duration-500"
    >
      <path
        d="M2 2H14L20 8V20H8L2 14V2Z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M2 2L8 8H14L20 8"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />

      <path
        d="M8 8V20"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>

    <span className="font-semibold text-base tracking-tight text-white">
      notch
    </span>
  </a>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/70 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 h-14 sm:h-16">
        
        {/* Logo */}
        <Logo />

        {/* Navigation */}
<ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
  {LINKS.map((link) => {
    const isHovered = hoveredLink === link.label;

    return (
      <li
        key={link.label}
        className="relative"
        onMouseEnter={() => setHoveredLink(link.label)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {/* Liquid glass background */}
        {isHovered && (
          <motion.div
            layoutId="nav-liquid-glass"
            className="absolute inset-0 rounded-full overflow-hidden"
            transition={{
              type: 'spring',
              stiffness: 420,
              damping: 30,
              mass: 0.6,
            }}
          >
            {/* Glass surface */}
            <div className="absolute inset-0 bg-white/[0.075] backdrop-blur-2xl" />

            {/* Inner glass highlight */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.04)',
              }}
            />

            {/* Soft liquid reflection */}
            <motion.div
              initial={{
                opacity: 0,
                x: '-100%',
              }}
              animate={{
                opacity: 1,
                x: '100%',
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent blur-md"
            />

            {/* Purple refraction */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-8 bg-violet-400/15 blur-xl rounded-full" />
          </motion.div>
        )}

        {/* Navigation text */}
        <motion.a
          href={link.href}
          animate={{
            scale: isHovered ? 1.09 : 1,
            color: isHovered
              ? 'rgba(255,255,255,1)'
              : 'rgba(255,255,255,0.60)',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
            mass: 0.45,
          }}
          className="relative z-10 block px-4 py-2 text-[13px] font-medium origin-center"
        >
          {link.label}
        </motion.a>
      </li>
    );
  })}
</ul>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="hidden sm:inline-block text-[13px] font-medium text-white/60 hover:text-white transition-colors px-2"
          >
            Sign in
          </a>

          <Button variant="primary" size="sm">
            Try Notch
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;