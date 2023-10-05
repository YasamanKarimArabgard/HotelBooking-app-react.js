import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const HotelContext = createContext();

const HotelsProvider = ({ children }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('options'))?.room;

    const { loading, data: hotels } = useFetch("http://localhost:5000/hotels",
        `name_like=${destination || ""}&accommodates_gte=${room || 1}`);

    return (
        <HotelContext.Provider value={{ loading, hotels }}>
            {children}
        </HotelContext.Provider>
    );
};

export default HotelsProvider;

export const useHotels = () => {
    return useContext(HotelContext)
}