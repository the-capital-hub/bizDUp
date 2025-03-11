import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	role: localStorage.getItem("activeUserType") || null,
	isAuthenticated: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		clearUser: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
		setRole: (state, action) => {
			const role = action.payload;
			state.role = role;
			localStorage.setItem("activeUserType", role);
		},
		clearRole: (state) => {
			state.role = null;
			localStorage.removeItem("activeUserType");
		},
	},
});

export const { setRole, clearRole, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectRole = (state) => state.auth.role;
