import { useEffect, useState } from "react";
import useGeoLoaction from '../../hooks/useGeoLoaction';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import { useSearchParams, useNavigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

const Map = ({ markerLoactions }) => {

    const { loading: isLoactionloading, position: geoCurrentLocation, getPosition } = useGeoLoaction();
    const [mapPosition, setMapPOsition] = useState([50, 4]);
    const [searchParams, setSearchParams] = useSearchParams();


    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    useEffect(() => {
        if (lat && lng) setMapPOsition([lat, lng])
    }, [lat, lng]);

    useEffect(() => {
        if (geoCurrentLocation?.lat && geoCurrentLocation?.lng) {
            setMapPOsition([geoCurrentLocation.lat, geoCurrentLocation.lng])
        }
    }, [geoCurrentLocation])

    return (
        <div className="map w-full h-2/6 md:h-full md:w-4/6 rounded-tr-md rounded-br-md flex items-center justify-center">
            <MapContainer
                className="map"
                center={mapPosition}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}>
                <button
                    onClick={(e) => getPosition(e)}
                    className="absolute bottom-2 left-2 bg-orange-500 z-[1000] text-xs p-1 px-2 rounded-md text-white font-bold shadow-xl">{isLoactionloading ? 'Loading...' : 'Current location'}</button>
                <TileLayer
                    attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <DetectClick />
                <ChangeCenter position={mapPosition} />
                {
                    markerLoactions.map(item => (
                        <Marker key={item.id} position={[item.latitude, item.longitude]}>
                            <Popup>{item.host_location}</Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
};

export default Map;

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick() {
    const navigate = useNavigate()
    useMapEvent({
        click: e => navigate(`/bookmarks/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    })
    return null;
}