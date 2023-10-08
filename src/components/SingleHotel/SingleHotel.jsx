import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

const SingleHotel = () => {

    const { id } = useParams();

    console.log(id);

    const { loading, data } = useFetch(`http://localhost:5000/hotels/${id}`);

    if (loading) return <p>loading...</p>;

    console.log(data.xl_picture_url);

    return (
        <div className="room m-2">
            <div className="roomDetail flex flex-col gap-y-2">
                <h2 className="font-bold text-lg">{data.name}</h2>
                <div className="text-slate-500 text-sm">{data.number_of_reviews} review &bull; {data.smart_location}</div>
                <img className="rounded-lg w-full" src={data.xl_picture_url} alt={data.name} />
            </div>
        </div>
    )
}

export default SingleHotel;