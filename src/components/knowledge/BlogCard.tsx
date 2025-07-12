import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime
}) => {
  return (
    <Link to={`/knowledge-center/article/${id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <UserIcon className="h-3 w-3" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <CalendarIcon className="h-3 w-3" />
                <span>{date}</span>
              </div>
            </div>
            <span>{readTime}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;