import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WalletIcon, CheckCircleIcon } from 'lucide-react';

const ListingForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    resourceType: '',
    title: '',
    description: '',
    specs: '',
    pricing: '',
    walletAddress: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mock submission - in real app would send to backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="listing-section" className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Submission Received!</h3>
              <p className="text-green-700">
                Your listing has been submitted for approval. We'll review it within 24 hours and notify you via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="listing-section" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">List your Decentralized Compute and Hardware</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Resource Listing Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="compute" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="compute">Compute Resources</TabsTrigger>
                  <TabsTrigger value="hardware">Hardware Resources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="compute" className="space-y-4">
                  <div>
                    <Label htmlFor="compute-type">Compute Type</Label>
                    <Select onValueChange={(value) => handleInputChange('resourceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select compute type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpu">GPU Computing</SelectItem>
                        <SelectItem value="cpu">CPU Processing</SelectItem>
                        <SelectItem value="ai-model">AI Model/API</SelectItem>
                        <SelectItem value="data-processing">Data Processing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                
                <TabsContent value="hardware" className="space-y-4">
                  <div>
                    <Label htmlFor="hardware-type">Hardware Type</Label>
                    <Select onValueChange={(value) => handleInputChange('resourceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hardware type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpu-card">GPU Cards</SelectItem>
                        <SelectItem value="edge-device">Edge Devices</SelectItem>
                        <SelectItem value="storage">Storage Systems</SelectItem>
                        <SelectItem value="custom-rig">Custom Rigs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div>
                <Label htmlFor="title">Resource Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g., NVIDIA RTX 4090 GPU Cluster"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your resource, its capabilities, and use cases..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="specs">Technical Specifications</Label>
                <Textarea 
                  id="specs" 
                  placeholder="e.g., 24GB VRAM, 83 TFLOPS, CUDA Cores: 16384"
                  value={formData.specs}
                  onChange={(e) => handleInputChange('specs', e.target.value)}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="pricing">Pricing (per hour)</Label>
                <Input 
                  id="pricing" 
                  type="number" 
                  step="0.01" 
                  placeholder="0.00"
                  value={formData.pricing}
                  onChange={(e) => handleInputChange('pricing', e.target.value)}
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="wallet" className="flex items-center gap-2">
                  <WalletIcon className="h-4 w-4" />
                  Wallet Address (for payments)
                </Label>
                <Input 
                  id="wallet" 
                  placeholder="0x... or connect MetaMask"
                  value={formData.walletAddress}
                  onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                  required 
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit for Approval
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ListingForm;