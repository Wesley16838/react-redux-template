// const columnCount = useMedia<number>(
//     // Media queries
//     ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
//     // Column counts (relates to above media queries by array index)
//     [5, 4, 3],
//     // Default column count
//     2
//   );

import { useEffect, useState } from "react";

const useMediaList = <T>(queries: string[], values: T[], defaultValue: T) => {
    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    // Function that gets value based on matching media query
    const getValue = () => {
        // Get index of first media query that matches
        const index = mediaQueryLists.findIndex(mql => mql.matches);
        // Return related value or defaultValue if none
        return values?.[index] || defaultValue;
    };

    // State and setter for matched value
    const [value, setValue] = useState<T>(getValue);

    useEffect(() => {
        const handler = () => setValue(getValue);
        mediaQueryLists.forEach(mql => mql.addEventListener('resize', handler));
        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('resize', handler));
    }, [])
    return value
}

export default useMediaList;
