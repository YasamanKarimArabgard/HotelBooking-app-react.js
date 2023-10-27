import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import SearchPage from '../SearchPage/SearchPage';

const LocationList = () => {

    const { loading, data } = useFetch('http://localhost:5000/hotels');

    return (
        <div className='locationList-container flex row-start-2 col-start-2 col-span-10 flex-row-reverse gap-x-3 bg-white rounded-xl border p-2 gap-y-3'>
            <div className='w-full md:w-3/4 overflow-hidden overflow-y-scroll'>
                {
                    loading ? <Loader /> :
                        <div className='locationList grid md:grid-cols-3 gap-y-2 gap-x-3 mr-1'>
                            {data.map(item => (
                                <div className='locationList_item flex flex-col justify-between h-60 rounded-sm'>
                                    {/* item img */}
                                    <div className='ocationList_item-img h-40 max-h-40'>
                                        <img src={item.picture_url.url} className='w-full h-full rounded-tr-xl rounded-tl-xl' alt={item.name} />
                                    </div>
                                    <div className='h-1/3 flex flex-col gap-y-1 p-1 justify-between'>
                                        <h2 className='font-bold text-sm'>{item.smart_location}</h2>
                                        <h3 className='text-xs text-slate-600'>{item.name}</h3>
                                        <div className='flex gap-x-1 items-center'>
                                            <h5 className='text-xs'>€ {item.price}</h5>
                                            <span className='text-xs text-slate-500'>night</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </div>
            <div className='searchPage hidden md:block md:w-1/4'>
                <SearchPage />
            </div>
        </div>
    );
};

export default LocationList;