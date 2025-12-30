import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OpenRoles from "./pages/OpenRoles";

// 🆕 NEW PAGES
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";

import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/ContactPage";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
<BrowserRouter>

  <AnimatePresence mode="wait">
    const location = useLocation();
    <Routes location={location} key={location.pathname}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/open-roles" element={<OpenRoles />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </AnimatePresence>
</BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
