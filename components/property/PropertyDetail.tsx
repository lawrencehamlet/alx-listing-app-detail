import React, { useState } from 'react';
import { PropertyProps } from '@/interfaces';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';
import Image from 'next/image';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md ${active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
  >
    {children}
  </button>
);

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'offer' | 'reviews' | 'host'>('offer');

  const images = property.images && property.images.length > 0 ? property.images : [property.image];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold">{property.name}</h1>
          <div className="flex items-center space-x-3 mt-2 text-sm text-gray-600">
            <span className="text-yellow-400">★ {property.rating}</span>
            <span>{property.address.city}, {property.address.country}</span>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="md:col-span-2 h-80 relative rounded overflow-hidden">
              <Image src={images[0]} alt={property.name} fill className="object-cover" onError={(e)=>{(e.target as HTMLImageElement).src='/assets/placeholder.jpg'}} />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="h-40 relative rounded overflow-hidden">
                <Image src={images[1] || images[0]} alt="img2" fill className="object-cover" onError={(e)=>{(e.target as HTMLImageElement).src='/assets/placeholder.jpg'}} />
              </div>
              <div className="h-40 relative rounded overflow-hidden">
                <Image src={images[2] || images[0]} alt="img3" fill className="object-cover" onError={(e)=>{(e.target as HTMLImageElement).src='/assets/placeholder.jpg'}} />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <div className="flex gap-3">
              <TabButton active={activeTab === 'offer'} onClick={() => setActiveTab('offer')}>What we offer</TabButton>
              <TabButton active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>Reviews</TabButton>
              <TabButton active={activeTab === 'host'} onClick={() => setActiveTab('host')}>About host</TabButton>
            </div>

            <div className="mt-4 bg-white p-4 rounded-md shadow-sm">
              {activeTab === 'offer' && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{property.description || 'No detailed description available.'}</p>

                  <h4 className="text-md font-semibold mt-4">Amenities</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {property.category.map((amenity, i) => (
                      <li key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && <ReviewSection reviews={property.reviews} />}

              {activeTab === 'host' && (
                <div>
                  <h3 className="text-lg font-semibold">Host</h3>
                  <p className="text-gray-700 mt-2">Hosted by a verified host. Contact and profile details are not implemented in this demo.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Booking column */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingSection price={property.price} />

            <div className="mt-4 bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Details</h4>
              <div className="mt-2 text-sm text-gray-600">
                <div>Beds: {property.offers.bed}</div>
                <div>Showers: {property.offers.shower}</div>
                <div>Guests: {property.offers.occupants}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
