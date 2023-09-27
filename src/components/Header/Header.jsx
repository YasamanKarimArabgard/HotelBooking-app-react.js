import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <header className="header_container col-span-10 col-start-2">
            <nav className='nav h-12 bg-white border border-md rounded-xl m-auto flex justify-between items-center px-2 mt-2'>
                <div className="serach-lication flex justify-around flex-1">
                    <MapPinIcon className='w-6 h-6 text-orange-500' />
                    <input
                        className='w-auto text-md'
                        placeholder='search loaction'
                        id='destination'
                        name='destination'
                    />
                </div>
                <span className='seperator text-slate-300 text-md'>|</span>
                <div className='flex justify-around flex-1'>
                    <CalendarDaysIcon className='w-6 h-6 text-blue-600' />
                    <div className='clalender-date text-md'>1999/09/28</div>
                </div>
                <span className='seperator text-slate-300 text-md'>|</span>
                <div className='options flex-1 flex justify-center'>
                    <div className='text-md'> 1 adult &bull; 2 children</div>
                </div>
                <div className='w-7 h-7 bg-blue-600 rounded-lg flex justify-center items-center cursor-pointer'>
                    <MagnifyingGlassIcon className='w-5 h-5 text-white' />
                </div>
            </nav>
        </header>
    );
};

export default Header;