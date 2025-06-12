import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RecentActivityItem, { RecentActivity } from './RecentActivityItem'; // Import the sub-component
import { ArrowRight, Eye } from 'lucide-react'; // Icons for buttons
import { useNavigate } from 'react-router-dom'; // For "Move money" navigation

interface AccountSummaryCardProps {
  accountId: string;
  accountName: string;
  accountType: string; // e.g., "Spend & Save"
  accountNumber: string; // e.g., "•••• 1234"
  balance: number;
  recentActivities?: RecentActivity[]; // Optional recent activities
  onMoveMoneyClick?: (accountId: string) => void; // Custom handler if needed
  onViewAllTransactionsClick?: (accountId: string) => void; // Custom handler
}

const AccountSummaryCard: React.FC<AccountSummaryCardProps> = ({
  accountId,
  accountName,
  accountType,
  accountNumber,
  balance,
  recentActivities = [],
  onMoveMoneyClick,
  onViewAllTransactionsClick
}) => {
  console.log("Rendering AccountSummaryCard for:", accountName);
  const navigate = useNavigate();

  const handleMoveMoney = () => {
    if (onMoveMoneyClick) {
      onMoveMoneyClick(accountId);
    } else {
      // Default navigation if no custom handler
      navigate('/move-money'); // Adjust route as needed
      console.log("Navigating to move money page for account:", accountId);
    }
  };

  const handleViewAllTransactions = () => {
    if (onViewAllTransactionsClick) {
        onViewAllTransactionsClick(accountId);
    } else {
        navigate('/transactions'); // Adjust to your transactions page route
        console.log("Navigating to all transactions page for account:", accountId);
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-xl">{accountName}</CardTitle>
                <CardDescription>{accountType} - {accountNumber}</CardDescription>
            </div>
            {/* Placeholder for bank logo or icon */}
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <div className="text-left mb-4">
          <p className="text-sm text-gray-500">Available Balance</p>
          <p className="text-3xl font-bold text-gray-800">
            ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        {recentActivities.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="recent-activity">
              <AccordionTrigger className="text-sm font-medium hover:no-underline">
                <div className="flex items-center">
                    <Eye className="mr-2 h-4 w-4 text-blue-600" />
                    Quick View Recent Activity
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-0 px-1">
                {recentActivities.slice(0, 3).map((activity) => ( // Show max 3 items initially
                  <RecentActivityItem key={activity.id} activity={activity} />
                ))}
                {recentActivities.length > 3 && (
                    <Button variant="link" size="sm" className="w-full justify-center mt-2 text-blue-600" onClick={handleViewAllTransactions}>
                        View all transactions
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
        <Button className="w-full sm:w-auto flex-1 bg-blue-600 hover:bg-blue-700 text-white" onClick={handleMoveMoney}>
          Move Money
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {/* Potentially add other actions like "Pay Bills", "Card Controls" etc. */}
        <Button variant="outline" className="w-full sm:w-auto flex-1" onClick={() => navigate('/account-details')}> {/* Example navigation */}
            Account Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountSummaryCard;