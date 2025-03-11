import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../features/auth/authSlice";

export const ProtectedRoute = ({ element, redirectTo = "/auth" }) => {
	const isAuthenticated = useSelector(selectIsAuthenticated);

	return isAuthenticated ? element : <Navigate to={redirectTo} replace />;
};
