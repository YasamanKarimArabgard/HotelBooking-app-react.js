import { useState } from "react";
import { useHotels } from "../Context/HotelsProvider";
import { MapContainer, TileLayer, Marker, Popup , useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useSearchParams } from "react-router-dom";

const Map = () => {

    const { loading, hotels } = useHotels();
    const [mapPosition, setMapPOsition] = useState([51, 3]);
    const [searchParams, setSearchParams] = useSearchParams();

    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')

    return (
        <div className="w-3/5 rounded-tr-md rounded-br-md flex items-center justify-center">
            <MapContainer
                className="map"
                center={[lat || 50, lng || 3]}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <ChangeCenter position={[lat || 50, lng || 3]} />
                {
                    hotels.map(item => (
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