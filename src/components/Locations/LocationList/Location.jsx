const Location = ({ hotelLocations }) => {
    return (
        hotelLocations.map(item => (
            <div className='locationList_item flex flex-col justify-between h-60 rounded-sm'>
                {/* item img */}
                <div className='ocationList_item-img h-40 max-h-40'>
                    <img src={item.picture_url.url} className='w-full h-full rounded-tr-xl rounded-tl-xl' alt={item.name} />
                </div>
                {/* item description */}
                <div className='h-1/3 flex flex-col gap-y-1 p-1 justify-between'>
                    <h2 className='location-smartName font-bold text-sm'>{item.smart_location}</h2>
                    <h3 className='location-name text-xs text-slate-600'>{item.name}</h3>
                    <div className='flex gap-x-1 items-center'>
                        <h5 className='location-price text-xs'>€ {item.price}</h5>
                        <span className='location-night text-xs text-slate-500'>night</span>
                    </div>
                </div>
            </div>
        ))
    );
};

export default Location;