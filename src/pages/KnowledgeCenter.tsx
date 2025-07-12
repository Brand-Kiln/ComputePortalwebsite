import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import BlogCard from '@/components/knowledge/BlogCard';
import AppLayout from '@/components/AppLayout';

const KnowledgeCenter: React.FC = () => {
  // Mock blog data
  const blogPosts = [
    {
      id: '1',
      title: 'Getting Started with Decentralized Computing',
      excerpt: 'Learn the basics of decentralized computing and how it can revolutionize your tech projects.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      author: 'Sarah Chen',
      date: '2024-01-15',
      category: 'Tutorial',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Blockchain Security Best Practices',
      excerpt: 'Essential security measures every blockchain developer should implement in their projects.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      author: 'Mike Rodriguez',
      date: '2024-01-12',
      category: 'Security',
      readTime: '8 min read'
    },
    {
      id: '3',
      title: 'Hardware Selection Guide for AI Projects',
      excerpt: 'Choose the right hardware for your AI and machine learning projects with our comprehensive guide.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      author: 'Alex Johnson',
      date: '2024-01-10',
      category: 'Hardware',
      readTime: '12 min read'
    },
    {
      id: '4',
      title: 'Smart Contract Development Tips',
      excerpt: 'Advanced tips and tricks for developing efficient and secure smart contracts.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      author: 'Emma Davis',
      date: '2024-01-08',
      category: 'Development',
      readTime: '10 min read'
    },
    {
      id: '5',
      title: 'The Future of Decentralized Marketplaces',
      excerpt: 'Exploring trends and predictions for the future of decentralized commerce and technology.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'Industry',
      readTime: '7 min read'
    },
    {
      id: '6',
      title: 'Optimizing Performance in Distributed Systems',
      excerpt: 'Learn how to optimize performance and scalability in distributed computing environments.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      author: 'Lisa Wang',
      date: '2024-01-03',
      category: 'Performance',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Tutorial', 'Security', 'Hardware', 'Development', 'Industry', 'Performance'];

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Knowledge Center
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, tutorials, and best practices in decentralized computing
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input 
                placeholder="Search articles..." 
                className="pr-12"
              />
              <Button size="icon" className="absolute right-1 top-1">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === 'All' ? 'default' : 'secondary'}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default KnowledgeCenter;