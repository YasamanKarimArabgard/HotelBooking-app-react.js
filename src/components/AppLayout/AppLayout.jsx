import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotels } from "../Context/HotelsProvider";

const AppLayout = () => {

    const { hotels } = useHotels();
    return (
        <div className="appLayout row-start-2 col-start-2 col-span-10 border bg-white rounded-xl p-2">
            <div className="location-list flex flex-col-reverse md:flex-row h-full justify-between overflow-hidden flex-wrap">
                <div className="w-full h-4/6 md:h-full md:w-2/6 overflow-y-scroll">
                    <Outlet />
                </div>
                <Map markerLoactions={hotels} />
            </div>
        </div>
    );
};

export default AppLayout;