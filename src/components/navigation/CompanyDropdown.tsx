import GlassDropdown from "./GlassDropdown";

export default function CompanyDropdown() {
  return (
    <GlassDropdown>
      <div className="grid grid-cols-2 gap-10 text-sm">
        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            COMPANY
          </h4>
          <ul className="space-y-3">
            <li><a href="/about">+ About</a></li>
            <li><a href="/about#items">+ Vision</a></li>
            <li><a href="/careers">+ Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            Focus
          </h4>
          <ul className="space-y-3">
            <li>Autonomy</li>
            <li>Reliablity</li>
            <li>Deployment</li>
          </ul>
        </div>
      </div>
    </GlassDropdown>
  );
}
