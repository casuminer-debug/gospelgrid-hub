import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Cells from "./pages/Cells";
import Financial from "./pages/Financial";
import Events from "./pages/Events";
import Insights from "./pages/Insights";
import Connections from "./pages/Connections";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Certificates from "./pages/Certificates";
import Inventory from "./pages/Inventory";
import Pricing from "./pages/Pricing";
// Lazy loading para os outros módulos que serão implementados// Lazy loaded components
const Volunteers = React.lazy(() => import("./pages/Volunteers"));
const Academy = React.lazy(() => import("./pages/Academy"));
const Donations = React.lazy(() => import("./pages/Donations"));
const Registrations = React.lazy(() => import("./pages/Registrations"));
const Social = React.lazy(() => import("./pages/Social"));
const AutomaticInsights = React.lazy(() => import("./pages/AutomaticInsights"));
const ModuleIntegration = React.lazy(() => import("./pages/ModuleIntegration"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/cells" element={<Cells />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/events" element={<Events />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/volunteers" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <Volunteers />
            </Suspense>
          } />
          <Route path="/academy" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <Academy />
            </Suspense>
          } />
          <Route path="/donations" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <Donations />
            </Suspense>
          } />
          <Route path="/registrations" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <Registrations />
            </Suspense>
          } />
          <Route path="/social" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <Social />
            </Suspense>
          } />
          <Route path="/automatic-insights" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <AutomaticInsights />
            </Suspense>
          } />
          <Route path="/module-integration" element={
            <Suspense fallback={<div className="p-8 flex justify-center">Carregando...</div>}>
              <ModuleIntegration />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
