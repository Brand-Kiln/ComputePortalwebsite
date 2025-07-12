import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon, CalendarIcon, UserIcon, ClockIcon } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const BlogArticle: React.FC = () => {
  const { id } = useParams();

  // Mock article data - in real app this would come from API
  const article = {
    id: id || '1',
    title: 'Getting Started with Decentralized Computing',
    content: `
      <h2>Introduction to Decentralized Computing</h2>
      <p>Decentralized computing represents a paradigm shift in how we approach computational resources and data processing. Unlike traditional centralized systems, decentralized computing distributes processing power across multiple nodes, creating a more resilient and scalable infrastructure.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Enhanced Security:</strong> No single point of failure</li>
        <li><strong>Improved Scalability:</strong> Resources can be added dynamically</li>
        <li><strong>Cost Efficiency:</strong> Pay only for what you use</li>
        <li><strong>Global Accessibility:</strong> Access resources from anywhere</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To begin your journey with decentralized computing, you'll need to understand the fundamental concepts and choose the right platform for your needs. ComputePortal provides an excellent starting point with its user-friendly interface and comprehensive marketplace.</p>
      
      <h3>Best Practices</h3>
      <p>When working with decentralized systems, always consider security, scalability, and cost optimization. Start small, test thoroughly, and scale gradually as your understanding and requirements grow.</p>
      
      <h3>Conclusion</h3>
      <p>Decentralized computing is not just a trend—it's the future of how we'll process data and run applications. By embracing this technology today, you're positioning yourself at the forefront of the next computing revolution.</p>
    `,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'Tutorial',
    readTime: '5 min read'
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/knowledge-center">
            <Button variant="ghost" className="mb-6">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Knowledge Center
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center space-x-1">
                <UserIcon className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ClockIcon className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
            <p className="text-muted-foreground mb-4">Explore our marketplace and find the perfect computing resources for your project.</p>
            <Link to="/marketplace">
              <Button>Explore Marketplace</Button>
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogArticle;