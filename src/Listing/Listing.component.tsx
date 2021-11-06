import React from 'react';
import Card from './Card/Card.component';
import { useListingContext } from './Listing.context';
import Pagination from '@mui/material/Pagination';
import usePagination from '../Pagination/usePagination.hook';
const Listing = () => {
  const { carData } = useListingContext();
  const records = carData?.records || [];
  const { page, setPage } = usePagination();
  return (
    <div>
      {records.map((car: any) => (
        <Card car={car} />
      ))}
      <Pagination
        page={page}
        count={10}
        onChange={(event, currentPage) => setPage(currentPage)}
      />
    </div>
  );
};
export default Listing;
