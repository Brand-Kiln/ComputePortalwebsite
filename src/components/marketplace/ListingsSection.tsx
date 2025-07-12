import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import ListingCard from './ListingCard';
import MarketplaceFilters from './MarketplaceFilters';

const ListingsSection: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'all' | 'compute' | 'hardware'>('all');
  const itemsPerPage = 9; // 3 rows x 3 columns

  const allListings = [
    {
      id: 1,
      title: 'NVIDIA RTX 4090 AI Training Kit',
      provider: 'TechFlow Labs',
      price: '$749',
      originalPrice: '$2,449',
      rating: 4.9,
      category: 'Hardware',
      description: 'Professional-grade GPU optimized for AI training and inference...',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
      discount: '70%',
      inStock: true,
      tags: ['AI Training', 'Deep Learning', 'CUDA', '+1'],
      type: 'hardware'
    },
    {
      id: 2,
      title: 'AutoGPT Business Suite',
      provider: 'AI Dynamics',
      price: '$179',
      originalPrice: '$799',
      rating: 4.7,
      category: 'Software',
      description: 'Complete autonomous AI agent software for business automation...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
      discount: '70%',
      inStock: true,
      tags: ['Automation', 'Business', 'API', '+1'],
      type: 'compute'
    },
    {
      id: 3,
      title: 'Custom Vision Training Platform',
      provider: 'VisionAI Corp',
      price: '$299',
      originalPrice: null,
      rating: 4.8,
      category: 'Software',
      description: 'No-code computer vision model training platform with drag-and...',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400',
      discount: null,
      inStock: true,
      tags: ['Computer Vision', 'No-Code', 'Training', '+1'],
      type: 'compute'
    },
    {
      id: 4,
      title: 'Quantum-AI Hybrid Processing Unit',
      provider: 'Quantum Dynamics',
      price: '$15,999',
      originalPrice: null,
      rating: 4.9,
      category: 'Hardware',
      description: 'Revolutionary quantum-classical hybrid processor designed for next...',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
      discount: null,
      inStock: false,
      tags: ['Quantum Computing', 'Hybrid', 'Research', '+1'],
      type: 'hardware'
    },
    {
      id: 5,
      title: 'Edge AI Optimization Toolkit',
      provider: 'EdgeTech Solutions',
      price: '$239',
      originalPrice: '$799',
      rating: 4.6,
      category: 'Software',
      description: 'Complete software suite for optimizing AI models for edge...',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
      discount: '70%',
      inStock: true,
      tags: ['Edge AI', 'Mobile', 'Optimization', '+1'],
      type: 'compute'
    },
    {
      id: 6,
      title: 'ASIC Miner Pro Max',
      provider: 'CryptoMining Systems',
      price: '$3,299',
      originalPrice: null,
      rating: 4.5,
      category: 'Hardware',
      description: 'High-efficiency ASIC miner optimized for cryptocurrency mining...',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400',
      discount: null,
      inStock: true,
      tags: ['Mining', 'Cryptocurrency', 'High Efficiency', '+1'],
      type: 'hardware'
    },
    {
      id: 7,
      title: 'Smart Life Healthcare AI',
      provider: 'MedTech Solutions',
      price: '$299',
      rating: 4.9,
      category: 'Software',
      description: 'AI-powered healthcare platform for home medical diagnostics...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059753013_e15315a0.jpg',
      inStock: true,
      tags: ['Healthcare', 'AI', 'Diagnostics', '+1'],
      type: 'compute'
    },
    {
      id: 8,
      title: 'H2 HyperAI Processing Box',
      provider: 'HyperCycle AI',
      price: '$1,450',
      rating: 4.8,
      category: 'Hardware',
      description: 'Advanced AI processing unit for edge computing applications...',
      image: 'https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059974410_f4745421.png',
      inStock: true,
      tags: ['AI Processing', 'Edge', 'HyperCycle', '+1'],
      type: 'hardware'
    },
    {
      id: 9,
      title: 'Blockchain Node Hosting Service',
      provider: 'NodeTech',
      price: '$89/month',
      rating: 4.7,
      category: 'Software',
      description: 'Reliable blockchain node hosting with 99.9% uptime guarantee...',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
      inStock: true,
      tags: ['Blockchain', 'Hosting', 'Node', '+1'],
      type: 'compute'
    }
  ];

  const filteredListings = filter === 'all' ? allListings : allListings.filter(item => item.type === filter);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentListings = filteredListings.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">All Products</h2>
            <p className="text-muted-foreground">{filteredListings.length} products found</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button 
                variant={filter === 'compute' ? 'default' : 'outline'}
                onClick={() => {setFilter('compute'); setCurrentPage(1);}}
              >
                Compute
              </Button>
              <Button 
                variant={filter === 'hardware' ? 'default' : 'outline'}
                onClick={() => {setFilter('hardware'); setCurrentPage(1);}}
              >
                Hardware
              </Button>
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => {setFilter('all'); setCurrentPage(1);}}
              >
                View All
              </Button>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              Filters
            </Button>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <MarketplaceFilters onFilterChange={() => {}} />
          </div>

          {/* Listings Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentListings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;