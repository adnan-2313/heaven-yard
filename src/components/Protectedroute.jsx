import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const Protectedroute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && isSignedIn) {
    if (user?.id !== "user_2qXN0OKqqgfTRYLzTKNfLQXu5Yh") {
      return <Navigate to="/" state={{ from: pathname }} />;
    }
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return children;
};

export default Protectedroute;
