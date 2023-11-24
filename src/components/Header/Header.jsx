import { ArrowLeftOnRectangleIcon, BookmarkIcon, } from '@heroicons/react/24/solid';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const Header = () => {
    return (
        <header className="header_container col-span-10 col-start-2 row-start-1">
            <nav className='nav h-12 bg-white border border-md rounded-xl m-auto flex flex-row-reverse justify-between items-center px-2 mt-2 gap-x-3'>
                <User />
                <NavLink to='/'>
                    <h1 className='font-bold text-md md:text-xl text-orange-400 md:justify-self-center'>Hotel Booking App</h1>
                </NavLink>
                <NavLink to={'/bookmarks'} className="cursor-pointer text-slate-400 md:hidden">
                    <BookmarkIcon className={`w-5 h-5 text-orange-400'}`} />
                </NavLink>
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
                <NavLink to="/login" className='text-white'>
                    <span className='px-2 py-1 bg-orange-400 text-md rounded-lg'>Sign in</span>
                </NavLink>
            )}
        </div>
    );
}



