import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/layout";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import ListItem from "./pages/ListItem";


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
          path: "add-item",
          element: <AddItem />,
        },
        {
          path: "list-items",
          element: <ListItem />,
        },
      ],
  },
]);

export default router;
