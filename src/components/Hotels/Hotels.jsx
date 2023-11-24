import { Link } from "react-router-dom";
import { useHotels } from "../Context/HotelsProvider";
import Loader from "../Loader/Loader";
import BackButton from '../../common/BackButton'

const Hotels = () => {

    const { loading, hotels, currHotel } = useHotels();
    if (loading) return <Loader />

    return (
        <div className="hotels flex flex-col gap-y-3 mt-3 px-1">
            <div >
                <BackButton />
                <h2 className="hotel-result font-bold text-lg">Search Result ({hotels.length})</h2>
            </div>
            <div className="flex flex-col gap-y-2">
                {
                    hotels.map(item => (
                        <Link key={item.id} to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
                            <div className={`flex gap-x-3 h-fit rounded-xl items-center bg-gray-100 hover:bg-orange-50 ${item.id === currHotel?.id ? 'bg-orange-200' : ''}`}>
                                <div className="w-24 md:w-28">
                                    <img src={item.picture_url.url} className="w-full h-20 md:h-28 rounded-tl-xl rounded-bl-xl" />
                                </div>
                                <div className="flex-1 flex flex-col gap-y-1 m-1">
                                    <h2 className='font-bold text-xs md:text-sm'>{item.smart_location}</h2>
                                    <h4 className="text-xs md:text-xs text-slate-400">{item.name}</h4>
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
        </div>

    )
}

export default Hotels;