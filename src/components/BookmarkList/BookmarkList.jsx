import { useBookmarks } from "../Context/BookmarkProvider";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import Bookmark from "./Bookmark/Bookmark";
import BackButton from '../../common/BackButton'
import { BookmarkIcon } from "@heroicons/react/24/solid";

const BookmarkList = () => {

    const { singleBookmark, isLoading, bookmarkList, deleteBookmark } = useBookmarks();

    const navigate = useNavigate();
    if (isLoading) return <Loader />

    const deleteHandler = async (e, id) => {
        e.preventDefault();
        await deleteBookmark(id);
    }

    return (
        <div className="bookmarklist m-1 flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1 mt-3 m-1">
                <BackButton />
                <div className="flex justify-between items-center gap-x-1">
                    <h2 className="font-bold text-lg ml-1">Bookmarks ({bookmarkList.length})</h2>
                    <span
                        onClick={() => navigate('/bookmarks/add')}
                        className="w-fit h-6 rounded-md bg-orange-400 text-xs md:text-sm text-white px-1 flex items-center justify-between cursor-pointer">
                        <span className="text-lg">+</span>
                        <BookmarkIcon className="w-5 h-5 text-slate-50" />
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <Bookmark
                    bookmarkList={bookmarkList}
                    singleBookmark={singleBookmark}
                    deleteHandler={deleteHandler}
                />
            </div>
            <div className="h-9 w-full bg-white md:hidden"></div>
        </div>
    );
};

export default BookmarkList;