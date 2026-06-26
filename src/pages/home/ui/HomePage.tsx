import { appRoutes } from '../../../shared/config/routes';
import { PageShell } from '../../../shared/ui/page-shell';

export function HomePage() {
  return (
    <PageShell title="Agents Course" subtitle="React + TypeScript starter">
      <nav className="home-links" aria-label="Project layers">
        {appRoutes.map((route) => (
          <a className="home-link" href={route.href} key={route.href}>
            <span>{route.label}</span>
            <small>{route.description}</small>
          </a>
        ))}
      </nav>
    </PageShell>
  );
}
