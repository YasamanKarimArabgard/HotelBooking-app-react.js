import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useBookmarks } from "../Context/BookmarkProvider";

const BookmarkLayout = () => {

    const { bookmarkList } = useBookmarks();
    
    return (
        <div className="col-span-10 col-start-2 row-start-2 bg-white rounded-xl border">
            <div className="flex flex-col-reverse md:flex-row h-full justify-between overflow-hidden flex-wrap">
                <div className="h-4/6 md:h-full w-full md:w-2/6 overflow-y-scroll">
                    <Outlet />
                </div>
                <Map markerLoactions={bookmarkList} />
            </div>
        </div>
    );
};

export default BookmarkLayout;