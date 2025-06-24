
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TheWall from "./pages/TheWall";
import TheScroll from "./pages/TheScroll";
import TheTable from "./pages/TheTable";
import TheMap from "./pages/TheMap";
import TheShop from "./pages/TheShop";
import TheHowTo from "./pages/TheHowTo";
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
          <Route path="/the-wall" element={<TheWall />} />
          <Route path="/the-scroll" element={<TheScroll />} />
          <Route path="/the-table" element={<TheTable />} />
          <Route path="/the-map" element={<TheMap />} />
          <Route path="/the-shop" element={<TheShop />} />
          <Route path="/the-how-to" element={<TheHowTo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
