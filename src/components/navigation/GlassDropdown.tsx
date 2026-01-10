export default function GlassDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        pointer-events-none
        fixed left-0 top-[var(--nav-height)]
        w-full
        opacity-0 translate-y-4
        transition-all duration-300 ease-out
        group-hover:pointer-events-auto
        group-hover:opacity-100
        group-hover:translate-y-0
      "
    >
      {/* 🔹 Unified glass sheet */}
      <div
        className="
          bg-black/40
          backdrop-blur-xl
          border-t border-black/10
          shadow-2xl
        "
      >
        {/* 🔹 Content aligned with navbar */}
        <div className="max-w-4xl mx-auto px-12 py-12">
          {children}
        </div>
      </div>
    </div>
  );
}
