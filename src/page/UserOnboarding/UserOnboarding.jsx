// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { setUser, setRole } from "../../features/auth/authSlice";
// import { useRegisterMutation } from "../../app/api";
// import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";
// import Background_img_1 from "../../Images/Background_img_1.png";
// import Background_img_2 from "../../Images/Background_img_2.png";

// import UserProfile from "../../components/UserOnboarding/UserProfile";
// import Message from "../../components/UserOnboarding/MessageComponent";

// // Startup Onboarding
// import AccountDetails from "../../components/UserOnboarding/AccountDetails";
// import StartupBasicDetails from "../../components/UserOnboarding/StartupDetailsBasic";
// import StartupAdvancedDetails from "../../components/UserOnboarding/StartupDetailsAdvance";

// // Investor Onboarding
// import InvestorType from "../../components/UserOnboarding/InvestorType";
// import KYCProcess from "../../components/UserOnboarding/KYCProcess";
// import InvestorForm from "../../components/UserOnboarding/InvestorForm";
// import VerificationPopup from "../../components/Popup/verificatinPopup";
// import InvestorProfileSetup from "../../components/UserOnboarding/InvestorProfileSetup";

// const UserOnboarding = () => {
// 	const navigate = useNavigate();
// 	const location = useLocation();
// 	const dispatch = useDispatch();
// 	const [register, { isLoading, isSuccess, isError, error }] =
// 		useRegisterMutation();

// 	// Create an instance of URLSearchParams to parse the query string
// 	const queryParams = new URLSearchParams(location.search);

// 	// Get the email from the query parameters
// 	const email = queryParams.get("email");
// 	// State for tracking current step in the onboarding process
// 	const [currentStep, setCurrentStep] = useState(1);

// 	const [selectedInvestorType, setSelectedInvestorType] = useState(null);
// 	// State to store all user data collected throughout the onboarding process
// 	const [userData, setUserData] = useState({
// 		// User profile data
// 		profile: null,

// 		// Startup specific data
// 		accountDetails: null,
// 		startupBasic: null,
// 		startupAdvanced: null,

// 		// Investor specific data
// 		selectedInvestorType,
// 		kyc: null,
// 		investorFormData: null,
// 		investorProfileSetup: null,
// 	});

// 	// State for verification popup
// 	const [showVerificationPopup, setShowVerificationPopup] = useState(false);
// 	// State to store investor form data temporarily
// 	const [tempInvestorFormData, setTempInvestorFormData] = useState(null);

// 	const handleNavigate = () => {
// 		if (!userData.profile) {
// 			console.error("User profile is not defined.");
// 			return; // or handle the error as needed
// 		}

// 		if (userData.profile.userRole === "startup_manager") {
// 			navigate(`/startup-manager/dashboard`);
// 		} else if (userData.profile.userRole === "investor_manager") {
// 			navigate(`/investor-manager/dashboard`);
// 		} else {
// 			navigate(`/${userData.profile.userRole}/dashboard`);
// 		}
// 	};

// 	// State to track if registration is complete
// 	const [isComplete, setIsComplete] = useState(false);
// 	// State to track if data is submitted to the server
// 	const [isSubmitted, setIsSubmitted] = useState(false);

// 	// Submit data to server based on user role
// 	const submitUserData = async () => {
// 		if (!userData.profile) return;

// 		try {
// 			const userRole = userData.profile.userRole;
// 			let dataToSubmit = {};

// 			// Base profile data common to all roles
// 			dataToSubmit = {
// 				...userData.profile,
// 				email: email || userData.profile.email,
// 			};

// 			// Add role-specific data
// 			if (userRole === "startup") {
// 				dataToSubmit = {
// 					...dataToSubmit,
// 					accountDetails: userData.accountDetails,
// 					startupDetails: {
// 						...userData.startupBasic,
// 						...userData.startupAdvanced,
// 					},
// 				};
// 			} else if (userRole === "investor") {
// 				dataToSubmit = {
// 					...dataToSubmit,
// 					investorType: userData.investorType,
// 					kycDetails: userData.kyc,
// 					investorDetails: userData.investorFormData,
// 					profileSetup: userData.investorProfileSetup,
// 				};
// 			}

// 			// Submit data to server
// 			const response = await register(dataToSubmit).unwrap();

// 			// Set user data in Redux store
// 			dispatch(setUser(response.user));
// 			dispatch(setRole(userRole));

