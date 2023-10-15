import ReactCountryFlag from "react-country-flag";
import { useBookmarks } from "../Context/BookmarkProvider";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { TrashIcon } from '@heroicons/react/24/solid';

const BookmarkList = () => {

    const { singleBookmark, isLoading, bookmarkList, deleteNewBookmark } = useBookmarks();
    const navigate = useNavigate();
    if (isLoading) return <Loader />

    const deleteHandler = async (e, id) => {

        e.preventDefault();
        e.stopPropagation();

        await deleteHandler(id);
    }

    return (
        <div className="bookmarklist m-1 flex flex-col gap-y-2">
            <button
                onClick={() => navigate(-1)}
                className="p-1 border border-orange-400 text-orange-400 w-20 text-sm rounded-lg"
            >&larr; Back</button>
            <h2 className="font-bold text-md ml-1">Bookmarks ({bookmarkList.length})</h2>
            <div className="flex flex-col gap-y-3">
                {
                    bookmarkList.map(bk => (
                        <Link key={bk.id} to={`${bk.id}?lat=${bk.latitude}&lng=${bk.longitude}`}>
                            <div className={`flex items-center justify-between bg-slate-200 p-2 rounded-lg hover:bg-slate-100 ease-in-out duration-100 ${bk.id === singleBookmark?.id ? 'bg-orange-100' : ''}`}>
                                <div className="flex items-center  gap-x-3">
                                    <ReactCountryFlag svg countryCode={bk.countryCode} />
                                    <h3 className="text-md">{bk.cityName}</h3>
                                    <span className="text-sm text-slate-600">{bk.country}</span>
                                </div>
                                <div>
                                    <button onClick={(e) => deleteHandler(e, bk.id)}>
                                        <TrashIcon className="w-5 h-5 text-red-600" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default BookmarkList;