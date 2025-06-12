import React, { useState } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Lock, AlertTriangle, Eye, CreditCard } from 'lucide-react';

const CardControlsPage = () => {
  console.log('CardControlsPage loaded');
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [showLostStolenDialog, setShowLostStolenDialog] = useState(false);

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
              <BreadcrumbPage>Card Controls</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="w-full max-w-lg mx-auto shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <div>
                    <CardTitle className="text-2xl">Card Controls</CardTitle>
                    <CardDescription>Manage your TSB Debit Card (•••• 1234)</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <Lock className={`mr-3 h-5 w-5 ${isCardFrozen ? 'text-red-500' : 'text-green-500'}`} />
                <Label htmlFor="freeze-card" className="text-base font-medium">
                  {isCardFrozen ? 'Card Frozen' : 'Freeze Card'}
                </Label>
              </div>
              <Switch
                id="freeze-card"
                checked={isCardFrozen}
                onCheckedChange={setIsCardFrozen}
                aria-label="Freeze or unfreeze your card"
              />
            </div>
            {isCardFrozen && <p className="text-sm text-red-600 px-4">Your card is currently frozen. Unfreeze to resume transactions.</p>}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="mr-2 h-4 w-4" /> View PIN
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>View PIN</SheetTitle>
                  <SheetDescription>
                    For security reasons, your PIN will be displayed temporarily. Make sure no one is looking over your shoulder.
                    {/* This would typically involve a secure re-authentication step */}
                  </SheetDescription>
                </SheetHeader>
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold">Your PIN is:</p>
                  <p className="text-4xl font-bold tracking-widest my-4">1234</p>
                  <p className="text-xs text-gray-500">This PIN is for demonstration only.</p>
                </div>
              </SheetContent>
            </Sheet>

            <Dialog open={showLostStolenDialog} onOpenChange={setShowLostStolenDialog}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="w-full justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" /> Report Lost or Stolen Card
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Report Lost or Stolen Card</DialogTitle>
                  <DialogDescription>
                    Reporting your card as lost or stolen will permanently block it. A new card will be issued to your registered address.
                    Please call us immediately at <a href="tel:1-800-TSB-BANK" className="font-semibold text-blue-600 hover:underline">1-800-TSB-BANK</a> to confirm.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowLostStolenDialog(false)}>Cancel</Button>
                  <Button variant="destructive" onClick={() => { console.log('Card reported lost/stolen'); setShowLostStolenDialog(false); setIsCardFrozen(true); }}>Confirm Report</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Placeholder for spending limits control */}
            <div className="p-4 border rounded-lg">
              <Label className="text-base font-medium">Spending Limits</Label>
              <p className="text-sm text-gray-500 mt-1">Adjust your daily or transaction spending limits. (Feature coming soon)</p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-gray-500">
              Changes to card controls may take a few moments to apply.
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CardControlsPage;