// 			toast.success("Registration completed successfully!");
// 			setIsSubmitted(true);
// 		} catch (err) {
// 			console.error("Registration failed:", err);
// 			toast.error(
// 				err?.data?.message || "Registration failed. Please try again."
// 			);
// 		}
// 	};

// 	// Effect to submit data when registration is complete
// 	useEffect(() => {
// 		if (isComplete && !isSubmitted) {
// 			submitUserData();
// 		}
// 	}, [isComplete]);

// 	// Handle navigation to next step
// 	const handleNext = (data, step) => {
// 		// Store the data from the current step
// 		const updatedUserData = { ...userData };

// 		switch (step) {
// 			case "profile":
// 				updatedUserData.profile = data;

// 				// Check user role to determine the next step
// 				if (data.userRole === "startup") {
// 					setCurrentStep(2); // Go to Account Details
// 				} else if (data.userRole === "investor") {
// 					setCurrentStep(5); // Go to Investor Type
// 				} else {
// 					// For other roles, complete the registration
// 					setIsComplete(true);
// 				}
// 				break;

// 			case "accountDetails":
// 				updatedUserData.accountDetails = data;
// 				setCurrentStep(3); // Go to Startup Basic Details
// 				break;

// 			case "startupBasic":
// 				updatedUserData.startupBasic = data;
// 				setCurrentStep(4); // Go to Startup Advanced Details
// 				break;

// 			case "startupAdvanced":
// 				updatedUserData.startupAdvanced = data;
// 				setIsComplete(true); // Complete registration
// 				break;

// 			case "investorType":
// 				updatedUserData.investorType = data;
// 				setCurrentStep(6); // Go to KYC Process
// 				break;

// 			case "kyc":
// 				updatedUserData.kyc = data;
// 				setCurrentStep(7); // Go to Investor Form
// 				break;

// 			case "investorForm":
// 				// Instead of immediately moving to next step, store data and show popup
// 				setTempInvestorFormData(data);
// 				setShowVerificationPopup(true);
// 				break;

// 			case "investorProfileSetup":
// 				updatedUserData.investorProfileSetup = data;
// 				setIsComplete(true); // Complete registration
// 				break;

// 			default:
// 				break;
// 		}

// 		// Update userData with all collected information
// 		setUserData(updatedUserData);

// 		// For debugging - log all collected data
// 		console.log("Updated User Data:", updatedUserData);
// 	};

// 	// Handle verification popup submission
// 	const handleVerificationSubmit = () => {
// 		// Store the investor form data
// 		const updatedUserData = {
// 			...userData,
// 			investorFormData: tempInvestorFormData,
// 		};
// 		setUserData(updatedUserData);

// 		// Close the popup
// 		setShowVerificationPopup(false);

// 		// Move to the next step (Investor Profile Setup)
// 		setCurrentStep(8);
// 	};

// 	// Handle going back to previous step
// 	const handleBack = () => {
// 		if (currentStep > 1) {
// 			// If current step is in investor flow and going back from first investor step
// 			if (currentStep === 5) {
// 				setCurrentStep(1); // Go back to profile
// 			}
// 			// If current step is in startup flow and going back from first startup step
// 			else if (currentStep === 2) {
// 				setCurrentStep(1); // Go back to profile
// 			}
// 			// All other cases, just go back one step
// 			else {
// 				setCurrentStep(currentStep - 1);
// 			}
// 		}
// 	};

// 	// Render the appropriate component based on current step
// 	const renderStep = () => {
// 		switch (currentStep) {
// 			case 1:
// 				return (
// 					<UserProfile
// 						onNext={(data) => handleNext(data, "profile")}
// 						onBack={handleBack}
// 						email={email}
// 					/>
// 				);

// 			// Startup Flow
// 			case 2:
// 				return (
// 					<AccountDetails
// 						onNext={(data) => handleNext(data, "accountDetails")}
// 						onBack={handleBack}
// 					/>
// 				);
// 			case 3:
// 				return (
// 					<StartupBasicDetails
// 						onNext={(data) => handleNext(data, "startupBasic")}
// 						onBack={handleBack}
// 					/>
// 				);
// 			case 4:
// 				return (
// 					<StartupAdvancedDetails
// 						onNext={(data) => handleNext(data, "startupAdvanced")}
// 						onBack={handleBack}
// 					/>
// 				);

