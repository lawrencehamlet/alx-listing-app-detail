import React from 'react';
import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = typeof id === 'string' ? PROPERTYLISTINGSAMPLE.find((item) => item.name === id) : undefined;

  if (!property) return <p className="container mx-auto p-6">Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
