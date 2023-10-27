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

    // console.log(activeTab);

    return (
        <div className="mobile-footer fixed md:hidden bottom-0 left-0 bg-white w-full bg-red shadow-2xl z-50 h-14 rounded-tl-xl rounded-tr-xl px-7 py-4">
            <ul className="flex w-full items-center justify-between">
                {/* home icon */}
                <li onClick={() => setActiveTab(1)}>
                    <NavLink to={'/'} className={`cursor-pointer`}>
                        <HomeIcon className={`w-7 h-7 text-slate-400 ${activeTab == 1 ? 'text-orange-400' : ''}`} />
                    </NavLink>
                </li>
                {/* serach icon */}
                <li onClick={() => setActiveTab(2)}>
                    <NavLink to={'/search'} className="cursor-pointer">
                        <MagnifyingGlassIcon className="w-7 h-7 text-slate-400" />
                    </NavLink>
                </li>
                {/* bookmark icon */}
                <li onClick={() => setActiveTab(2)}>
                    <NavLink to={'/bookmarks'} className="cursor-pointer">
                        <BookmarkIcon className="w-7 h-7 text-slate-400" />
                    </NavLink>
                </li>
                {/* profile icon */}
                <li onClick={() => setActiveTab(2)}>
                    <NavLink to={'/'} className="cursor-pointer">
                        <UserCircleIcon className="w-7 h-7 text-slate-400" />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MobileFooter;