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

// Get base path from Vite (set during build based on vite.config.ts)
// For GitHub Pages project pages: /repo-name/
// For user pages or local dev: /
// Normalize to ensure it starts and ends with /
let basePath = import.meta.env.BASE_URL || '/';

// Fallback: detect base path from current URL if on GitHub Pages
if (basePath === '/' && typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  // If we're on GitHub Pages and the first path segment exists and isn't a known route
  if (pathParts.length > 0) {
    const knownRoutes = ['contact', 'index.html', '404.html'];
    if (!knownRoutes.includes(pathParts[0])) {
      basePath = `/${pathParts[0]}/`;
    }
  }
}

if (!basePath.startsWith('/')) basePath = '/' + basePath;
if (!basePath.endsWith('/') && basePath !== '/') basePath = basePath + '/';

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
      const path = basePath + redirectPath.replace(/~and~/g, '&').replace(/^\/+/, '');
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
      <BrowserRouter basename={basePath}>
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
