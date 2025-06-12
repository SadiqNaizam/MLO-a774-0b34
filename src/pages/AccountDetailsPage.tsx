import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Bell, FileText, Info } from 'lucide-react';

const AccountDetailsPage = () => {
  console.log('AccountDetailsPage loaded');

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
              <BreadcrumbPage>Account Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Account Details</CardTitle>
            <CardDescription>Detailed information for your Spend & Save Account (•••• 1234).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border rounded-lg">
              <div>
                <Label className="text-sm text-gray-500">Account Name</Label>
                <p className="text-lg font-semibold">Spend & Save Account</p>
              </div>
              <div>
                <Label className="text-sm text-gray-500">Account Number</Label>
                <p className="text-lg font-semibold">**** **** **** 1234</p>
              </div>
              <div>
                <Label className="text-sm text-gray-500">Account Type</Label>
                <p className="text-lg font-semibold">Checking Account</p>
              </div>
              <div>
                <Label className="text-sm text-gray-500">Routing Number</Label>
                <p className="text-lg font-semibold">012345678</p>
              </div>
               <div>
                <Label className="text-sm text-gray-500">Interest Rate (APY)</Label>
                <p className="text-lg font-semibold">0.05%</p>
              </div>
               <div>
                <Label className="text-sm text-gray-500">Overdraft Limit</Label>
                <p className="text-lg font-semibold">$500.00 (if applicable)</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="statements">
                <AccordionTrigger className="text-base font-medium">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" /> Account Statements
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  <p className="text-sm text-gray-600">Download your monthly or custom-dated statements.</p>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download June 2024 Statement
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download Custom Date Range
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="alerts">
                <AccordionTrigger className="text-base font-medium">
                  <Bell className="mr-2 h-5 w-5 text-blue-600" /> Manage Alerts
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  <p className="text-sm text-gray-600">Configure alerts for low balance, large transactions, etc.</p>
                  {/* Placeholder for alert settings */}
                  <div className="flex items-center justify-between">
                    <Label htmlFor="low-balance-alert">Low Balance Alert ($100)</Label>
                    <Button variant="link" size="sm">Edit</Button>
                  </div>
                   <div className="flex items-center justify-between">
                    <Label htmlFor="large-transaction-alert">Large Transaction Alert ($1000)</Label>
                    <Button variant="link" size="sm">Edit</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account-info">
                <AccordionTrigger className="text-base font-medium">
                  <Info className="mr-2 h-5 w-5 text-blue-600" /> Other Information
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  <p className="text-sm text-gray-600">View terms and conditions, fee schedules, or close your account.</p>
                  <Button variant="link" className="p-0 h-auto text-blue-600">View Terms & Conditions</Button><br />
                  <Button variant="link" className="p-0 h-auto text-blue-600">View Fee Schedule</Button><br />
                  <Button variant="destructive" size="sm" className="mt-2">Request Account Closure</Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AccountDetailsPage;