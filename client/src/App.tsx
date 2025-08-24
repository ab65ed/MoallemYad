import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Blackboard from "@/pages/Blackboard";
import Arena from "@/pages/Arena";
import Canvas from "@/pages/Canvas";
import Guide from "@/pages/Guide";
import Cafe from "@/pages/Cafe";
import Mirror from "@/pages/Mirror";
import Final from "@/pages/Final";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-memorial-cream">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blackboard" component={Blackboard} />
        <Route path="/arena" component={Arena} />
        <Route path="/canvas" component={Canvas} />
        <Route path="/guide" component={Guide} />
        <Route path="/cafe" component={Cafe} />
        <Route path="/mirror" component={Mirror} />
        <Route path="/final" component={Final} />
        <Route path="/gallery" component={Gallery} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
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
