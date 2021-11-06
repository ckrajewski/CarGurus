import React from 'react';
import ListingContainer from './Listing.container';
import ListingProvider from './Listing.context';

const CarListing = () => {
  const { Provider, ...store } = ListingProvider();
  return (
    <Provider value={store}>
      <ListingContainer />
    </Provider>
  );
};
export default CarListing;
