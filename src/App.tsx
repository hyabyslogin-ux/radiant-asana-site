import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThreeDaysRetreat from "./pages/ThreeDaysRetreat";
import FourDaysRetreat from "./pages/FourDaysRetreat";
import FiveDaysRetreat from "./pages/FiveDaysRetreat";
import SixDaysRetreat from "./pages/SixDaysRetreat";
import SevenDaysRetreat from "./pages/SevenDaysRetreat";
import EightDaysRetreat from "./pages/EightDaysRetreat";
import NineDaysRetreat from "./pages/NineDaysRetreat";
import TenDaysRetreat from "./pages/TenDaysRetreat";
import ElevenDaysRetreat from "./pages/ElevenDaysRetreat";
import UluwatuThreeDaysRetreat from "./pages/UluwatuThreeDaysRetreat";
import UluwatuFourDaysRetreat from "./pages/UluwatuFourDaysRetreat";
import UluwatuFiveDaysRetreat from "./pages/UluwatuFiveDaysRetreat";
import UluwatuSixDaysRetreat from "./pages/UluwatuSixDaysRetreat";
import UluwatuSevenDaysRetreat from "./pages/UluwatuSevenDaysRetreat";
import UluwatuEightDaysRetreat from "./pages/UluwatuEightDaysRetreat";
import UluwatuNineDaysRetreat from "./pages/UluwatuNineDaysRetreat";
import UluwatuTenDaysRetreat from "./pages/UluwatuTenDaysRetreat";
import UluwatuElevenDaysRetreat from "./pages/UluwatuElevenDaysRetreat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/3-days-retreat" element={<ThreeDaysRetreat />} />
          <Route path="/4-days-retreat" element={<FourDaysRetreat />} />
          <Route path="/5-days-retreat" element={<FiveDaysRetreat />} />
          <Route path="/6-days-retreat" element={<SixDaysRetreat />} />
          <Route path="/7-days-retreat" element={<SevenDaysRetreat />} />
          <Route path="/8-days-retreat" element={<EightDaysRetreat />} />
          <Route path="/9-days-retreat" element={<NineDaysRetreat />} />
          <Route path="/10-days-retreat" element={<TenDaysRetreat />} />
          <Route path="/11-days-retreat" element={<ElevenDaysRetreat />} />
          <Route path="/uluwatu-3-days-retreat" element={<UluwatuThreeDaysRetreat />} />
          <Route path="/uluwatu-4-days-retreat" element={<UluwatuFourDaysRetreat />} />
          <Route path="/uluwatu-5-days-retreat" element={<UluwatuFiveDaysRetreat />} />
          <Route path="/uluwatu-6-days-retreat" element={<UluwatuSixDaysRetreat />} />
          <Route path="/uluwatu-7-days-retreat" element={<UluwatuSevenDaysRetreat />} />
          <Route path="/uluwatu-8-days-retreat" element={<UluwatuEightDaysRetreat />} />
          <Route path="/uluwatu-9-days-retreat" element={<UluwatuNineDaysRetreat />} />
          <Route path="/uluwatu-10-days-retreat" element={<UluwatuTenDaysRetreat />} />
          <Route path="/uluwatu-11-days-retreat" element={<UluwatuElevenDaysRetreat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
