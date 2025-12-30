import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
