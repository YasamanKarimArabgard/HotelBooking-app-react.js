import { Link } from "react-router-dom";
import { useHotels } from "../Context/HotelsProvider";

const Hotels = () => {

    const { loading, hotels } = useHotels();

    if (loading) return <p>loading...</p>

    return (
        <div className="hotels_container flex flex-col gap-y-2">
            <h2 className="font-bold text-md">Search Result ({hotels.length})</h2>
            {
                hotels.map(item => (
                    <Link key={item.id} to={`hotels/${item.id}?lat=${item.latitude}?lan=${item.longitude}`}>
                        <div className="flex gap-x-3 h-fit">
                            <div className="w-24">
                                <img src={item.picture_url.url} className="w-full h-20 rounded-xl" />
                            </div>
                            <div className="flex flex-col gap-y-1">
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