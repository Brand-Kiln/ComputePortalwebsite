import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Heart, FilterIcon } from "lucide-react";
import MarketplaceFilters from "./MarketplaceFilters";
import { Card, CardContent } from "@/components/ui/card";

const ListingsSection: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<"all" | "compute" | "hardware">("all");
  const itemsPerPage = 9;

  const allListings = [
    {
      id: 1,
      title: "Decentralized Physical Devices",
      provider: "Cardano Network",
      // price: "$749",
      price: "$150 / Month",
      // originalPrice: "$2.50 / Hour",
      rating: 4.8,
      category: "GPU on Web3",
      description:
        "Run your SPO, host your code on a trustless/secure network built for Cardano",
      image: "/Images/changes.jpeg",
      discount: "70%",
      inStock: true,
      tags: ["Decentralized Compute", "AI", "Workloads", "GPU"],
      type: "GPU on Web3",
    },
    {
      id: 2,
      title: "NuNet network",
      provider: "AI Dynamics",
      price: "$179",
      originalPrice: "$799",
      rating: 4.7,
      category: "Compute Mesh",
      description:
        "SingularityDAO Ecosystem NuNet enables anyone to contribute and monetize unused compute resources",
      image: "/Images/ss5.png",
      discount: "70%",
      inStock: true,
      tags: ["Decentralized Compute", "Distributed Devices"],
      type: "Compute Mesh",
    },
    {
      id: 3,
      title: "Aethir Network",
      provider: "Aethir Edge Cloud Infrastructure",
      price: "$299",
      originalPrice: null,
      rating: 4.7,
      category: "Compute Mesh",
      description:
        "Aethir decentralizes cloud infrastructure, enabling powerful, scalable compute without centralized hyperscalers.",
      image: "/Images/ss6.png",
      discount: null,
      inStock: true,
      tags: ["Decentralized Compute", "Distributed Devices"],
      type: "Compute Mesh",
    },
    {
      id: 4,
      title: "iagon",
      provider: "Iagon Infrastructure",
      price: "$15,999",
      originalPrice: null,
      rating: 4.9,
      category: "Hardware",
      description:
        "Iagon transforms idle storage across global devices into a decentralized cloud network",
      image: "/Images/ss7.png",
      discount: null,
      inStock: false,
      tags: ["Decentralized Compute", "Distributed Devices"],
      type: "Compute Mesh",
    },
    {
      id: 5,
      title: "HyperCycle",
      provider: "HyperCycle AI",
      price: "$239",
      originalPrice: "$799",
      rating: 4.7,
      category: "Software",
      description:
        "HyperCycle is a layer-1 blockchain and protocol stack enabling AI-to-AI microtransactions at scale.",
      image: "/Images/ss8.png",
      discount: "70%",
      inStock: true,
      tags: ["Decentralized Compute", "Distributed Devices"],
      type: "Compute Mesh",
    },
    {
      id: 6,
      title: "Cornucopia Node",
      provider: "Cornucopias.io",
      price: "$350.00",
      originalPrice: null,
      rating: 4.8,
      category: "Hardware",
      description:
        "Power the Cornucopias metaverse with your own infrastructure node.",

      image: "/Images/ss9.png",
      discount: null,
      inStock: true,
      tags: ["Web3", "Gaming", "Node Infrastructure"],
      type: "Metaverse Node",
    },
    {
      id: 7,
      title: "Smart Life Healthcare AI",
      provider: "MedTech Solutions",
      price: "$299",
      originalPrice: null,
      rating: 4.9,
      category: "Software",
      description:
        "AI-powered healthcare platform for home medical diagnostics...",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059753013_e15315a0.jpg",
      discount: null,
      inStock: true,
      tags: ["Healthcare", "AI", "Diagnostics", "+1"],
      type: "compute",
    },
    {
      id: 8,
      title: "H2 HyperAI Processing Box",
      provider: "HyperCycle AI",
      price: "$1,450",
      originalPrice: null,
      rating: 4.8,
      category: "Hardware",
      description:
        "Advanced AI processing unit for edge computing applications...",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6860d25c16551e9c1ce34e45_1752059974410_f4745421.png",
      discount: null,
      inStock: true,
      tags: ["AI Processing", "Edge", "HyperCycle", "+1"],
      type: "hardware",
    },
    {
      id: 9,
      title: "Blockchain Node Hosting Service",
      provider: "NodeTech",
      price: "$89/month",
      originalPrice: null,
      rating: 4.7,
      category: "Software",
      description:
        "Reliable blockchain node hosting with 99.9% uptime guarantee...",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400",
      discount: null,
      inStock: true,
      tags: ["Blockchain", "Hosting", "Node", "+1"],
      type: "compute",
    },
  ];

  const filteredListings =
    filter === "all"
      ? allListings
      : allListings.filter((item) => item.type === filter);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentListings = filteredListings.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 md:flex-row flex-col">
          <div className="md:mb-0 mb-4 w-full flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">All Products</h2>
              <p className="text-muted-foreground">
                {filteredListings.length} products found
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(true)}
              className="md:hidden flex items-center gap-2"
            >
              <FilterIcon className="h-4 w-4" />
              Filters
            </Button>
          </div>
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex md:justify-end justify-normal gap-2 whitespace-nowrap px-2 py-2">
              <Button
                variant={filter === "compute" ? "default" : "outline"}
                onClick={() => {
                  setFilter("compute");
                  setCurrentPage(1);
                }}
                className="flex-shrink-0"
              >
                Compute
              </Button>
              <Button
                variant={filter === "hardware" ? "default" : "outline"}
                onClick={() => {
                  setFilter("hardware");
                  setCurrentPage(1);
                }}
                className="flex-shrink-0"
              >
                Hardware
              </Button>
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => {
                  setFilter("all");
                  setCurrentPage(1);
                }}
                className="flex-shrink-0"
              >
                View All
              </Button>
              <div className="flex-shrink-0">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <MarketplaceFilters
            onFilterChange={() => {}}
            mobileOpen={showFilters}
            onMobileClose={() => setShowFilters(false)}
          />

          {/* Listings Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentListings.map((item) => (
                <Card
                  key={item.id}
                  className="relative hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute top-0 left-0 z-10 rotate-90">
                    <img src="/Images/cs.png" className="w-20" />
                  </div>

                  {/* Discount Badge - Top Left */}
                  <div className="">
                    {item.discount && (
                      <div className=" absolute top-9 right-2 z-20 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{item.discount}
                      </div>
                    )}

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-2 right-2 z-20 bg-black text-white text-xs px-2 py-1 rounded">
                      {item.type}
                    </div>
                  </div>

                  <CardContent className="p-4 flex flex-col h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 rounded mb-3"
                    />

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-sm ml-1 font-medium">
                          {item.rating}
                        </span>
                      </div>

                      {/* Heart Icon - Top Right (below category) */}
                      <div className="top-10 right-2 z-20 bg-white rounded-full p-1 shadow-md">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 cursor-pointer" />
                      </div>
                    </div>

                    <h4 className="font-semibold text-lg mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.provider}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3 flex-grow">
                      <div>
                        <span className="text-lg font-bold">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          item.inStock ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    <Button className="w-full bg-black text-white hover:bg-gray-800 mt-auto">
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
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
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
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
