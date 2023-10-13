import { useEffect } from "react";
import { useBookmarks } from "../Context/BookmarkProvider";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";


const SingleBookmark = () => {

    const {singleBookmark, loadingSingleBookmark, getSingleBookmark} = useBookmarks();
    const { id } = useParams();

    if (loadingSingleBookmark|| !singleBookmark) return <Loader />

    useEffect(() => {
        getSingleBookmark(id)
    }, [id])

    return (
        <div className="bookmark m-2">
            <div className='bookmarkDetail flex flex-col gap-y-2 bg-slate-50 border border-orange-300 rounded-md p-2'>
                <div className="flex gap-x-2">
                    <h2 className="font-bold text-lg">{singleBookmark.cityName}</h2>
                    <span>
                        <ReactCountryFlag className="text-xl"svg countryCode={singleBookmark.countryCode}></ReactCountryFlag>
                    </span>
                </div>
                <div className="text-slate-500 text-sm">{singleBookmark.country}  &bull; {singleBookmark.host_location}</div>
            </div>
        </div>
    );
};

export default SingleBookmark;