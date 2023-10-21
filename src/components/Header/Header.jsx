import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon, MinusCircleIcon, PlusCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { createSearchParams, useNavigate, useSearchParams, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import SearchModal from '../SearchPage/SearchPage';

const Header = () => {

    

    return (
        <header className="header_container col-span-10 col-start-2 row-start-1">
            <nav className='nav h-12 bg-white border border-md rounded-xl m-auto flex flex-row-reverse xl:flex-row justify-between items-center px-2 mt-2 gap-x-3'>
                <h1 className='font-bold text-sm text-orange-400'>Hotel Booking App</h1>
                <User />
            </nav>
        </header>
    );
};

export default Header;

// function GusetOptions({ options, handleOptions, setOpenOptions }) {

//     const optionsRef = useRef();
//     useClickOutside(optionsRef, 'guest-options', () => setOpenOptions(false));

//     return (
//         <div
//             className='guest-options w-1/2 max-w-auto bg-white rounded-md absolute top-6 right-[5em] border p-1 px-2 flex flex-col gap-y-2 z-[1000]'
//             ref={optionsRef}>
//             {
//                 Object.entries(options).map(([key, value]) => (
//                     <GuestItem
//                         handleOptions={handleOptions}
//                         type='adult'
//                         optionKey={key}
//                         optionValue={value}
//                     />
//                 ))
//             }
//         </div>
//     )
// }

// function GuestItem({ optionKey, optionValue }) {
//     return (
//         <div className='guest-item flex justify-between'>
//             <span className='option text-md'>{optionKey}</span>
//             <div className='option-buttons flex-1 flex items-center gap-x-2 justify-end'>
//                 <button className='w-6 h-6'>
//                     <MinusCircleIcon className='text-slate-300 hover:text-red-600 hover:transition-3 hover:duration-300' />
//                 </button>
//                 <span className='text-md'>{optionValue}</span>
//                 <button className='w-6 h-6'>
//                     <PlusCircleIcon className='text-slate-300 hover:text-green-600 hover:transition-all hover:duration-300' />
//                 </button>
//             </div>
//         </div>
//     )
// }

function User() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();
    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            {isAuthenticated ? (
                <div className='flex items-center justify-center'>
                    &nbsp; <ArrowLeftOnRectangleIcon onClick={handleLogout} className="logout w-6 h-7 text-red-500">logout</ArrowLeftOnRectangleIcon>
                </div>
            ) : (
                <NavLink to="/login" className='text-orange-500'>Login</NavLink>
            )}
        </div>
    );
}



