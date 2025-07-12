import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BotIcon, MessageCircleIcon, XIcon } from 'lucide-react';

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* AI Agent Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
          size="icon"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <BotIcon className="h-6 w-6" />}
        </Button>
      </div>

      {/* AI Agent Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80">
          <Card className="shadow-xl border-2">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <BotIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Here to help you!</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm">
                    👋 Hi! I'm your AI guide. I can help you:
                  </p>
                  <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
                    <li>• Find the right hardware/software</li>
                    <li>• Understand Web3 concepts</li>
                    <li>• Navigate the marketplace</li>
                    <li>• Connect your wallet</li>
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    🔍 Find Products
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    💡 Learn Web3 Basics
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    🛒 How to Buy/Sell
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIAgent;