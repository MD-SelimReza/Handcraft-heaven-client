import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ArtGallery from "../pages/ArtGallery/ArtGallery";
import AddArt from "../pages/AddArt/AddArt";
import ArtList from "../pages/ArtList/ArtList";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateArt from "../pages/AddArt/UpdateArt";
import ErrorState from "../pages/ErrorState/ErrorState";
import CraftDetails from "../pages/CraftDetails/CraftDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorState />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`https://art-and-craft-store-server-peach.vercel.app/allArts`),
      },
      {
        path: "/show-art",
        element: <ArtGallery />,
        loader: () =>
          fetch(`https://art-and-craft-store-server-peach.vercel.app/allArts`),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <ProtectedRoutes>
            <CraftDetails />
          </ProtectedRoutes>
        ),
        loader: () =>
          fetch(`https://art-and-craft-store-server-peach.vercel.app/allArts`),
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
        path: "/update-art/:id",
        element: (
          <ProtectedRoutes>
            <UpdateArt />
          </ProtectedRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-store-server-peach.vercel.app/allArts/${params.id}`
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
