import { Method } from "axios";
import useFetch from "./useFetch";

const Example = () => {
    // let method: Method = 'GET';
    const { data, loading, error } = useFetch('GET' as Method, 'http://localhost:3000/', {})

    return (
      <div className="App">
        { loading && <p>{loading}</p> }
        { data && <p>{data}</p> }
        { error && <p>{error}</p> }
      </div>
    );
}

export default Example