import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { UserIcon, WalletIcon, HistoryIcon, SettingsIcon } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const Profile: React.FC = () => {
  const transactions = [
    { id: 1, type: 'Purchase', item: 'GPU Cluster Access', amount: '$125.00', date: '2024-01-15' },
    { id: 2, type: 'Sale', item: 'Edge Computing Node', amount: '$45.00', date: '2024-01-14' },
    { id: 3, type: 'Purchase', item: 'AI Model API', amount: '$12.50', date: '2024-01-13' }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Profile
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Manage your account, wallets, and transaction history
            </p>
          </div>
        </section>

        {/* Profile Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="wallets">Wallets</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <UserIcon className="h-5 w-5" />
                      <CardTitle>Personal Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Input id="bio" placeholder="Tell us about yourself" />
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wallets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <WalletIcon className="h-5 w-5" />
                      <CardTitle>Connected Wallets</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">MetaMask</p>
                        <p className="text-sm text-muted-foreground">0x1234...5678</p>
                      </div>
                      <Badge variant="secondary">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">WalletConnect</p>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    <Button>Add New Wallet</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <HistoryIcon className="h-5 w-5" />
                      <CardTitle>Transaction History</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{tx.item}</p>
                            <p className="text-sm text-muted-foreground">{tx.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{tx.amount}</p>
                            <Badge variant={tx.type === 'Purchase' ? 'destructive' : 'default'}>
                              {tx.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <SettingsIcon className="h-5 w-5" />
                      <CardTitle>Account Settings</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about your account</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Privacy Settings</p>
                        <p className="text-sm text-muted-foreground">Control your data and privacy</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Profile;