import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ArtGallery from "../pages/ArtGallery/ArtGallery";
import AddArt from "../pages/AddArt/AddArt";
import ArtList from "../pages/ArtList/ArtList";

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
        element: <AddArt />,
      },
      {
        path: "/art-list",
        element: <ArtList />,
      },
    ],
  },
]);

export default router;
