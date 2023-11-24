import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom"

export default function BackButton() {

    const navigate = useNavigate();

    return (
        <span
            className="flex justify-between w-fit items-center bg-orange-100 rounded-lg p-1 gap-x-1 cursor-pointer shadow-sm"
            onClick={() => navigate(-1)}>
            <ChevronLeftIcon className="w-5 h-5 font-bold text-orange-400" />
        </span>
    )
}

