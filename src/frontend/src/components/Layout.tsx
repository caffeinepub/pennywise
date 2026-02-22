import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { Building2, Users, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Layout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate({ to: '/' })}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pennywise
              </h1>
            </button>

            <nav className="flex items-center gap-2">
              <Button
                variant={currentPath === '/' ? 'default' : 'ghost'}
                onClick={() => navigate({ to: '/' })}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
              <Button
                variant={currentPath === '/brands' ? 'default' : 'ghost'}
                onClick={() => navigate({ to: '/brands' })}
                className="gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">Brands</span>
              </Button>
              <Button
                variant={currentPath === '/providers' ? 'default' : 'ghost'}
                onClick={() => navigate({ to: '/providers' })}
                className="gap-2"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Providers</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Pennywise. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with{' '}
              <span className="text-destructive">♥</span>{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'pennywise-app'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
