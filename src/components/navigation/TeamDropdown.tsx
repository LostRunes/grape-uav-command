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
            <li><a href="/advisors">+ Advisor</a></li>
            {/* <li><a href="/careers">+ Developer</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
              About Us
          </h4>
          <ul className="space-y-3">
            <li>A small, focused team
of engineers and advisors
driven by systems thinking</li>
            {/* <li>+ Press</li> */}
          </ul>
        </div>
      </div>
    </GlassDropdown>
  );
}
