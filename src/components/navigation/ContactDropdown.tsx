import GlassDropdown from "./GlassDropdown";

export default function ContactDropdown() {
  return (
    <GlassDropdown>
      <div className="grid grid-cols-2 gap-10 text-sm">
        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            Contact
          </h4>
          <ul className="space-y-3">
            <li><a href="mailto:contact@grapeuav.com">+ Email</a></li>
            <li><a href="https://www.linkedin.com/company/grape-uav">+ LinkedIn</a></li>
            {/* <li><a href="/careers">+ Careers</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-widest opacity-50">
            Location
          </h4>
          <ul className="space-y-3">
            <li>IIT Bhubaneswar Research and Entrepreneurship Park, Odisha, India</li>
            {/* <li>+ Press</li> */}
          </ul>
        </div>
      </div>
    </GlassDropdown>
  );
}
