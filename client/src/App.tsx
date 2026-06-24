import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocationPage } from "./locations/LocationPage";
import { ramseyData } from "./locations/data/ramsey";
import { piscatawayData } from "./locations/data/piscataway";
import { westOrangeData } from "./locations/data/west-orange";
import { princetonData } from "./locations/data/princeton";
import { cranfordData } from "./locations/data/cranford";
import { parsippanyData } from "./locations/data/parsippany";
import { berkeleyHeightsData } from "./locations/data/berkeley-heights";
import { eatontownData } from "./locations/data/eatontown";
import { moorestownData } from "./locations/data/moorestown";
import { roselandData } from "./locations/data/roseland";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NJHub from "@/pages/NJHub";
import TermsOfUse from "@/pages/TermsOfUse";
import Accessibility from "@/pages/Accessibility";

function Router() {
  return (
    <Switch>
      {/* Root — renders Ramsey as the default proof-layer entry point */}
      <Route path={"/"} component={NJHub} />
      {/* ── NJ Location Pages ─────────────────────────────────────────────── */}
      <Route path={"/locations/nj/ramsey/"} component={() => <LocationPage data={ramseyData} />} />
      <Route path={"/locations/nj/piscataway/"} component={() => <LocationPage data={piscatawayData} />} />
      <Route path={"/locations/nj/west-orange/"} component={() => <LocationPage data={westOrangeData} />} />
      <Route path={"/locations/nj/princeton/"} component={() => <LocationPage data={princetonData} />} />
      <Route path={"/locations/nj/cranford/"} component={() => <LocationPage data={cranfordData} />} />
      <Route path={"/locations/nj/parsippany/"} component={() => <LocationPage data={parsippanyData} />} />
      <Route path={"/locations/nj/berkeley-heights/"} component={() => <LocationPage data={berkeleyHeightsData} />} />
      <Route path={"/locations/nj/eatontown/"} component={() => <LocationPage data={eatontownData} />} />
      <Route path={"/locations/nj/moorestown/"} component={() => <LocationPage data={moorestownData} />} />
      <Route path={"/locations/nj/roseland/"} component={() => <LocationPage data={roselandData} />} />
      {/* ── Legal Pages ───────────────────────────────────────────────────── */}
      <Route path={"/locations/nj/"} component={NJHub} /> {/* alias — canonical points to / */}
      <Route path={"/privacy-policy/"} component={PrivacyPolicy} />
      <Route path={"/terms-of-use/"} component={TermsOfUse} />
      <Route path={"/accessibility/"} component={Accessibility} />
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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
