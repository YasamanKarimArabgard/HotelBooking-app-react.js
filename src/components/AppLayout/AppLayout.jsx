import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotels } from "../Context/HotelsProvider";

const AppLayout = () => {

    const { hotels } = useHotels();
    return (
        <div className="appLayout row-start-2 col-start-2 col-span-10 border bg-white rounded-xl p-2">
            <div className="flex h-full justify-between overflow-hidden">
                <div className="w-2/6 overflow-y-scroll">
                    <Outlet />
                </div>
                <Map markerLoactions={hotels} />
            </div>
        </div>
    );
};

export default AppLayout;