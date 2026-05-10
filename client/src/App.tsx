import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocationPage } from "./locations/LocationPage";
import { ramseyData } from "./locations/data/ramsey";
import { piscatawayData } from "./locations/data/piscataway";

function Router() {
  return (
    <Switch>
      {/* Root — renders Ramsey as the default proof-layer entry point */}
      <Route path={"/"} component={() => <LocationPage data={ramseyData} />} />
      {/* Ramsey location page */}
      <Route path={"/locations/nj/ramsey/"} component={() => <LocationPage data={ramseyData} />} />
      {/* Piscataway location page */}
      <Route path={"/locations/nj/piscataway/"} component={() => <LocationPage data={piscatawayData} />} />
      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
