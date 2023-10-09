import { useParams } from "react-router-dom";
import { useHotels } from "../Context/HotelsProvider";
import { useEffect } from "react";

const SingleHotel = () => {

    const { id } = useParams();
    const { getSingleHotel, loadingCurrHotel, currHotel } = useHotels();

    if (loadingCurrHotel) return <p>loading...</p>;

    useEffect(() => { 
        getSingleHotel(id); 
    }, [id])

    return (
        <div className="room m-2">
            <div className='roomDetail flex flex-col gap-y-2'>
                <h2 className="font-bold text-lg">{currHotel.name}</h2>
                <div className="text-slate-500 text-sm">{currHotel.number_of_reviews} review &bull; {currHotel.smart_location}</div>
                <img className="rounded-lg w-full" src={currHotel.xl_picture_url} alt={currHotel.name} />
            </div>
        </div>
    )
}

export default SingleHotel;