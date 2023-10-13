import ReactCountryFlag from "react-country-flag";
import { useBookmarks } from "../Context/BookmarkProvider";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const BookmarkList = () => {

    const { singleBookmark, loading, bookmarkList } = useBookmarks();

    if (loading) return <Loader />

    return (
        <div className="bookmarklist m-1 flex flex-col gap-y-2">
            <h2 className="font-bold text-md ml-1">Bookmarks ({bookmarkList.length})</h2>
            <div className="flex flex-col gap-y-3">
                {
                    bookmarkList.map(bk => (
                        <Link key={bk.id} to={`${bk.id}?lat=${bk.latitude}&lng=${bk.longitude}`}>
                            <div className={`flex items-center gap-x-3 bg-slate-200 p-2 rounded-lg hover:bg-slate-100 ease-in-out duration-100 ${bk.id === singleBookmark?.id ? 'bg-orange-200' : ''}`}>
                                <ReactCountryFlag svg countryCode={bk.countryCode} />
                                <h3 className="text-md">{bk.cityName}</h3>
                                <span className="text-sm text-slate-600">{bk.country}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default BookmarkList;