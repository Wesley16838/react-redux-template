import { useState } from "react"
import useDocumentTitle from "./useDocumentTitle"

const Example = () => {
    const [total, setTotal] = useState(0)
    const addTotal = () => setTotal(total + 1)
    const title: string = `Have totally ${total} message`
    useDocumentTitle(title)
    return(
        <div>
            <h3>{`${total} message`}</h3>
            <button onClick={addTotal}>Add</button>
        </div>
    )
}

export default Example