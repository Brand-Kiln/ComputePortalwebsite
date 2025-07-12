import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircleIcon, BookOpenIcon, MailIcon, PhoneIcon } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const Help: React.FC = () => {
  const faqs = [
    {
      question: "What is ComputePortal?",
      answer: "ComputePortal is the world's first truly decentralized marketplace for compute power and hardware resources, bridging Web2 and Web3 ecosystems."
    },
    {
      question: "How do I get started as a buyer?",
      answer: "Simply browse our marketplace, connect your wallet or set up fiat payments, and start purchasing the compute or hardware resources you need."
    },
    {
      question: "Can I sell my hardware on the platform?",
      answer: "Yes! You can list your compute power or hardware resources and start earning by providing services to our global community."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept both cryptocurrency payments and traditional fiat payments to make our platform accessible to everyone."
    },
    {
      question: "Is the platform secure?",
      answer: "Absolutely. We use blockchain technology, smart contracts, and industry-standard security practices to ensure all transactions are safe and transparent."
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to your questions and get the support you need
            </p>
          </div>
        </section>

        {/* Quick Help Options */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Can We Help?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <BookOpenIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guides and tutorials
                  </p>
                  <Button variant="outline" size="sm">Browse Docs</Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <MessageCircleIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant help from our support team
                  </p>
                  <Button variant="outline" size="sm">Start Chat</Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <MailIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us detailed questions via email
                  </p>
                  <Button variant="outline" size="sm">Send Email</Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <PhoneIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our support team
                  </p>
                  <Button variant="outline" size="sm">Call Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is available 24/7 to assist you
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>General Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">support@computeportal.com</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">business@computeportal.com</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Help;