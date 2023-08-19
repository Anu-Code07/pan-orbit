import { useState } from "react";
import Home from "./Component/Home";
import { RouterProvider } from "react-router-dom";
import useBrowserRouter from "./Routes/useBrowserRouter.jsx";
function App() {
  const route = useBrowserRouter();
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
