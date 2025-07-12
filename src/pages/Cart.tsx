import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TrashIcon, PlusIcon, MinusIcon, ShoppingCartIcon } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const Cart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      title: "High-Performance GPU Cluster",
      provider: "TechProvider",
      price: 2.50,
      quantity: 2,
      unit: "hour",
      category: "compute"
    },
    {
      id: 2,
      title: "Edge Computing Node",
      provider: "EdgeTech",
      price: 0.15,
      quantity: 10,
      unit: "hour",
      category: "hardware"
    },
    {
      id: 3,
      title: "AI Model API",
      provider: "AILabs",
      price: 0.001,
      quantity: 1000,
      unit: "request",
      category: "compute"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Cart
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Review your selected items and proceed to checkout
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {cartItems.length > 0 ? (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl font-bold mb-6">Cart Items ({cartItems.length})</h2>
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              <Badge variant={item.category === 'compute' ? 'default' : 'secondary'}>
                                {item.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">by {item.provider}</p>
                            <p className="text-lg font-bold text-primary">
                              ${item.price.toFixed(3)}/{item.unit}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="icon">
                                <MinusIcon className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon">
                                <PlusIcon className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                                <TrashIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                      </Button>
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <ShoppingCartIcon className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Button size="lg">
                  Browse Marketplace
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Cart;