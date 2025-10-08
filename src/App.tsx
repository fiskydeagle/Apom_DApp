import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Index from "./pages/Index";
import Gaming from "./pages/Gaming";
import DeFi from "./pages/DeFi";
import NFTMarketplace from "./pages/NFTMarketplace";
import Launchpad from "./pages/Launchpad";
import Governance from "./pages/Governance";
import NotFound from "./pages/NotFound";
import {ThemeProvider} from "next-themes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Background />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/defi" element={<DeFi />} />
            <Route path="/nft-marketplace" element={<NFTMarketplace />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/governance" element={<Governance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
