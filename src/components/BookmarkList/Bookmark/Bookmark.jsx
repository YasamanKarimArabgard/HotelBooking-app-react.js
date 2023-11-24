import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid';

export default function Bookmark({ bookmarkList, singleBookmark, deleteHandler }) {
    return (
        bookmarkList.map(bk => (
            <Link key={bk.id} to={`${bk.id}?lat=${bk.latitude}&lng=${bk.longitude}`}>
                <div className={`flex items-center justify-between bg-gray-100 p-2 rounded-lg hover:bg-slate-100 ease-in-out duration-100 ${bk.id === singleBookmark?.id ? 'bg-orange-100' : ''}`}>
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
    )
}
