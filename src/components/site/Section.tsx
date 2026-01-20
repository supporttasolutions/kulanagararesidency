export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-18">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs tracking-[0.28em] uppercase text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 font-serif text-3xl leading-[1.05] tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-base leading-7 text-muted">{subtitle}</p>
        ) : null}
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}

