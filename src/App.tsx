import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle GitHub Pages redirect
const GitHubPagesRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on GitHub Pages and have the redirect format (?/path)
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('/');
    
    if (redirectPath) {
      // Convert the redirect path back to a normal path
      // The 404.html script converts /contact to ?/contact
      // We need to convert it back to /contact
      const path = '/' + redirectPath.replace(/~and~/g, '&');
      const newSearch = location.search.replace(/\/[^&]*/, '');
      const newUrl = path + newSearch + location.hash;
      window.history.replaceState(null, '', newUrl);
      window.location.reload();
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GitHubPagesRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
