import React, { useState } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DollarSign, Users, MessageSquare, Send } from 'lucide-react';

const MoveMoneyPage = () => {
  console.log('MoveMoneyPage loaded');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Move money form submitted');
    setShowConfirmation(true);
  };

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
              <BreadcrumbPage>Move Money</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Move Money</CardTitle>
            <CardDescription>Transfer funds securely to another account.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fromAccount">From Account</Label>
                <Select defaultValue="acc001">
                  <SelectTrigger id="fromAccount">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acc001">Spend & Save (•••• 1234) - $10,250.75</SelectItem>
                    <SelectItem value="acc002">High-Yield Savings (•••• 5678) - $25,000.00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Recipient Name</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="recipientName" placeholder="e.g., John Doe" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipientAccount">Recipient Account Number</Label>
                  <Input id="recipientAccount" placeholder="Enter account number" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="amount" type="number" placeholder="0.00" step="0.01" min="0.01" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reference">Reference (Optional)</Label>
                 <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="reference" placeholder="e.g., Birthday gift" className="pl-10" />
                 </div>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                <DialogTrigger asChild>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" /> Review & Send
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Transfer</DialogTitle>
                    <DialogDescription>
                      Please review the details before confirming your transfer.
                      {/* Display transfer details here dynamically */}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowConfirmation(false)}>Cancel</Button>
                    <Button onClick={() => { console.log('Transfer confirmed'); setShowConfirmation(false); }}>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default MoveMoneyPage;