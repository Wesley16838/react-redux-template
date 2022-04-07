import { lazy } from "react";
import Aboutpage from "../pages/About/About";
import Profilepage from "../pages/Profile/Profile";

// pages
const Homepage = lazy(() => import("../pages/Home/Home"));

const routes = [
  { path: '/', element: <Homepage/> },
  { path: '/about', element: <Aboutpage/> },
  { path: '/profile', element: <Profilepage/> },
]

export default routes;