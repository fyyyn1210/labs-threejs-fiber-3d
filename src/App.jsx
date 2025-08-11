import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home";
import { NotFound } from "./partials/Errors";
import Helper from "./hooks/useHelper";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path:"-",
      children : Helper.getListProjects({withComponents:true})
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);
  return (
    <>
    <RouterProvider {...{router}}/>,
    </>
  )
}

export default App