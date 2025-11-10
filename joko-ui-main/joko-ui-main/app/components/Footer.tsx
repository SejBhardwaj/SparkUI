import Link from 'next/link';
import Logo from './Logo';
import { IconHeartBrokenFilled } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4 grayscale" />
            <p className="text-muted-foreground text-sm max-w-md">
              Free, open-source Tailwind CSS components. Copy-paste ready components
              to build beautiful, responsive websites faster. No installation required.
            </p>
          </div>

          {/* Components */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Components</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/components/application" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                  Application
                </Link>
              </li>
              <li>
                <Link href="/components/marketing" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rayasabari/joko-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JokoUI. Free and open source.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with
              <IconHeartBrokenFilled stroke={1.5} className="w-4 h-4" />
              by
              <span>
                <a
                  href="https://rayasabari.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold italic hover:text-primary/80 transition-colors"
                >
                  RYSB
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
