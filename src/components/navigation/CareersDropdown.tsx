import GlassDropdown from "./GlassDropdown";

export default function CareersDropdown() {
  return (
    <GlassDropdown>
      <div className="grid grid-cols-2 gap-10 text-sm">
        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            CAREERS
          </h4>
          <ul className="space-y-3">
            <li><a href="/about">+ Roles</a></li>
            <li><a href="/vision">+ Vision</a></li>
            <li><a href="/careers">+ Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            About Us
          </h4>
          <ul className="space-y-3">
            <li>GrapeUAV is a deep-tech company
building autonomous drone
infrastructure for 24/7 operations</li>
            {/* <li>+ Press</li> */}
          </ul>
        </div>
      </div>
    </GlassDropdown>
  );
}
