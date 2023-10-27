import {ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

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



