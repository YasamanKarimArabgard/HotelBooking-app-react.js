import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon, MinusCircleIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import { useRef, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(searchParams.get('destination') || "");
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }])

    const handleSearach = () => {
        console.log(destination);
        const encodedParams = createSearchParams({
            date: JSON.stringify(date),
            destination: destination,
            options: JSON.stringify(options)
        })
        setSearchParams(encodedParams);
        navigate({
            pathname: '/hotels',
            search: encodedParams.toString(),
        })
    }

    const handleOptions = (e,name, operation) => {
        e.preventDefault();
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
          };
        });
      };

    return (
        <div className='search-modal hidden md:block ease-in h-fit bg-white rounded-xl border p-1'>
            <h2 className='font-bold lg:text-lg p-2'>Search Box</h2>
            <form className='w-full flex flex-col gap-y-5 p-1' onSubmit={handleSearach}>
                <div className="serach-lication flex justify-between gap-x-2">
                    <MapPinIcon className='w-6 h-6 text-orange-500' />
                    <input
                        value={destination}
                        className='w-50 text-md h-auto p-1 rounded-md border border-orange-300 focus:outline-none focus:border-2 focus:border-orange-400'
                        placeholder='Where to go ?'
                        id='destination'
                        name='destination'
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                {/* date  bar */}
                <div className='flex flex-col items-center'>
                    <div className='w-50 flex gap-x-6 items-center justify-between'>
                        <CalendarDaysIcon className='w-6 h-6 text-blue-600' />
                        <div
                            onClick={() => setOpenDate(!openDate)}
                            className='clalender-date text-md border border-blue-500 cursor-pointer p-1 rounded-md '>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</div>
                    </div>
                    {
                        openDate &&
                        <DateRange
                            ranges={date}
                            className='date border rounded-lg z-[1000]  relative left-10'
                            onChange={(item) => setDate([item.selection])}
                            minDate={new Date()}
                            moveRangeOnFirstSelection={true}
                        />
                    }
                </div>
                {/* quest options */}
                <div className='options flex flex-col items-center gap-y-2'>
                    <div className='flex items-center gap-x-2'>
                        <UserGroupIcon className='w-6 h-6 text-blue-400' />
                        <div>{options.adult} adult & {options.children} children &bull; {options.room} room</div>
                    </div>
                    <GusetOptions
                        handleOptions={handleOptions}
                        options={options} />
                </div>
                <button className='w-full h-7 bg-blue-600 rounded-md flex justify-center items-center cursor-pointer'>
                    <MagnifyingGlassIcon className='w-5 h-5 text-white' onClick={() => handleSearach()} />
                </button>
            </form>
        </div>
    );
};

export default SearchPage;

function GusetOptions({ options, handleOptions }) {
    return (
        <div

            className='guest-options w-full max-w-auto bg-white p-1 px-2 flex flex-col gap-y-2 border rounded-md'>
            <GuestItem
                handleOptions={handleOptions}
                type='adult'
                options={options}
                minLimit={1}
            />
            <GuestItem
                handleOptions={handleOptions}
                type='children'
                options={options}
                minLimit={0}
            /><GuestItem
                handleOptions={handleOptions}
                type='room'
                options={options}
                minLimit={1}
            />
        </div>
    )
}

function GuestItem({ type, handleOptions, options, minLimit }) {
    return (
        <div className='guest-item flex justify-between'>
            <span className='option text-md'>{type}</span>
            <div className='option-buttons flex-1 flex items-center gap-x-2 justify-end'>
                <button
                    className='w-6 h-6'
                    onClick={(e) => handleOptions(e, type, "dec")}
                    disabled={options[type] <= minLimit}
                >
                    <MinusCircleIcon className='text-slate-300 hover:text-red-600 hover:transition-3 hover:duration-300' />
                </button>
                <span className='text-md'>{options[type]}</span>
                <button className='w-6 h-6' onClick={(e) => handleOptions(e,type, "inc")}>
                    <PlusCircleIcon className='text-slate-300 hover:text-green-600 hover:transition-all hover:duration-300' />
                </button>
            </div>
        </div>
    )
}