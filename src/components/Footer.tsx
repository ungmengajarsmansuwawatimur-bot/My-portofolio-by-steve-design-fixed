import React from 'react';

interface FooterProps {
  onOpenCvModal?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
}

interface FooterNavItem {
  id: string;
  label: string;
  href: string;
  targetId: string;
  hasDropdown?: boolean;
}

const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { id: 'home', label: 'HOME', href: '#home', targetId: 'home' },
  { id: 'about', label: 'ABOUT', href: '#about', targetId: 'about' },
  { id: 'services', label: 'SERVICES', href: '#skills', targetId: 'skills', hasDropdown: true },
  { id: 'portfolio', label: 'PORTFOLIO', href: '#work', targetId: 'work' },
  { id: 'testimonials', label: 'TESTIMONI', href: '#testimonials', targetId: 'testimonials' },
  { id: 'contact', label: 'CONTACT', href: '#contact', targetId: 'contact' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const handleNavClick = (e: React.MouseEvent, item: typeof FOOTER_NAV_ITEMS[number]) => {
    e.preventDefault();

    if (onNavigateHome) {
      onNavigateHome(item.targetId);
    } else {
      if (item.targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.location.hash = '#home';
      } else {
        const el = document.getElementById(item.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = `#${item.targetId}`;
        }
      }
    }
  };

  const scrollToTop = () => {
    if (onNavigateHome) {
      onNavigateHome('home');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      window.location.hash = '#home';
    }
  };

  return (
    <footer className="relative bg-white dark:bg-[#121212] border-t border-[#171717]/10 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12">
        {/* Responsive container matching CSS selector 1 */}
        <div className="space-y-5 sm:space-y-8">
          {/* Top Horizontal Navigation Links Row - 1 Horizontal row across mobile, tablet, and desktop */}
          <nav
            aria-label="Footer Navigasi"
            className="flex flex-nowrap items-center justify-between sm:justify-start gap-x-2 xs:gap-x-3.5 sm:gap-x-8 md:gap-x-10 overflow-x-auto scrollbar-none py-1 text-center sm:text-left"
          >
            {FOOTER_NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`font-heading font-bold text-[10px] xs:text-[11px] sm:text-sm tracking-wide sm:tracking-wider uppercase transition-colors flex items-center justify-center sm:justify-start py-1 whitespace-nowrap shrink-0 cursor-pointer select-none ${
                  item.id === 'home'
                    ? 'text-[#DD9B08] dark:text-[#F9B51B]'
                    : 'text-[#171717] dark:text-white hover:text-[#DD9B08] dark:hover:text-[#F9B51B]'
                } ${item.hasDropdown ? 'gap-1' : ''}`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <span className="text-[9px] sm:text-[10px] leading-none" aria-hidden="true">&#9662;</span>
                )}
              </a>
            ))}
          </nav>

          {/* Divider line matching reference */}
          <div className="w-full border-t border-[#171717]/10 dark:border-white/10" />

          {/* Bottom Row: Social Icons, Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4">
            {/* Social Media Circular Buttons (Facebook, LinkedIn, Instagram, Threads) */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 shrink-0">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/taufik-hidayat-malii-bb54bb343"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.63c0 .9.73 1.64 1.66 1.64s1.63-.74 1.63-1.64c0-.9-.73-1.63-1.63-1.63z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Threads (menggantikan YouTube atas permintaan pemilik situs) */}
              <a
                href="https://www.threads.com/@taufikmli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
                </svg>
              </a>
            </div>

            {/* Copyright & Privacy Policy */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-right w-full sm:w-auto">
              <span className="font-heading text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] text-center sm:text-right leading-relaxed max-w-sm sm:max-w-none">
                &copy; 2026 Final Web Design Inc. All rights reserved &middot;{' '}
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="hover:text-[#171717] dark:hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </a>{' '}
                &middot;{' '}
                <a
                  href="https://www.flaticon.com/free-icon/academy_17206264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
                >
                  Ikon Academy oleh Flaticon
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

