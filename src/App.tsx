
// import wordsList from "./wordList.json";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Campaign from "./campaign/Campaign";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"Campaign",
          element:<Campaign/>
        }
      ]
    }
  ])

  return (
    <div className="">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
