import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import CampaignDetails from "@/pages/CampaignDetails";
import Reports from "@/pages/Reports";
import Team from "@/pages/Team";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

function Router() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Layout mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/campaign/:id" component={CampaignDetails} />
        <Route path="/reports" component={Reports} />
        <Route path="/team" component={Team} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
