type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.28em] ${
            dark ? "text-[var(--color-accent)]" : "text-[var(--color-blue)]"
          }`}
        >
          {label}
        </p>
      )}

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 sm:text-base ${
            dark ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
