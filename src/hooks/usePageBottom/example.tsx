import { useState } from "react";
import usePageBottom from "./usePageBottom";

const Example = () => {
    const [books, setBooks] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
    const fetchData = () => {
        let beerUrl = 'https://localhost8080?page='+page;
        fetch(beerUrl)
           .then(res=>res.json())
           .then(data => {
             setBooks([...books,...data])
             setPage(page+1)
        })
    }
    
    usePageBottom(fetchData)
}

export default Example