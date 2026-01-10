type Props = {
  label: string;
  href?: string;
  children?: React.ReactNode;
};

export default function NavItem({ label, href, children }: Props) {
  return (
    <div className="relative group">
      {href ? (
        <a href={href} className="text-sm opacity-80 hover:opacity-100">
          {label}
        </a>
      ) : (
        <span className="cursor-default text-sm opacity-80">
          {label}
        </span>
      )}

      {/* hover buffer */}
      <div className="absolute left-0 top-full h-6 w-full" />

      {children}
    </div>
  );
}
