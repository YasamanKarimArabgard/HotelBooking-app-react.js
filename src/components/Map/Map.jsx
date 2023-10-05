import { useState } from "react";
import { useHotels } from "../Context/HotelsProvider";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Map = () => {

    const { loading, hotels } = useHotels();
    const [mapPosition, setMapPOsition] = useState([51, 3]);

    return (
        <div className="w-3/5 rounded-tr-md rounded-br-md flex items-center justify-center">
            <MapContainer
                className="map"
                center={mapPosition}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
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