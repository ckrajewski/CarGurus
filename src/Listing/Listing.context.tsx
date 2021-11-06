import { createContext, useContext, useState } from 'react';

interface CarContext {
  carData: any;
  setCarData: (carData: any) => void;
}
const context = createContext<CarContext>({} as CarContext);
const { Provider } = context;
export const listingContext = useContext(context);

const ListingProvider = () => {
  const [carData, setCarData] = useState();
  return {
    Provider,
    carData,
    setCarData,
  };
};
export default ListingProvider;
