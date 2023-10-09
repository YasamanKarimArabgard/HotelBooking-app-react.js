import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const HotelContext = createContext();

const HotelsProvider = ({ children }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [currHotel, setCurrHotel] = useState({});
    const [loadingCurrHotel, setLoadingCurrHotel] = useState(false);
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('options'))?.room;

    const Base_Url = 'http://localhost:5000/hotels';

    const { loading, data: hotels } = useFetch(`${Base_Url}`,
        `name_like=${destination || ""}&accommodates_gte=${room || 1}`);


    async function getSingleHotel(id) {
        setLoadingCurrHotel(true);
        try {
            const { data } = await axios.get(`${Base_Url}/${id}`)
            console.log(data);
            setCurrHotel(data)
            setLoadingCurrHotel(false)
        }
        catch (error) {
            console.log(error);
            setLoadingCurrHotel(false)
        }
    }

    return (
        <HotelContext.Provider value={{ loading, hotels, getSingleHotel, loadingCurrHotel, currHotel }}>
            {children}
        </HotelContext.Provider>
    );
};

export default HotelsProvider;

export const useHotels = () => {
    return useContext(HotelContext)
}