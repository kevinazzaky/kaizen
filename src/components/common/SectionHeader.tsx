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
        <div
          className={`mb-4 inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ${
            dark
              ? "border-white/15 bg-white/10 text-[var(--color-accent)]"
              : "border-blue-100 bg-[var(--color-blue-soft)] text-[var(--color-blue)]"
          }`}
        >
          {label}
        </div>
      )}

      <h2
        className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <div
        className={`mt-5 h-1 w-16 rounded-full ${
          align === "center" ? "mx-auto" : ""
        } ${dark ? "bg-[var(--color-accent)]" : "bg-[var(--color-blue)]"}`}
      />

      {description && (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base ${
            dark ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
