import { Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import routes from "./routes";

function App() {
  // let route = useRoutes([
  //   { path: '/', element: <Homepage/> }
  // ])

  let route = useRoutes(routes)
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        {route}
        {/* <Routes> */}
          {/* {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={Component}/>
          ))} */}
          {/* <Route path="/" element={<Homepage/>}/> */}
        {/* </Routes> */}
    </Suspense>
  );
}

export default App;
