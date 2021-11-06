import { createContext, useContext, useState } from 'react';

interface CarContext {
  carData: any;
  setCarData: (carData: any) => void;
  page: number;
  setPage: (currentPage: number) => void;
}
const context = createContext<CarContext>({} as CarContext);
const { Provider } = context;
export const useListingContext = () => useContext(context);

const ListingProvider = () => {
  const [carData, setCarData] = useState();
  const [page, setPage] = useState(1);
  return {
    Provider,
    carData,
    setCarData,
    page,
    setPage,
  };
};
export default ListingProvider;
