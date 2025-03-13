import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../features/auth/authSlice";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8000/api",
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth?.user?.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		sendOtp: builder.mutation({
			query: (email) => ({
				url: "/auth/sentOtp",
				method: "POST",
				body: { email },
			}),
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					// Handle success if needed
					console.log("OTP sent successfully:", data);
				} catch (error) {
					console.error("Error sending OTP:", error);
					// Optionally dispatch an error action or show a notification
				}
			},
		}),
		verifyOtp: builder.mutation({
			query: (data) => ({
				url: "/auth/verifyOtp",
				method: "POST",
				body: data,
			}),
		}),

		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(setUser(data.user));
				} catch (error) {
					// Handle error if needed
				}
			},
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
		}),
		register: builder.mutation({
			query: (userData) => ({
				url: "/auth/register",
				method: "POST",
				body: userData,
			}),
		}),
		getCurrentUser: builder.query({
			query: () => "/auth/me",
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(setUser(data));
				} catch (error) {
					// Handle error if needed
				}
			},
		}),
	}),
});

export const {
	useSendOtpMutation,
	useVerifyOtpMutation,
	useLoginMutation,
	useRegisterMutation,
	useGetCurrentUserQuery,
	useLogoutMutation,
} = api;
