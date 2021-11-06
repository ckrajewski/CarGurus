import React from 'react';
import Card from './Card/Card.component';
import { listingContext } from './Listing.context';

const Listing = () => {
  const { carData } = listingContext;
  const records = carData?.records || [];
  return (
    <div>
      {records.map((car: any) => (
        <Card car={car} />
      ))}
    </div>
  );
};
export default Listing;
