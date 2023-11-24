import { useState } from "react";


const useGeoLoaction = () => {
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    function getPosition(e) {

        e.preventDefault();
        e.stopPropagation();

        if (!navigator.geolocation) {
            return ('your browser doesnt support geolocaltion');
        }

        // console.log(position);

        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        )
    }
    return { loading, position, error, getPosition }
};

export default useGeoLoaction;