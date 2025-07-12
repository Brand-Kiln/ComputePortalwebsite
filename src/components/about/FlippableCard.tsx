import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

interface FlippableCardProps {
  name: string;
  country: string;
  focus: string;
  description: string;
  linkedinUrl: string;
  imageUrl: string;
  type: 'advisor' | 'founder';
}

const FlippableCard: React.FC<FlippableCardProps> = ({
  name,
  country,
  focus,
  description,
  linkedinUrl,
  imageUrl,
  type
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(linkedinUrl, '_blank');
  };

  return (
    <div className="perspective-1000 h-80">
      <Card 
        className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        } hover:shadow-xl ${
          type === 'advisor' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50' : 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50'
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
            <img 
              src={imageUrl} 
              alt={name}
              className={`rounded-full object-cover mb-4 border-4 border-white shadow-lg ${
                type === 'advisor' ? 'w-36 h-36' : 'w-40 h-40'
              }`}
            />
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{country}</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{focus}</p>
          </CardContent>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <CardContent className="p-6 flex flex-col justify-between h-full text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <button
              onClick={handleLinkedInClick}
              className="mt-4 inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default FlippableCard;