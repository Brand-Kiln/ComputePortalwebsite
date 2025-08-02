import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterIcon, X } from "lucide-react";

interface MarketplaceFiltersProps {
  onFilterChange: (filters: any) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = ({
  onFilterChange,
  mobileOpen,
  onMobileClose,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedChains, setSelectedChains] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const hardwareCategories = [
    {
      id: "edge-smart-devices",
      label: "Edge & Smart Devices",
      subcategories: ["IoT Gateways", "Smart Sensors", "Edge Computers"],
    },
    {
      id: "accelerator-units",
      label: "Accelerator Units",
      subcategories: ["GPU Cards", "FPGA Boards", "ASIC Miners"],
    },
    {
      id: "storage-data-nodes",
      label: "Storage & Data Nodes",
      subcategories: ["NAS Systems", "SSD Arrays", "Distributed Storage"],
    },
    {
      id: "custom-systems",
      label: "Custom Systems",
      subcategories: ["Custom Rigs", "Modular PCs", "Specialized Hardware"],
    },
  ];

  const softwareCategories = [
    {
      id: "ai-models-apis",
      label: "AI Models & APIs",
      subcategories: ["GPT Models", "Image Recognition", "NLP Services"],
    },
    {
      id: "data-processing",
      label: "Data Processing",
      subcategories: ["Big Data", "Analytics", "ETL Pipelines"],
    },
    {
      id: "oracles-automation",
      label: "Oracles & Automation",
      subcategories: ["Price Feeds", "Smart Contracts", "Triggers"],
    },
    {
      id: "blockchain-services",
      label: "Blockchain Services",
      subcategories: ["Node Hosting", "dApp Backend", "Deployment"],
    },
  ];

  const blockchainFilters = [
    { id: "all-chains", label: "All Chains" },
    { id: "hypercycle", label: "HyperCycle" },
    { id: "cardano", label: "Cardano (ADA)" },
    { id: "polygon", label: "Polygon (MATIC)" },
    { id: "ethereum", label: "Ethereum (ETH)" },
    { id: "solana", label: "Solana (SOL)" },
    { id: "bitcoin", label: "Bitcoin (BTC)" },
  ];

  const priceRanges = [
    { id: "under-500", label: "Under $500" },
    { id: "500-1000", label: "$500 - $1,000" },
    { id: "1000-5000", label: "$1,000 - $5,000" },
    { id: "5000-10000", label: "$5,000 - $10,000" },
    { id: "over-10000", label: "Over $10,000" },
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const updated = checked
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter((id) => id !== categoryId);
    setSelectedCategories(updated);
    onFilterChange({
      categories: updated,
      chains: selectedChains,
      prices: selectedPrices,
    });
  };

  const handleChainChange = (chainId: string, checked: boolean) => {
    const updated = checked
      ? [...selectedChains, chainId]
      : selectedChains.filter((id) => id !== chainId);
    setSelectedChains(updated);
    onFilterChange({
      categories: selectedCategories,
      chains: updated,
      prices: selectedPrices,
    });
  };

  const CategorySection = ({
    title,
    categories,
  }: {
    title: string;
    categories: any[];
  }) => (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category.id, checked as boolean)
                }
              />
              <label
                htmlFor={category.id}
                className="text-sm font-medium cursor-pointer"
              >
                {category.label}
              </label>
            </div>
            {category.subcategories && (
              <div className="ml-6 space-y-1">
                {category.subcategories.map((sub: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Checkbox id={`${category.id}-${idx}`} />
                    <label
                      htmlFor={`${category.id}-${idx}`}
                      className="text-xs text-muted-foreground cursor-pointer"
                    >
                      {sub}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onMobileClose}
        />
      )}

      <Card
        className={`
          w-1/2 h-screen md:static md:w-[20%] md:h-auto md:block
          fixed top-0 left-0 z-50 overflow-y-auto
          transition-transform duration-200 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2">
            <FilterIcon className="h-5 w-5" />
            Filters
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 md:hidden"
            onClick={onMobileClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <CategorySection title="Hardware" categories={hardwareCategories} />
          <CategorySection title="Software" categories={softwareCategories} />

          {/* Blockchain */}
          <div>
            <h3 className="font-semibold mb-3">Blockchain</h3>
            <div className="space-y-2">
              {blockchainFilters.map((filter) => (
                <div key={filter.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={filter.id}
                    checked={selectedChains.includes(filter.id)}
                    onCheckedChange={(checked) =>
                      handleChainChange(filter.id, checked as boolean)
                    }
                  />
                  <label htmlFor={filter.id} className="text-sm cursor-pointer">
                    {filter.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.id} className="flex items-center space-x-2">
                  <Checkbox id={range.id} />
                  <label htmlFor={range.id} className="text-sm cursor-pointer">
                    {range.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-semibold mb-3">Availability</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" />
              <label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock Only
              </label>
            </div>
          </div>

          {/* Seller Status */}
          <div>
            <h3 className="font-semibold mb-3">Seller Status</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" />
              <label htmlFor="verified" className="text-sm cursor-pointer">
                Verified Sellers Only
              </label>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default MarketplaceFilters;
