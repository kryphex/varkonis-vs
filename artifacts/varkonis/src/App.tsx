import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/context/AuthContext";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Cases from "./pages/Cases";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/not-found";

import About from "./pages/About";
import Careers from "./pages/Careers";
import Help from "./pages/Help";
import Status from "./pages/Status";
import Resources from "./pages/Resources";
import MarketTerminal from "./pages/MarketTerminal";

import PortfolioAnalytics from "./pages/platform/PortfolioAnalytics";
import RiskIntelligence from "./pages/platform/RiskIntelligence";
import AIInsights from "./pages/platform/AIInsights";
import ClientReporting from "./pages/platform/ClientReporting";
import DealFlowCRM from "./pages/platform/DealFlowCRM";
import ApiIntegrations from "./pages/platform/ApiIntegrations";

import HedgeFunds from "./pages/solutions/HedgeFunds";
import PrivateEquity from "./pages/solutions/PrivateEquity";
import FamilyOffices from "./pages/solutions/FamilyOffices";
import WealthManagement from "./pages/solutions/WealthManagement";
import MAAdvisory from "./pages/solutions/MAAdvisory";

import AldgateCapital from "./pages/cases/AldgateCapital";
import KestrelFund from "./pages/cases/KestrelFund";
import MeridianWealth from "./pages/cases/MeridianWealth";
import VermontAdvisory from "./pages/cases/VermontAdvisory";

import Changelog from "./pages/resources/Changelog";
import Glossary from "./pages/resources/Glossary";
import ROICalculator from "./pages/resources/ROICalculator";
import Webinars from "./pages/resources/Webinars";
import Whitepapers from "./pages/resources/Whitepapers";

import Docs from "./pages/docs/index";
import GettingStarted from "./pages/docs/GettingStarted";
import ApiReference from "./pages/docs/ApiReference";
import DocsIntegrations from "./pages/docs/Integrations";

import AdminPanel from "./pages/AdminPanel";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import LegalSecurity from "./pages/legal/Security";
import SLA from "./pages/legal/SLA";

const queryClient = new QueryClient();

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user) return <Redirect to="/login" />;
  return <Component />;
}

function GuestRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (user) return <Redirect to="/dashboard" />;
  return <Component />;
}

function AdminRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user) return <Redirect to="/login" />;
  if (user.role !== "admin") return <Redirect to="/dashboard" />;
  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/">{() => <Layout><Home /></Layout>}</Route>
      <Route path="/platform">{() => <Layout><Platform /></Layout>}</Route>
      <Route path="/pricing">{() => <Layout><Pricing /></Layout>}</Route>
      <Route path="/solutions">{() => <Layout><Solutions /></Layout>}</Route>
      <Route path="/cases">{() => <Layout><Cases /></Layout>}</Route>
      <Route path="/contact">{() => <Layout><Contact /></Layout>}</Route>
      <Route path="/blog">{() => <Layout><Blog /></Layout>}</Route>
      <Route path="/about">{() => <Layout><About /></Layout>}</Route>
      <Route path="/careers">{() => <Layout><Careers /></Layout>}</Route>
      <Route path="/help">{() => <Layout><Help /></Layout>}</Route>
      <Route path="/status">{() => <Layout><Status /></Layout>}</Route>
      <Route path="/resources">{() => <Layout><Resources /></Layout>}</Route>
      <Route path="/market-terminal">{() => <Layout><MarketTerminal /></Layout>}</Route>

      <Route path="/platform/portfolio-analytics">{() => <Layout><PortfolioAnalytics /></Layout>}</Route>
      <Route path="/platform/risk-intelligence">{() => <Layout><RiskIntelligence /></Layout>}</Route>
      <Route path="/platform/ai-insights">{() => <Layout><AIInsights /></Layout>}</Route>
      <Route path="/platform/client-reporting">{() => <Layout><ClientReporting /></Layout>}</Route>
      <Route path="/platform/deal-flow-crm">{() => <Layout><DealFlowCRM /></Layout>}</Route>
      <Route path="/platform/api-integrations">{() => <Layout><ApiIntegrations /></Layout>}</Route>

      <Route path="/solutions/hedge-funds">{() => <Layout><HedgeFunds /></Layout>}</Route>
      <Route path="/solutions/private-equity">{() => <Layout><PrivateEquity /></Layout>}</Route>
      <Route path="/solutions/family-offices">{() => <Layout><FamilyOffices /></Layout>}</Route>
      <Route path="/solutions/wealth-management">{() => <Layout><WealthManagement /></Layout>}</Route>
      <Route path="/solutions/ma-advisory">{() => <Layout><MAAdvisory /></Layout>}</Route>

      <Route path="/cases/aldgate-capital">{() => <Layout><AldgateCapital /></Layout>}</Route>
      <Route path="/cases/kestrel-fund">{() => <Layout><KestrelFund /></Layout>}</Route>
      <Route path="/cases/meridian-wealth">{() => <Layout><MeridianWealth /></Layout>}</Route>
      <Route path="/cases/verimont-advisory">{() => <Layout><VermontAdvisory /></Layout>}</Route>

      <Route path="/resources/changelog">{() => <Layout><Changelog /></Layout>}</Route>
      <Route path="/resources/glossary">{() => <Layout><Glossary /></Layout>}</Route>
      <Route path="/resources/roi-calculator">{() => <Layout><ROICalculator /></Layout>}</Route>
      <Route path="/resources/webinars">{() => <Layout><Webinars /></Layout>}</Route>
      <Route path="/resources/whitepapers">{() => <Layout><Whitepapers /></Layout>}</Route>

      <Route path="/docs">{() => <Layout><Docs /></Layout>}</Route>
      <Route path="/docs/getting-started">{() => <Layout><GettingStarted /></Layout>}</Route>
      <Route path="/docs/api">{() => <Layout><ApiReference /></Layout>}</Route>
      <Route path="/docs/integrations">{() => <Layout><DocsIntegrations /></Layout>}</Route>

      <Route path="/legal/privacy">{() => <Layout><Privacy /></Layout>}</Route>
      <Route path="/legal/terms">{() => <Layout><Terms /></Layout>}</Route>
      <Route path="/legal/cookies">{() => <Layout><Cookies /></Layout>}</Route>
      <Route path="/legal/security">{() => <Layout><LegalSecurity /></Layout>}</Route>
      <Route path="/legal/sla">{() => <Layout><SLA /></Layout>}</Route>

      <Route path="/login">{() => <GuestRoute component={Login} />}</Route>
      <Route path="/signup">{() => <GuestRoute component={Signup} />}</Route>
      <Route path="/dashboard">{() => <ProtectedRoute component={Dashboard} />}</Route>
      <Route path="/admin">{() => <AdminRoute component={AdminPanel} />}</Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
