import React from 'react';
import { ArrowDownCircle, ArrowUpCircle, ShoppingCart } from 'lucide-react'; // Example icons for transaction types

export interface RecentActivity {
  id: string;
  description: string;
  amount: number;
  date: string; // Or Date object, format as needed
  type: 'debit' | 'credit' | 'purchase'; // Example types
}

interface RecentActivityItemProps {
  activity: RecentActivity;
}

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({ activity }) => {
  console.log("Rendering RecentActivityItem:", activity.description);

  const isCredit = activity.amount > 0 && (activity.type === 'credit');
  const isDebitOrPurchase = activity.amount < 0 || (activity.type === 'debit' || activity.type === 'purchase');

  const Icon = isCredit ? ArrowUpCircle : (activity.type === 'purchase' ? ShoppingCart : ArrowDownCircle);
  const amountColor = isCredit ? 'text-green-600' : 'text-red-600';
  const formattedAmount = `${isCredit ? '+' : ''}${Math.abs(activity.amount).toFixed(2)}`;

  return (
    <div className="flex items-center justify-between py-3 px-1 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        <Icon className={`mr-3 h-5 w-5 ${isCredit ? 'text-green-500' : 'text-red-500'}`} />
        <div>
          <p className="text-sm font-medium text-gray-800">{activity.description}</p>
          <p className="text-xs text-gray-500">{activity.date}</p>
        </div>
      </div>
      <p className={`text-sm font-semibold ${amountColor}`}>
        ${formattedAmount}
      </p>
    </div>
  );
};

export default RecentActivityItem;