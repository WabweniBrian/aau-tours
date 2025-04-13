"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash2, Check, CreditCardIcon } from "lucide-react";
import { getUserPaymentMethods } from "@/data/user-payment-methods";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaymentMethodsPage() {
  const paymentMethods = getUserPaymentMethods();
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between sm:flex-row sm:items-center">
        <h2 className="text-2xl font-semibold">Payment Methods</h2>
        <Dialog open={showAddCard} onOpenChange={setShowAddCard}>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0">
              <Plus size={16} className="mr-2" />
              Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
              <DialogDescription>
                Add a new credit or debit card to your account.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardType">Card Type</Label>
                <Select>
                  <SelectTrigger id="cardType">
                    <SelectValue placeholder="Select card type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="mastercard">Mastercard</SelectItem>
                    <SelectItem value="amex">American Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddCard(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowAddCard(false)}>Add Card</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {paymentMethods.length > 0 ? (
          paymentMethods.map((method, index) => (
            <Card
              key={index}
              className={method.isDefault ? "border-primary" : ""}
            >
              <CardContent className="p-6">
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  <div className="mb-4 flex items-center md:mb-0">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {method.cardType} •••• {method.lastFour}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Expires {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {method.isDefault && (
                      <span className="flex items-center text-sm font-medium text-primary">
                        <Check size={16} className="mr-1" />
                        Default
                      </span>
                    )}

                    {!method.isDefault && (
                      <Button variant="outline" size="sm">
                        Set as Default
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <CreditCardIcon size={32} className="text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium">No Payment Methods</h3>
              <p className="mb-6 text-muted-foreground">
                You haven&apos;t added any payment methods to your account yet.
              </p>
              <Button onClick={() => setShowAddCard(true)}>
                <Plus size={16} className="mr-2" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Mobile Money</CardTitle>
            <CardDescription>
              Manage your mobile money payment options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                    <span className="font-bold text-yellow-600">MM</span>
                  </div>
                  <div>
                    <p className="font-medium">MTN Mobile Money</p>
                    <p className="text-sm text-muted-foreground">
                      +256 752 XXX XXX
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <span className="font-bold text-red-600">AM</span>
                  </div>
                  <div>
                    <p className="font-medium">Airtel Money</p>
                    <p className="text-sm text-muted-foreground">
                      +256 756 XXX XXX
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button variant="outline" className="w-full">
              <Plus size={16} className="mr-2" />
              Add Mobile Money Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
