import axios from 'axios';
import React, { useEffect } from 'react';
import Listing from './Listing.component';
import { useListingContext } from './Listing.context';

// const HARCODED_URL =
// eslint-disable-next-line max-len
//   'https://www.autolist.com/search?page=1&latitude=30.3414&location=Austin%2C+TX&longitude=-97.7312&make=Jeep&ads=web&price_min=5000&price_max=9000';
const ListingContainer = () => {
  const { setCarData, page } = useListingContext();
  useEffect(() => {
    axios
      .get('https://www.autolist.com/search', {
        params: {
          page,
          latitude: 30.3414,
          location: 'Austin,TX',
          longitude: -97.7312,
          make: 'Jeep',
          ads: 'web',
          price_min: 5000,
          price_max: 9000,
        },
      })
      .then((response) => setCarData(response.data));
  }, [page]);

  return <Listing />;
};
export default ListingContainer;
