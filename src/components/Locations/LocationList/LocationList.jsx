import Location from "./Location";
import useFetch from "../../../hooks/useFetch"
import Loader from "../../Loader/Loader";

const LocationList = () => {

    const { loading, data, error } = useFetch("https://hotelbooking-api-one.vercel.app/hotels");

    // console.log(data);

    if (loading) {
        return <Loader />
    } else if (error) {
        return <p className="text-xl font-bold text-red-600">Server Side Error!</p>;
    }

    return (
        <section className='locationList w-full h-full grid md:grid-cols-3 gap-y-2 gap-x-3 mr-1'>
                <Location hotelLocations={data} />
        </section>
    )
}

export default LocationList;