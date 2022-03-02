import { lazy } from "react";

// pages
const Homepage = lazy(() => import("../pages/Home/Home"));

const routes = [
  { path: '/', element: <Homepage/> },
]

export default routes;