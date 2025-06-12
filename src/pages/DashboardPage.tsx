import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import AccountSummaryCard from '@/components/AccountSummaryCard';
import Footer from '@/components/layout/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RecentActivity } from '@/components/RecentActivityItem'; // Assuming RecentActivityItem exports this interface

// Placeholder data for AccountSummaryCard
const placeholderAccountActivities: RecentActivity[] = [
  { id: 'txn1', description: 'Online Purchase - Amazon', amount: -75.50, date: '2024-07-28', type: 'purchase' },
  { id: 'txn2', description: 'Salary Deposit', amount: 2500.00, date: '2024-07-27', type: 'credit' },
  { id: 'txn3', description: 'Utility Bill - Electricity', amount: -120.00, date: '2024-07-26', type: 'debit' },
];

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ScrollArea className="h-full">
          <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Accounts</h1>
            <AccountSummaryCard
              accountId="ACC001"
              accountName="Spend & Save Account"
              accountType="Checking"
              accountNumber="•••• 1234"
              balance={10250.75}
              recentActivities={placeholderAccountActivities}
              onMoveMoneyClick={(accountId) => console.log(`Move money clicked for ${accountId}`)}
              onViewAllTransactionsClick={(accountId) => console.log(`View all transactions for ${accountId}`)}
            />
            <AccountSummaryCard
              accountId="ACC002"
              accountName="High-Yield Savings"
              accountType="Savings"
              accountNumber="•••• 5678"
              balance={25000.00}
              recentActivities={[
                { id: 'txn4', description: 'Interest Earned', amount: 50.20, date: '2024-07-30', type: 'credit' },
              ]}
            />
            {/* Add more AccountSummaryCard components if the user has multiple accounts */}
          </div>
        </ScrollArea>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;