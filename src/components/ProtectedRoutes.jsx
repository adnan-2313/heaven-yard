import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  return children;
};

export default ProtectedRoutes;
