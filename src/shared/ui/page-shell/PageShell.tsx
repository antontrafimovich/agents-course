import type { PropsWithChildren } from 'react';

type PageShellProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

export function PageShell({ children, subtitle, title }: PageShellProps) {
  return (
    <main className="page-shell">
      <section className="page-shell__content">
        <header className="page-shell__header">
          <h1 className="page-shell__title">{title}</h1>
          {subtitle ? <p className="page-shell__subtitle">{subtitle}</p> : null}
        </header>
        {children}
      </section>
    </main>
  );
}