// 			// Investor Flow
// 			case 5:
// 				return (
// 					<InvestorType
// 						onNext={() => {
// 							const data = { investorType: selectedInvestorType };
// 							handleNext(data, "investorType");
// 						}}
// 						onBack={handleBack}
// 						selected={selectedInvestorType}
// 						select={setSelectedInvestorType}
// 					/>
// 				);
// 			case 6:
// 				return (
// 					<KYCProcess
// 						onNext={(data) => handleNext(data, "kyc")}
// 						onBack={handleBack}
// 					/>
// 				);
// 			case 7:
// 				return (
// 					<InvestorForm
// 						onNext={(data) => handleNext(data, "investorForm")}
// 						onBack={handleBack}
// 						investorType={selectedInvestorType}
// 					/>
// 				);

// 			case 8:
// 				return (
// 					<InvestorProfileSetup
// 						onNext={(data) => handleNext(data, "investorProfileSetup")}
// 						onBack={handleBack}
// 					/>
// 				);

// 			default:
// 				return null;
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen bg-[#f5f7fa] relative overflow-hidden">
// 			{/* Background gradient elements */}
// 			<img
// 				src={Background_img_1}
// 				alt="background"
// 				className="absolute top-60 right-0 w-48 h-48"
// 			/>
// 			<img
// 				src={Background_img_2}
// 				alt="background"
// 				className="absolute bottom-40 left-0 w-48 h-48"
// 			/>

// 			<div className="container mx-auto px-4 py-6">
// 				<div className="mb-6">
// 					<img src={BizDateUpLogo} alt="logo" />
// 				</div>

// 				<div className="max-w-2xl mx-auto mt-8">
// 					{isComplete ? (
// 						<Message
// 							message={
// 								isLoading
// 									? "Processing registration..."
// 									: "Registration Completed Successfully!"
// 							}
// 							description={
// 								isLoading
// 									? "Please wait while we set up your account."
// 									: isError
// 									? `Registration error: ${
// 											error?.data?.message || "Please try again."
// 									  }`
// 									: "Your account has been created. You will be redirected to the dashboard shortly."
// 							}
// 							type={isError ? "error" : "success"}
// 							actionText={isLoading ? null : "Go to Dashboard"}
// 							onAction={isLoading ? null : () => handleNavigate()}
// 						/>
// 					) : (
// 						renderStep()
// 					)}
// 				</div>
// 			</div>

// 			{/* Verification Popup */}
// 			<VerificationPopup
// 				open={showVerificationPopup}
// 				onOpenChange={setShowVerificationPopup}
// 				onSubmit={handleVerificationSubmit}
// 			/>
// 		</div>
// 	);
// };

// export default UserOnboarding;

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser, setRole } from "../../features/auth/authSlice";
import { useRegisterMutation } from "../../app/api";
import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";
import Background_img_1 from "../../Images/Background_img_1.png";
import Background_img_2 from "../../Images/Background_img_2.png";

import UserProfile from "../../components/UserOnboarding/UserProfile";
import Message from "../../components/UserOnboarding/MessageComponent";

// Startup Onboarding
import AccountDetails from "../../components/UserOnboarding/AccountDetails";
import StartupBasicDetails from "../../components/UserOnboarding/StartupDetailsBasic";
import StartupAdvancedDetails from "../../components/UserOnboarding/StartupDetailsAdvance";

// Investor Onboarding
import InvestorType from "../../components/UserOnboarding/InvestorType";
import KYCProcess from "../../components/UserOnboarding/KYCProcess";
import InvestorForm from "../../components/UserOnboarding/InvestorForm";
import VerificationPopup from "../../components/Popup/verificatinPopup";
import InvestorProfileSetup from "../../components/UserOnboarding/InvestorProfileSetup";

