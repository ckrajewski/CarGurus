import { useEffect, useState } from 'react';
import { useListingContext } from '../Listing/Listing.context';

const usePagination = (pageNumber?: number) => {
  const [page, setPage] = useState(pageNumber || 1);
  const { setPage: setListingPage } = useListingContext();
  useEffect(() => {
    if (pageNumber) {
      setPage(pageNumber);
    }
  }, [pageNumber]);
  useEffect(() => {
    if (page) {
      setListingPage(page);
    }
  }, [page]);
  const nextPage = page + 1;
  const previousPage = page > 1 ? page - 1 : 1;
  return {
    page,
    nextPage,
    setPage,
    previousPage,
  };
};
export default usePagination;
