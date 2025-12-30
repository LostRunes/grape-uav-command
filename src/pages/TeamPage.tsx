import CoreTeam from '../components/sections/CoreTeam';
import Advisors from "@/components/sections/Advisors";
import PageTransition from "@/components/PageTransition";

const TeamPage = () => {
  return (
    <PageTransition>
      <CoreTeam />
      <Advisors />
    </PageTransition>
  );
};

export default TeamPage;
