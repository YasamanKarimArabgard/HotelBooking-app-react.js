import SearchPage from '../Search/SearchBox';
import LocationList from './LocationList/LocationList';

const Locations = () => {
    return (
        <div className='locationList-container flex row-start-2 col-start-2 col-span-10 flex-row-reverse gap-x-3 bg-white rounded-xl border p-2 gap-y-3'>
            <div className='locationList w-full md:w-3/4 overflow-hidden overflow-y-scroll flex justify-center items-center'>
                <LocationList />
            </div>
            <div className='searchPage hidden md:block md:w-1/4'>
                <SearchPage />
            </div>
        </div>
    );
};

export default Locations;