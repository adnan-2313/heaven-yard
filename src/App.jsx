import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
