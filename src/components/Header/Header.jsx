import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

const Header = () => {

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 2,
        room: 1
    })

    return (
        <header className="header_container col-span-10 col-start-2">
            <nav className='nav h-12 bg-white border border-md rounded-xl m-auto flex justify-between items-center px-2 mt-2'>
                <div className="serach-lication flex justify-around flex-1">
                    <MapPinIcon className='w-6 h-6 text-orange-500' />
                    <input
                        className='w-3/4 text-md h-auto p-1 px-2 rounded-md focus:outline-none focus:border focus:border-orange-300'
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
                <div className='options relative flex-1 flex justify-center' onClick={() => setOpenOptions(!openOptions)}>
                    <div>1 adult & 2 children &bull; 1 room</div>
                    {
                        openOptions && <GusetOptions options={options} setOpenOptions={setOpenOptions} />
                    }
                </div>
                <div className='w-7 h-7 bg-blue-600 rounded-lg flex justify-center items-center cursor-pointer'>
                    <MagnifyingGlassIcon className='w-5 h-5 text-white' />
                </div>
            </nav>
        </header>
    );
};

export default Header;

function GusetOptions({ options, handleOptions, setOpenOptions }) {
    const optionsRef = useRef();
    useClickOutside(optionsRef, 'guest-options', () => setOpenOptions(false))
    return (
        <div
            className='guest-options w-36 max-w-auto bg-white rounded-md absolute top-7 right-[7em] border p-1 px-2 flex flex-col gap-y-2'
            ref={optionsRef}>
            <GuestItem
                handleOptions={handleOptions}
                type='adult'
                options={options}
            />
            <GuestItem
                handleOptions={handleOptions}
                type='adult'
                options={options}
            />  <GuestItem
                handleOptions={handleOptions}
                type='adult'
                options={options}
            />
        </div>
    )
}

function GuestItem() {
    return (
        <div className='guest-item flex justify-between'>
            <span className='option text-md'>item</span>
            <div className='option-buttons flex-1 flex items-center gap-x-2 justify-end'>
                <button className='w-6 h-6'>
                    <MinusCircleIcon className='text-slate-300 hover:text-red-600 hover:transition-3 hover:duration-300' />
                </button>
                <span className='text-md'>1</span>
                <button className='w-6 h-6'>
                    <PlusCircleIcon className='text-slate-300 hover:text-green-600 hover:transition-all hover:duration-300' />
                </button>
            </div>
        </div>
    )
}


