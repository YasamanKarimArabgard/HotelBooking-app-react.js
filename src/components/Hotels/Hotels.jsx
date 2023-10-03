import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Hotels = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('room'));

    const { loading, data } = useFetch("http://localhost:5000/hotels",
        `name_like=${destination || ""}&accommodates_gte=${room || ""}`);

    if (loading) return <p>loading...</p>

    console.log(data);
    return (
        <div className="hotels_container flex flex-col gap-y-2">
            <h2 className="font-bold text-md">Search Result ({data.length})</h2>
            {
                data.map(item => (
                    <div key={item.id} className="flex gap-x-3 h-fit">
                        <div className="w-24">
                            <img src={item.picture_url.url} className="w-full h-20 rounded-xl"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h2 className='font-bold text-sm'>{item.smart_location}</h2>
                            <h4 className="text-xs text-slate-400">{item.name}</h4>
                            <div className='flex gap-x-1 items-center'> 
                                       <h5 className='text-xs'>€ {item.price}</h5>
                                       <span className='text-xs text-slate-500'>night</span>
                                    </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Hotels;