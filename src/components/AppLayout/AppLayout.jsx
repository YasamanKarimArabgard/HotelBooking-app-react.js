import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="appLayout row-start-2 col-start-2 col-span-10 border bg-white rounded-xl p-2">
            <div className="flex h-full justify-between overflow-hidden">
                <div className="w-2/5 overflow-y-scroll">
                    <Outlet />
                </div>
                <div className="w-3/5 bg-blue-100 rounded-tr-md rounded-br-md">map</div>
            </div>
        </div>
    );
};

export default AppLayout;