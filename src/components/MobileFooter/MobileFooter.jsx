import {
    BookmarkIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
    HomeIcon
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="mobile-footer fixed md:hidden bottom-0 left-0 bg-white w-full bg-red shadow-2xl z-50 h-14 rounded-tl-xl rounded-tr-xl px-7 py-4">
            <ul className="flex w-full items-center justify-between">
                {/* home icon */}
                <li onClick={() => setActiveTab(1)}>
                    <NavLink to={'/'} className='cursor-pointer text-slate-400'>
                        <HomeIcon className={`w-7 h-7 ${activeTab === 1 && 'text-orange-400'}`} />
                    </NavLink>
                </li>
                {/* serach icon */}
                <li onClick={() => setActiveTab(2)}>
                    <NavLink to={'/search'} className="cursor-pointer text-slate-400">
                        <MagnifyingGlassIcon className={`w-7 h-7 ${activeTab === 2 && 'text-orange-400'}`}/>
                    </NavLink>
                </li>
                {/* bookmark icon */}
                <li onClick={() => setActiveTab(3)}>
                    <NavLink to={'/bookmarks'} className="cursor-pointer text-slate-400">
                        <BookmarkIcon className={`w-7 h-7 ${activeTab === 3 && 'text-orange-400'}`}/>
                    </NavLink>
                </li>
                {/* profile icon */}
                <li onClick={() => setActiveTab(4)}>
                    <NavLink to={'/'} className="cursor-pointer text-slate-400">
                        <UserCircleIcon className={`w-7 h-7 ${activeTab === 4 && 'text-orange-400'}`}/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MobileFooter;