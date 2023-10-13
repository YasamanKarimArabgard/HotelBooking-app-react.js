import { Link } from "react-router-dom";
import { useHotels } from "../Context/HotelsProvider";
import Loader from "../Loader/Loader";

const Hotels = () => {

    const { loading, hotels, currHotel } = useHotels();

    if (loading) return <Loader />

    return (
        <div className="hotels_container flex flex-col gap-y-2 m-1">
            <h2 className="font-bold text-md">Search Result ({hotels.length})</h2>
            {
                hotels.map(item => (
                    <Link key={item.id} to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
                        <div className={`flex gap-x-3 h-fit rounded-xl p-1 hover:bg-orange-50 ${item.id === currHotel?.id ? 'bg-orange-200' : ''}`}>
                            <div className="w-24">
                                <img src={item.picture_url.url} className="w-full h-20 rounded-xl" />
                            </div>
                            <div className="flex flex-col gap-y-1 m-1">
                                <h2 className='font-bold text-sm'>{item.smart_location}</h2>
                                <h4 className="text-xs text-slate-400">{item.name}</h4>
                                <div className='flex gap-x-1 items-center'>
                                    <h5 className='text-xs'>€ {item.price}</h5>
                                    <span className='text-xs text-slate-500'>night</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>

    )
}

export default Hotels;