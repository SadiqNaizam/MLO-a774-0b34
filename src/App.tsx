import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import MoveMoneyPage from "./pages/MoveMoneyPage";
import CardControlsPage from "./pages/CardControlsPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import AccountDetailsPage from "./pages/AccountDetailsPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/move-money" element={<MoveMoneyPage />} />
          <Route path="/card-controls" element={<CardControlsPage />} />
          <Route path="/transactions" element={<TransactionHistoryPage />} />
          <Route path="/account-details" element={<AccountDetailsPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;