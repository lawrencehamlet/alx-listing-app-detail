import React, { useState } from 'react';
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Top Villa',
    'Self Checkin',
    'Pet Friendly',
    'Luxury Villa',
    'Mountain View',
    'Beachfront',
    'City Center'
  ];

  const filteredProperties = activeFilter === 'All' 
    ? PROPERTYLISTINGSAMPLE 
    : PROPERTYLISTINGSAMPLE.filter(property => 
        property.category.includes(activeFilter)
      );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/placeholder.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {filterOptions.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Property Card Component
interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/assets/placeholder.jpg';
          }}
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{property.discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {property.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
            >
              {cat}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-600">
            <span>{property.offers.bed} beds • {property.offers.shower} baths</span>
          </div>
          <div className="text-sm text-gray-600">
            {property.offers.occupants} guests
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              ${property.price}
            </span>
            <span className="text-gray-600 text-sm ml-1">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
};
