import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../features/auth/authSlice";

export const useAuth = () => {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const user = useSelector(selectUser);

	return { isAuthenticated, user };
};
