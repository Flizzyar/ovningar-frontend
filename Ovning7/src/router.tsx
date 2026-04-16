import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/layout";
import Home from "./pages/Home";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import SongDetails from "./pages/SongDetails";
import Songs from "./pages/Songs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "songs",
        element: <Songs />,
      },
      {
        path: "songs/:id",
        element: <SongDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
