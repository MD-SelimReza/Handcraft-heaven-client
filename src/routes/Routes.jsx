import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ArtGallery from "../pages/ArtGallery/ArtGallery";
import AddArt from "../pages/AddArt/AddArt";
import ArtList from "../pages/ArtList/ArtList";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show-art",
        element: <ArtGallery />,
      },
      {
        path: "/add-art",
        element: (
          <ProtectedRoutes>
            <AddArt />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/art-list",
        element: (
          <ProtectedRoutes>
            <ArtList />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
