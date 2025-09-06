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
import CangguThreeDaysRetreat from "./pages/CangguThreeDaysRetreat";
import CangguFourDaysRetreat from "./pages/CangguFourDaysRetreat";
import CangguFiveDaysRetreat from "./pages/CangguFiveDaysRetreat";
import CangguSixDaysRetreat from "./pages/CangguSixDaysRetreat";
import CangguSevenDaysRetreat from "./pages/CangguSevenDaysRetreat";
import CangguEightDaysRetreat from "./pages/CangguEightDaysRetreat";
import CangguNineDaysRetreat from "./pages/CangguNineDaysRetreat";
import CangguTenDaysRetreat from "./pages/CangguTenDaysRetreat";
import CangguElevenDaysRetreat from "./pages/CangguElevenDaysRetreat";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
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
          <Route path="/canggu-3-days-retreat" element={<CangguThreeDaysRetreat />} />
          <Route path="/canggu-4-days-retreat" element={<CangguFourDaysRetreat />} />
          <Route path="/canggu-5-days-retreat" element={<CangguFiveDaysRetreat />} />
          <Route path="/canggu-6-days-retreat" element={<CangguSixDaysRetreat />} />
          <Route path="/canggu-7-days-retreat" element={<CangguSevenDaysRetreat />} />
          <Route path="/canggu-8-days-retreat" element={<CangguEightDaysRetreat />} />
          <Route path="/canggu-9-days-retreat" element={<CangguNineDaysRetreat />} />
          <Route path="/canggu-10-days-retreat" element={<CangguTenDaysRetreat />} />
          <Route path="/canggu-11-days-retreat" element={<CangguElevenDaysRetreat />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
