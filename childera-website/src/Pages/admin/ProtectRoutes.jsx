import LoadingSpinner from "../../Components/Blog/LoadingSpinner";
import useAuthContext from "../../contexts/AuthContext";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const {
    authState: { token, loading },
  } = useAuthContext();

  if (loading) return <LoadingSpinner />;

  if (!token && !loading) {
    location.href = "/sign-in";
  } else return children;
};

export default ProtectedRoute;
