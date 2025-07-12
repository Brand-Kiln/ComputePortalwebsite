import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarIcon, HeartIcon } from 'lucide-react';

interface ListingCardProps {
  id: number;
  title: string;
  provider: string;
  price: string;
  originalPrice?: string;
  rating: number;
  category: string;
  description: string;
  image: string;
  discount?: string;
  inStock: boolean;
  tags: string[];
}

const ListingCard: React.FC<ListingCardProps> = ({
  title,
  provider,
  price,
  originalPrice,
  rating,
  category,
  description,
  image,
  discount,
  inStock,
  tags
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow relative overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            -{discount}
          </Badge>
        )}
        <Badge className="absolute top-2 right-2 bg-black/70 text-white">
          {category}
        </Badge>
        <button className="absolute top-2 right-10 p-1 bg-black/20 rounded-full hover:bg-black/40">
          <HeartIcon className="h-4 w-4 text-white" />
        </button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg truncate">{title}</h3>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm ml-1">{rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-2">{provider}</p>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${inStock ? 'text-green-600' : 'text-red-600'}`}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            <Button size="sm" disabled={!inStock}>
              {inStock ? 'Buy Now' : 'Notify Me'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;