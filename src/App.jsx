import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Protectedroute from "./components/Protectedroute";
import PropertyListing from "./pages/PropertyListing";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admindashboard",
        element: (
          <Protectedroute>
            <AdminDashboard />
          </Protectedroute>
        ),
      },
      {
        path: "/property",
        element: <PropertyListing />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
