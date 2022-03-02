// Ex.
// const { isLoading, serverError, apiData } = useFetch(
//     "GET",
//     "https://localhost/8080",
//     {}
// );

import { useState, useEffect, useRef } from "react";
import axios, { Method } from 'axios';

type Cache<T> = {[url: string]: T}

const useFetch = (method: Method, url: string, body: object) => {
    const cache = useRef<Cache<Response>>({})
    const [data, setData] = useState<Response | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        
        const fetchData = async() => {
            try {
                setLoading(true);
                if(cache.current[url]) {
                    const data = cache.current[url]
                    setData(data)
                } else {
                    const res = await axios.request({
                        method: method,
                        url: url,
                        data: body
                    })
                    const data = await res?.data;
                    setData(data);
                }
                setLoading(false);
            } catch (error) {
                setError(error as Error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url, method, body])
    return { loading, data, error }
}

export default useFetch