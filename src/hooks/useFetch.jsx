import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url, query = "") => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // console.log(data);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                setLoading(true);
                const { data } = await axios.get(`${url}?${query}`);
                setData(data);
            } catch (err) {
                setData([]);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url, query])

    return { loading, data }
};

export default useFetch;