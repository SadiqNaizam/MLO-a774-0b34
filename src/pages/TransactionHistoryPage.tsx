import React, { useState } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, CalendarDays, Filter } from 'lucide-react';
import { format } from "date-fns";

// Sample transaction data
const sampleTransactions = [
  { id: 't1', date: new Date(2024, 6, 28), description: 'Online Payment - Netflix', amount: -15.99, type: 'Debit', status: 'Completed' },
  { id: 't2', date: new Date(2024, 6, 27), description: 'Grocery Store', amount: -65.30, type: 'Purchase', status: 'Completed' },
  { id: 't3', date: new Date(2024, 6, 25), description: 'Salary Deposit - Acme Corp', amount: 2200.00, type: 'Credit', status: 'Completed' },
  { id: 't4', date: new Date(2024, 6, 22), description: 'ATM Withdrawal', amount: -100.00, type: 'Withdrawal', status: 'Completed' },
  { id: 't5', date: new Date(2024, 6, 20), description: 'Restaurant - The Italian Place', amount: -45.00, type: 'Purchase', status: 'Pending' },
  { id: 't6', date: new Date(2024, 6, 18), description: 'Transfer to Savings', amount: -500.00, type: 'Transfer', status: 'Completed' },
  { id: 't7', date: new Date(2024, 6, 15), description: 'Refund - Amazon Return', amount: 30.50, type: 'Credit', status: 'Completed' },
];

const ITEMS_PER_PAGE = 5;

const TransactionHistoryPage = () => {
  console.log('TransactionHistoryPage loaded');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered and paginated transactions (add search/filter logic later)
  const filteredTransactions = sampleTransactions; // Placeholder
  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Transaction History</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Transaction History</CardTitle>
            <CardDescription>View all transactions for your Spend & Save Account (•••• 1234).</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Search transactions..." className="pl-10" />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className="w-full md:w-auto">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{format(transaction.date, "PP")}</TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell className={`text-right ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>{transaction.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredTransactions.length === 0 && (
                <p className="text-center text-gray-500 py-8">No transactions found for the selected criteria.</p>
            )}
          </CardContent>
          {totalPages > 1 && (
            <div className="p-4 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p - 1));}} aria-disabled={currentPage === 1} />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                     <PaginationItem key={i}>
                        <PaginationLink href="#" isActive={currentPage === i + 1} onClick={(e) => { e.preventDefault(); setCurrentPage(i + 1);}}>
                        {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                  ))}
                  {/* Add PaginationEllipsis if many pages */}
                  <PaginationItem>
                    <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p + 1));}} aria-disabled={currentPage === totalPages} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TransactionHistoryPage;