import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

const Header = () => {

    const [destination, setDestination] = useState('');
    const [openOptions, setOpenOptions] = useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 2,
        room: 1
    })
    // console.log(options);
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }])

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearach = () => {
        const encodedParams = createSearchParams({
            date: JSON.stringify(date),
            destination,
            options: JSON.stringify(options)
        })
        setSearchParams(encodedParams);
        navigate({
            pathname: '/hotels',
            search: encodedParams.toString(),
        })
    }

    return (
        <header className="header_container col-span-10 col-start-2 row-start-1">
            <nav className='nav h-12 bg-white border border-md rounded-xl m-auto flex justify-between items-center px-2 mt-2'>
                {/* search bar */}
                <div className="serach-lication flex justify-around flex-1">
                    <MapPinIcon className='w-6 h-6 text-orange-500' />
                    <input
                        value={destination}
                        className='w-3/4 text-md h-auto p-1 px-2 rounded-md focus:outline-none focus:border focus:border-orange-300'
                        placeholder='Where to go ?'
                        id='destination'
                        name='destination'
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <span className='seperator text-slate-300 text-md'>|</span>
                {/* date  bar */}
                <div className='flex justify-center gap-x-3 flex-1' onClick={() => setOpenDate(!openDate)}>
                    <CalendarDaysIcon className='w-6 h-6 text-blue-600' />
                    <div className='clalender-date text-md'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</div>
                    {
                        openDate &&
                        <DateRange
                            ranges={date}
                            className='date absolute top-11 border rounded-lg'
                            onChange={(item) => setDate([item.selection])}
                            minDate={new Date()}
                            moveRangeOnFirstSelection={true}
                        />
                    }
                </div>
                <span className='seperator text-slate-300 text-md'>|</span>
                {/* quest options */}
                <div className='options relative flex-1 flex justify-center' onClick={() => setOpenOptions(!openOptions)}>
                    <div>{options.adult} adult & {options.children} children &bull; {options.room} room</div>
                    {
                        openOptions && <GusetOptions options={options} setOpenOptions={setOpenOptions} />
                    }
                </div>
                <div className='w-7 h-7 bg-blue-600 rounded-lg flex justify-center items-center cursor-pointer'>
                    <MagnifyingGlassIcon className='w-5 h-5 text-white' onClick={() => handleSearach()} />
                </div>
            </nav>
        </header>
    );
};

export default Header;

function GusetOptions({ options, handleOptions, setOpenOptions }) {

    const optionsRef = useRef();
    useClickOutside(optionsRef, 'guest-options', () => setOpenOptions(false));

    return (
        <div
            className='guest-options w-1/2 max-w-auto bg-white rounded-md absolute top-6 right-[5em] border p-1 px-2 flex flex-col gap-y-2'
            ref={optionsRef}>
            {
                Object.entries(options).map(([key, value]) => (
                    <GuestItem
                        handleOptions={handleOptions}
                        type='adult'
                        optionKey={key}
                        optionValue={value}
                    />
                ))
            }
        </div>
    )
}

function GuestItem({ optionKey, optionValue }) {
    return (
        <div className='guest-item flex justify-between'>
            <span className='option text-md'>{optionKey}</span>
            <div className='option-buttons flex-1 flex items-center gap-x-2 justify-end'>
                <button className='w-6 h-6'>
                    <MinusCircleIcon className='text-slate-300 hover:text-red-600 hover:transition-3 hover:duration-300' />
                </button>
                <span className='text-md'>{optionValue}</span>
                <button className='w-6 h-6'>
                    <PlusCircleIcon className='text-slate-300 hover:text-green-600 hover:transition-all hover:duration-300' />
                </button>
            </div>
        </div>
    )
}


