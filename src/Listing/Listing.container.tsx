import React, { useEffect } from 'react';
import Listing from './Listing.component';
import { listingContext } from './Listing.context';

const HARCODED_URL =
  'https://www.autolist.com/search?page=1&latitude=30.3414&location=Austin%2C+TX&longitude=-97.7312&make=Jeep&ads=web&price_min=5000&price_max=9000';
const ListingContainer = () => {
  const { setCarData } = listingContext;
  useEffect(() => {
    fetch(HARCODED_URL).then((data) =>
      data.json().then((jsonData) => setCarData(jsonData)),
    );
  }, []);

  return <Listing />;
};
export default ListingContainer;
