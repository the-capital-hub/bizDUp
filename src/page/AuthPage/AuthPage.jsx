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
import { LockIcon, X } from "lucide-react";
import { MdSupportAgent } from "react-icons/md";
import {
	FaAngleLeft,
	FaAngleRight,
	FaArrowRotateRight,
	FaRegCircleDot,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";

export default function AuthPage({ mode = "signup" }) {
	const [authMode, setAuthMode] = useState(mode);
	const [showOTPModal, setShowOTPModal] = useState(false);
	const [otpValue, setOtpValue] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleGetOTP = (e) => {
		e.preventDefault();
		setShowOTPModal(true);
	};

	const handleVerify = () => {
		// Handle verification logic here
		setShowOTPModal(false);
		// Redirect or show success message
	};

	const toggleAuthMode = () => {
		setAuthMode(authMode === "signup" ? "signin" : "signup");
	};

	return (
		<div className="flex min-h-screen">
			{/* Left Panel */}
			<div className="w-full md:w-1/2 bg-white p-8 flex flex-col">
				<div className="mb-8">
					<img src={BizDateUpLogo} alt="" />
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

					<form onSubmit={handleGetOTP}>
						{authMode === "signup" ? (
							<>
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
							</>
						) : (
							<>
								<label className="block text-sm font-medium mb-2">
									Enter Phone Number
								</label>
								<div className="flex mb-4">
									<div className="flex items-center justify-center bg-gray-100 px-3 rounded-l-md border border-r-0 border-input">
										+91
									</div>
									<Input
										type="tel"
										className="rounded-l-none"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
							</>
						)}

						<Button
							type="submit"
							className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
						>
							Get OTP
						</Button>
					</form>

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

			{/* OTP Verification Modal */}
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
							We have just sent a verification code to your{" "}
							{authMode === "signup" ? "email" : "phone"}
						</p>

						<div className="mb-6">
							<InputOTP
								maxLength={4}
								value={otpValue}
								onChange={setOtpValue}
								// render={({ slots }) => (
								// 	<div className="flex gap-2">
								// 		{/* {slots.map((slot, index) => ( */}
								// 			<InputOTPGroup
								// 				key={index}
								// 				className="bg-gray-100 rounded-md"
								// 			>
								// 				<InputOTPSlot
								// 					{...slot}
								// 					className="w-14 h-14 text-center text-xl"
								// 				/>
								// 			</InputOTPGroup>
								// 		{/* ))} */}
								// 	</div>
								// )}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
						</div>

						<Button
							onClick={handleVerify}
							className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white"
						>
							Verify
						</Button>

						<div className="flex justify-between w-full mt-4">
							<Button variant="link" className="text-gray-600">
								Send the code again
							</Button>
							<Button variant="link" className="text-gray-600">
								Change {authMode === "signup" ? "email" : "phone"}
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

// Icons
function GoogleIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10"></circle>
			<path d="M8 12 L16 12 M12 8 L12 16"></path>
		</svg>
	);
}

function FacebookIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
		</svg>
	);
}

function SupportIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
			<path d="M9 18h6"></path>
			<path d="M10 22h4"></path>
		</svg>
	);
}

function ChevronLeftIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m15 18-6-6 6-6"></path>
		</svg>
	);
}

function ChevronRightIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m9 18 6-6-6-6"></path>
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
		</svg>
	);
}
