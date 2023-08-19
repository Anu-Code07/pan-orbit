import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import UserDetails from "../Component/users/UserDetailsLayout";
import Profile from "../Component/users/pages/Profile";
import ComingSoon from "../Component/users/pages/ComingSoon";
const useBrowserRouter = () => {
  let route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "user/:id",
      element: <UserDetails />,
      children: [
        { path: "profile", element: <Profile /> },
        { path: "posts", element: <ComingSoon /> },
        {
          path: "gallery",
          element: <ComingSoon />,
        },

        { path: "todo", element: <ComingSoon /> },
      ],
    },
  ]);
  return route;
};

export default useBrowserRouter;
