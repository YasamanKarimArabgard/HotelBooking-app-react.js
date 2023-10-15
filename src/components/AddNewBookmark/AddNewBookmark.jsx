import { useEffect, useState } from "react";
import useLocUrl from '../../hooks/useLocUrl';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";
import { useBookmarks } from "../Context/BookmarkProvider";

const AddNewBookmark = () => {

    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [geoLoading, setGeoLoading] = useState(false);
    const [lat, lng] = useLocUrl();
    const navigate = useNavigate();

    const { createNewBookmark } = useBookmarks();

    const Base_GeoLocation_Url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

    function backBtn(e) {
        e.preventDefault();
        e.stopPropagation()
        navigate(-1);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!cityName || !countryName) return;

        const newBookmark = {
            cityName,
            countryName,
            countryCode,
            latitude: lat,
            longitude: lng,
            host_location: cityName + '+' + countryCode,
        };
        await createNewBookmark(newBookmark);
        navigate('/bookmarks')
    }

    useEffect(() => {

        if (!lat || !lng) return;

        async function getGeoLoaction() {
            setGeoLoading(true)
            try {
                const { data } = await axios.get(`${Base_GeoLocation_Url}`)
                setCityName(data.cityName || data.locality || '');
                setCountryName(data.countryName);
                setCountryCode(data.countryCode);
                setGeoLoading(false);
            }
            catch (error) {
                console.log(error);
            }
        }
        getGeoLoaction();
    }, [lat, lng])

    if (geoLoading) return <Loader />

    return (
        <div className="w-full flex flex-col gap-y-2 p-2 px-3">
            <h2 className="font-bold text-lg">Book New Location</h2>
            <form className='w-full flex flex-col gap-y-2' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="cityName">City name :</label>
                    <div className="">
                        <input
                            type="text"
                            value={cityName}
                            onChange={(e) => setCityName(e.target.value)}
                            id="cityName"
                            name="cityName"
                            className="w-full p-1 px-2 outline-none border border-orange-400 rounded-lg"
                            placeholder="type city name"
                        ></input>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="countryName">Country name :</label>
                    <div className="flex justify-between items-center border border-orange-400 rounded-lg overflow-hidden p-1 px-2">
                        <input
                            type="text"
                            value={countryName}
                            onChange={(e) => setCountryName(e.target.value)}
                            id="countryname"
                            name="countryName"
                            className="w-full outline-none"
                            placeholder="type country name"
                        ></input>
                        <ReactCountryFlag className="text-lg" svg countryCode={countryCode}></ReactCountryFlag>
                    </div>
                </div>
                <div className="add-form-buttons flex justify-between">
                    <button
                        onClick={(e) => backBtn(e)}
                        className="add-submit-btn p-2 px-3 border border-orange-400 rounded-xl hover:bg-orange-400 hover:text-white duration-100 ease-in text-orange-400">back</button>
                    <button
                        type="submit"
                        className="add-submit-btn w-1/2 p-2 px-3 bg-blue-400 hover:bg-blue-500 duration-150 ease-in-out rounded-xl text-white">submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewBookmark;

