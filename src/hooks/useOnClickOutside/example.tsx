import { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

const Example = () => {
    const myRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState<boolean>(false)
    const clickOutSide = () => {
        setShow(!show)
    }
    useOnClickOutside(myRef, clickOutSide)
    return(
        <div>
            <div ref={myRef} style={{backgroundColor: "#33ADFF"}}>Click</div>
            {
                show && <div>Hello World</div>
            }
        </div>
    )
}

export default Example