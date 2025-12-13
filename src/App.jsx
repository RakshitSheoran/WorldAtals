import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout.jsx";
import Country from "./pages/Country.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CountryDetails from "./components/Layout/CountryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "country",
        element: <Country></Country>,
      },
      {
        path: "country/:id",
        element: <CountryDetails></CountryDetails>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