const UserOnboarding = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const [register, { isLoading, isSuccess, isError, error }] =
		useRegisterMutation();

	// Create an instance of URLSearchParams to parse the query string
	const queryParams = new URLSearchParams(location.search);

	// Get the email from the query parameters
	const email = queryParams.get("email");
	// State for tracking current step in the onboarding process
	const [currentStep, setCurrentStep] = useState(1);

	const [selectedInvestorType, setSelectedInvestorType] = useState(null);
	// State to store all user data collected throughout the onboarding process
	const [userData, setUserData] = useState({
		// User profile data
		profile: null,

		// Startup specific data
		accountDetails: null,
		startupBasic: null,
		startupAdvanced: null,

		// Investor specific data
		investorType: null,
		kyc: null,
		investorFormData: null,
		investorProfileSetup: null,
	});

	// State for verification popup
	const [showVerificationPopup, setShowVerificationPopup] = useState(false);
	// State to store investor form data temporarily
	const [tempInvestorFormData, setTempInvestorFormData] = useState(null);

	const handleNavigate = () => {
		if (!userData.profile) {
			console.error("User profile is not defined.");
			return; // or handle the error as needed
		}

		if (userData.profile.userRole === "startup_manager") {
			navigate(`/startup-manager/dashboard`);
		} else if (userData.profile.userRole === "investor_manager") {
			navigate(`/investor-manager/dashboard`);
		} else {
			navigate(`/${userData.profile.userRole}/dashboard`);
		}
	};

	// State to track if registration is complete
	const [isComplete, setIsComplete] = useState(false);
	// State to track if data is submitted to the server
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Submit data to server based on user role
	const submitUserData = async () => {
		if (!userData.profile) return;

		try {
			const userRole = userData.profile.userRole;
			let dataToSubmit = {
				email: email || userData.profile.email,
				fullName: userData.profile.fullName,
				mobile: userData.profile.mobile,
				profilePicUrl: userData.profile.profilePicUrl || "",
				linkedinUrl: userData.profile.linkedinUrl || "",
				role: userRole,
			};

			// Add KYC document URL if available
			if (userData.kyc && userData.kyc.kycDocumentUrl) {
				dataToSubmit.kycDocumentUrl = userData.kyc.kycDocumentUrl;
			}

			// Add role-specific data
			if (userRole === "startup") {
				// Combine startup details with account details
				dataToSubmit.startupDetails = {
					...userData.startupBasic,
					...userData.startupAdvanced,
					// Add account details fields to startupDetails as expected by backend
					bankName: userData.accountDetails.bankName,
					accountNumber: userData.accountDetails.accountNumber,
					accountType: userData.accountDetails.accountType,
					ifsc: userData.accountDetails.ifsc,
				};
			} else if (userRole === "investor") {
				// Add investor specific fields matching backend expectations
				dataToSubmit = {
					...dataToSubmit,
					fundingPreferences:
						userData.investorFormData?.fundingPreferences || [],
					industryFocus: userData.investorFormData?.industryFocus || [],
					// Add past investment data
					sector: userData.investorFormData?.sector || "",
					chequeSize: userData.investorFormData?.chequeSize || "",
				};
			}

			console.log("Submitting data to server:", dataToSubmit);

			// Submit data to server
			const response = await register(dataToSubmit).unwrap();

			// Set user data in Redux store
			dispatch(setUser(response));
			dispatch(setRole(userRole));

			toast.success("Registration completed successfully!");
			setIsSubmitted(true);
		} catch (err) {
			console.error("Registration failed:", err);
			toast.error(
				err?.data?.message || "Registration failed. Please try again."
			);
		}
	};

	// Effect to submit data when registration is complete
	useEffect(() => {
		if (isComplete && !isSubmitted) {
			submitUserData();
		}
	}, [isComplete]);

	// Handle navigation to next step
	const handleNext = (data, step) => {
		// Store the data from the current step
		const updatedUserData = { ...userData };

		switch (step) {
			case "profile":
				updatedUserData.profile = data;

				// Check user role to determine the next step
				if (data.userRole === "startup") {
					setCurrentStep(2); // Go to Account Details
				} else if (data.userRole === "investor") {
					setCurrentStep(5); // Go to Investor Type
				} else {
					// For other roles, complete the registration
					setIsComplete(true);
				}
				break;

			case "accountDetails":
				updatedUserData.accountDetails = data;
				setCurrentStep(3); // Go to Startup Basic Details
				break;

			case "startupBasic":
				updatedUserData.startupBasic = data;
				setCurrentStep(4); // Go to Startup Advanced Details
				break;

			case "startupAdvanced":
				updatedUserData.startupAdvanced = data;
				setIsComplete(true); // Complete registration
				break;

			case "investorType":
				updatedUserData.investorType = data;
				setCurrentStep(6); // Go to KYC Process
				break;

			case "kyc":
				updatedUserData.kyc = data;
				setCurrentStep(7); // Go to Investor Form
				break;

			case "investorForm":
				// Instead of immediately moving to next step, store data and show popup
				setTempInvestorFormData(data);
				setShowVerificationPopup(true);
				break;

			case "investorProfileSetup":
				updatedUserData.investorProfileSetup = data;
				setIsComplete(true); // Complete registration
				break;

			default:
				break;
		}

		// Update userData with all collected information
		setUserData(updatedUserData);

		// For debugging - log all collected data
		console.log("Updated User Data:", updatedUserData);
	};

	// Handle verification popup submission
	const handleVerificationSubmit = () => {
		// Store the investor form data
		const updatedUserData = {
			...userData,
			investorFormData: tempInvestorFormData,
		};
		setUserData(updatedUserData);

		// Close the popup
		setShowVerificationPopup(false);

		// Move to the next step (Investor Profile Setup)
		setCurrentStep(8);
	};

	// Handle going back to previous step
	const handleBack = () => {
		if (currentStep > 1) {
			// If current step is in investor flow and going back from first investor step
			if (currentStep === 5) {
				setCurrentStep(1); // Go back to profile
			}
			// If current step is in startup flow and going back from first startup step
			else if (currentStep === 2) {
				setCurrentStep(1); // Go back to profile
			}
			// All other cases, just go back one step
			else {
				setCurrentStep(currentStep - 1);
			}
		}
	};

	// Render the appropriate component based on current step
	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<UserProfile
						onNext={(data) => handleNext(data, "profile")}
						onBack={handleBack}
						email={email}
					/>
				);

			// Startup Flow
			case 2:
				return (
					<AccountDetails
						onNext={(data) => handleNext(data, "accountDetails")}
						onBack={handleBack}
					/>
				);
			case 3:
				return (
					<StartupBasicDetails
						onNext={(data) => handleNext(data, "startupBasic")}
						onBack={handleBack}
					/>
				);
			case 4:
				return (
					<StartupAdvancedDetails
						onNext={(data) => handleNext(data, "startupAdvanced")}
						onBack={handleBack}
					/>
				);

			// Investor Flow
			case 5:
				return (
					<InvestorType
						onNext={() => {
							const data = { investorType: selectedInvestorType };
							handleNext(data, "investorType");
						}}
						onBack={handleBack}
						selected={selectedInvestorType}
						select={setSelectedInvestorType}
					/>
				);
			case 6:
				return (
					<KYCProcess
						onNext={(data) => handleNext(data, "kyc")}
						onBack={handleBack}
					/>
				);
			case 7:
				return (
					<InvestorForm
						onNext={(data) => handleNext(data, "investorForm")}
						onBack={handleBack}
						investorType={selectedInvestorType}
					/>
				);

			case 8:
				return (
					<InvestorProfileSetup
						onNext={(data) => handleNext(data, "investorProfileSetup")}
						onBack={handleBack}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-[#f5f7fa] relative overflow-hidden">
			{/* Background gradient elements */}
			<img
				src={Background_img_1}
				alt="background"
				className="absolute top-60 right-0 w-48 h-48"
			/>
			<img
				src={Background_img_2}
				alt="background"
				className="absolute bottom-40 left-0 w-48 h-48"
			/>

			<div className="container mx-auto px-4 py-6">
				<div className="mb-6">
					<img src={BizDateUpLogo} alt="logo" />
				</div>

				<div className="max-w-2xl mx-auto mt-8">
					{isComplete ? (
						<Message
							message={
								isLoading
									? "Processing registration..."
									: "Registration Completed Successfully!"
							}
							description={
								isLoading
									? "Please wait while we set up your account."
									: isError
									? `Registration error: ${
											error?.data?.message || "Please try again."
									  }`
									: "Your account has been created. You will be redirected to the dashboard shortly."
							}
							type={isError ? "error" : "success"}
							actionText={isLoading ? null : "Go to Dashboard"}
							onAction={isLoading ? null : () => handleNavigate()}
						/>
					) : (
						renderStep()
					)}
				</div>
			</div>

			{/* Verification Popup */}
			<VerificationPopup
				open={showVerificationPopup}
				onOpenChange={setShowVerificationPopup}
				onSubmit={handleVerificationSubmit}
			/>
		</div>
	);
};

export default UserOnboarding;
