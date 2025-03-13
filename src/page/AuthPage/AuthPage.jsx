import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogClose,
} from "@/components/ui/dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { LockIcon, X, EyeIcon, EyeOffIcon } from "lucide-react";
import { MdSupportAgent } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaRegCircleDot } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser, setRole } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

import {
	useSendOtpMutation,
	useVerifyOtpMutation,
	useLoginMutation,
} from "../../app/api";

export default function AuthPage({ mode = "signup" }) {
	const [authMode, setAuthMode] = useState(mode);
	const [showOTPModal, setShowOTPModal] = useState(false);
	const [otpValue, setOtpValue] = useState("");
	const [email, setEmail] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Initialize the RTK Query mutation hooks
	const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();
	const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyOtpMutation();
	const [login, { isLoading: isLoggingIn }] = useLoginMutation();

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		try {
			// For sign up, we send OTP to the email
			const response = await sendOtp(email).unwrap();
			if (response) {
				toast.success("OTP sent to your email");
				setShowOTPModal(true);
			}
		} catch (error) {
			toast.error(error?.data?.message || "Failed to send OTP");
		}
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			// Login with email and password
			const credentials = {
				email: loginEmail,
				password: password,
			};

			const response = await login(credentials).unwrap();
			if (response && response.user) {
				// Set user data in Redux store
				dispatch(setUser(response.user));

				// Set user role in Redux store
				if (response.user.role) {
					dispatch(setRole(response.user.role.toLowerCase()));
				}

				toast.success("Logged in successfully");

				// Navigate to dashboard based on role
				if (response.user.role === "admin") {
					navigate("/admin/dashboard");
				} else if (response.user.role.toLowerCase() === "investor") {
					navigate("/investor/dashboard");
				} else if (response.user.role.toLowerCase() === "startup") {
					navigate("/startup/dashboard");
				} else if (response.user.role.toLowerCase() === "startup_manager") {
					navigate("/startup_manager/dashboard");
				} else if (response.user.role.toLowerCase() === "investor_manager") {
					navigate("/investor_manager/dashboard");
				} else if (response.user.role.toLowerCase() === "syndicate") {
					navigate("/syndicate/dashboard");
				} else {
					navigate("/dashboard");
				}
			}
		} catch (error) {
			toast.error(error?.data?.message || "Invalid email or password");
		}
	};

	const handleVerify = async () => {
		try {
			const dataToVerify = {
				email: email,
				otp: otpValue,
			};

			const response = await verifyOtp(dataToVerify).unwrap();

			if (response) {
				toast.success("OTP verified successfully");
				setShowOTPModal(false);

				// After successful verification, navigate to complete profile
				toast.success("Signup successful! Please complete your profile.");
				navigate(`/user-onboarding/?email=${encodeURIComponent(email)}`);
			}
		} catch (error) {
			toast.error(error?.data?.message || "OTP verification failed");
		}
	};

	const toggleAuthMode = () => {
		setAuthMode(authMode === "signup" ? "signin" : "signup");
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleResendOtp = async () => {
		try {
			await sendOtp(email).unwrap();
			toast.success("OTP resent successfully");
		} catch (error) {
			toast.error("Failed to resend OTP");
		}
	};

	return (
		<div className="flex min-h-screen">
			{/* Left Panel */}
			<div className="w-full md:w-1/2 bg-white p-8 flex flex-col">
				<div className="mb-8">
					<img src={BizDateUpLogo} alt="BizDateUp Logo" />
				</div>

				<div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
					<h1 className="text-3xl font-bold mb-2">
						{authMode === "signup" ? "Sign Up" : "Sign in"}
					</h1>

					<p className="text-gray-600 mb-6">
						{authMode === "signup" ? (
							<span>
								I already have an account?{" "}
								<button
									onClick={toggleAuthMode}
									className="text-blue-600 font-medium"
								>
									Login Now
								</button>
							</span>
						) : (
							<span>
								Don't have an account?{" "}
								<button
									onClick={toggleAuthMode}
									className="text-blue-600 font-medium"
								>
									Create now
								</button>
							</span>
						)}
					</p>

					{authMode === "signup" ? (
						<form onSubmit={handleSignupSubmit}>
							<label className="block text-sm font-medium mb-2">
								Enter Email
							</label>
							<Input
								type="email"
								placeholder="Enter Email"
								className="mb-4"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<Button
								type="submit"
								className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
								disabled={isSendingOtp}
							>
								{isSendingOtp ? "Sending..." : "Get OTP"}
							</Button>
						</form>
					) : (
						<form onSubmit={handleLoginSubmit}>
							<label className="block text-sm font-medium mb-2">Email</label>
							<Input
								type="email"
								placeholder="Enter Email"
								className="mb-4"
								value={loginEmail}
								onChange={(e) => setLoginEmail(e.target.value)}
								required
							/>

							<label className="block text-sm font-medium mb-2">Password</label>
							<div className="relative mb-4">
								<Input
									type={showPassword ? "text" : "password"}
									placeholder="Enter Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="pr-10"
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center"
									onClick={togglePasswordVisibility}
								>
									{showPassword ? (
										<EyeOffIcon className="h-5 w-5 text-gray-500" />
									) : (
										<EyeIcon className="h-5 w-5 text-gray-500" />
									)}
								</button>
							</div>

							<div className="flex justify-end mb-4">
								<button type="button" className="text-sm text-blue-600">
									Forgot Password?
								</button>
							</div>

							<Button
								type="submit"
								className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
								disabled={isLoggingIn}
							>
								{isLoggingIn ? "Signing in..." : "Sign in"}
							</Button>
						</form>
					)}

					<div className="relative flex items-center my-8">
						<div className="flex-grow border-t border-gray-300"></div>
						<span className="flex-shrink mx-4 text-gray-600">OR</span>
						<div className="flex-grow border-t border-gray-300"></div>
					</div>

					<Button
						variant="outline"
						className="mb-3 py-6 flex items-center justify-center gap-2 rounded-full"
					>
						<FcGoogle />
						Continue with Google
					</Button>

					<Button
						variant="outline"
						className="py-6 flex items-center justify-center gap-2 rounded-full"
					>
						<FaFacebook />
						Continue with Facebook
					</Button>
				</div>
			</div>

			{/* Right Panel */}
			<div className="hidden md:block md:w-1/2 bg-[#1e1b4b] p-8 relative overflow-hidden">
				<div className="absolute top-6 right-6">
					<Button variant="ghost" className="text-white">
						<MdSupportAgent />
						<span className="mr-2">Support</span>
					</Button>
				</div>

				<div className="h-full flex flex-col justify-center">
					<div className="max-w-md mx-auto bg-[#3d3a6d] rounded-lg p-8 text-white relative">
						<h2 className="text-2xl font-bold mb-2">Invest with BizDateUp</h2>
						<p className="text-sm opacity-80 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor.
						</p>

						<Button
							variant="outline"
							className="text-white bg-[#3d3a6d] border-white hover:bg-white/10"
						>
							Learn more
						</Button>

						<div className="absolute -right-10 -bottom-10">
							<div className="relative">
								<div className="w-40 h-40 bg-[#2d2a5d] rounded-lg transform rotate-12"></div>
								<div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-lg transform rotate-12 flex items-center justify-center">
									<img src={BizDateUpLogo} alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="mt-8 bg-white rounded-lg p-4 max-w-[200px] mx-auto">
						<div className="text-center">
							<p className="text-sm text-gray-600">Profits</p>
							<p className="text-xl font-bold text-blue-600">$350.40</p>
						</div>
					</div>

					<div className="mt-12 text-white">
						<h2 className="text-2xl font-bold mb-4">
							Introducing new features
						</h2>
						<p className="opacity-80">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor
							sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore
						</p>
					</div>

					<div className="mt-8 flex items-center justify-center gap-4">
						<Button variant="ghost" size="icon" className="text-white">
							<span className="sr-only">Previous</span>
							<FaAngleLeft />
						</Button>
						<div className="text-white">
							<span className="sr-only">Dark mode</span>
							<FaRegCircleDot />
						</div>
						<Button variant="ghost" size="icon" className="text-white">
							<span className="sr-only">Next</span>
							<FaAngleRight />
						</Button>
					</div>
				</div>
			</div>

			{/* OTP Verification Modal - Only used for signup */}
			<Dialog open={showOTPModal} onOpenChange={setShowOTPModal}>
				<DialogContent className="sm:max-w-md">
					<DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
						<X className="h-4 w-4" />
						<span className="sr-only">Close</span>
					</DialogClose>
					<div className="flex flex-col items-center justify-center">
						<div className="bg-[#e8e8fb] p-4 rounded-full mb-4">
							<LockIcon className="h-10 w-10 text-[#1e1b4b]" />
						</div>
						<DialogTitle className="text-xl font-semibold mb-2">
							Enter verification code
						</DialogTitle>
						<p className="text-center text-gray-600 mb-6">
							We have just sent a verification code to your email ({email})
						</p>

						<div className="mb-6">
							<InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
						</div>

						<Button
							onClick={handleVerify}
							className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white"
							disabled={isVerifyingOtp || otpValue.length < 6}
						>
							{isVerifyingOtp ? "Verifying..." : "Verify"}
						</Button>

						<div className="flex justify-between w-full mt-4">
							<Button
								variant="link"
								className="text-gray-600"
								onClick={handleResendOtp}
								disabled={isSendingOtp}
							>
								{isSendingOtp ? "Sending..." : "Send the code again"}
							</Button>
							<Button
								variant="link"
								className="text-gray-600"
								onClick={() => setShowOTPModal(false)}
							>
								Change email
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
