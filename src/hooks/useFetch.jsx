import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (dataUrl, dataQuery = '') => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log(data);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const { data } = await axios.get(`${dataUrl}`);
                setData(data);
                setLoading(false);
            } catch (error) {
                setData([]);
                console.log(error);
            }
        }

        fetchData();
    }, [dataUrl, dataUrl])

    return { loading, data }
};

export default useFetch;