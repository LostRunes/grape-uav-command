import GlassDropdown from "./GlassDropdown";

export default function TeamDropdown() {
  return (
    <GlassDropdown>
      <div className="grid grid-cols-2 gap-10 text-sm">
        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            TEAM
          </h4>
          <ul className="space-y-3">
            <li><a href="/team">+ Core</a></li>
            <li><a href="/Advisors">+ Advisor</a></li>
            <li><a href="/careers">+ Developer</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            MEDIA
          </h4>
          <ul className="space-y-3">
            <li>+ Newsroom</li>
            <li>+ Press</li>
          </ul>
        </div>
      </div>
    </GlassDropdown>
  );
}
