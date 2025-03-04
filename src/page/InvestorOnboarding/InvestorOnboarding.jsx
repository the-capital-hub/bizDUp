import { useState } from "react";
import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";
import Background_img_1 from "../../Images/Background_img_1.png";
import Background_img_2 from "../../Images/Background_img_2.png";
import InvestorType from "../../components/InvestorOnboarding/TypeOfInvestor/InvestorType";
import IndividualInvestor from "../../components/InvestorOnboarding/IndividualInvestor/IndividualInvestor";
import HUFInvestor from "../../components/InvestorOnboarding/HUFInvestor/HUFInvestor";
import CorporateInvestor from "../../components/InvestorOnboarding/CorporateInvestor/CorporateInvestor";
import UserProfile from "../../components/InvestorOnboarding/BasicDetails/UserProfile";
import KYCProcess from "../../components/InvestorOnboarding/KYCProcess/KYCProcess";
import Verification from "../../components/InvestorOnboarding/Verification/Verification";
import InvestorProfileSetup from "../../components/InvestorOnboarding/InvestorProfileSetup/InvestorProfileSetup";
import VerificationPopup from "../../components/Popup/verificatinPopup";

const InvestorOnboarding = () => {
	const [investorType, setInvestorType] = useState("individual");
	const [currentStep, setCurrentStep] = useState(1);
	const [showPopup, setShowPopup] = useState(false);

	const handleDone = () => {
		if (currentStep < 7) {
			if (currentStep === 5) {
				setShowPopup(true);
			} else {
				setCurrentStep(currentStep + 1);
			}
		} else {
			setCurrentStep(1);
		}
	};

	const handlePopupSubmit = () => {
		setShowPopup(false);
		setCurrentStep(currentStep + 1);
	};

	const handleGoBack = () => {
		setCurrentStep(currentStep - 1);
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
					{currentStep === 1 && (
						<InvestorType
							onNext={handleDone}
							selected={investorType}
							select={setInvestorType}
						/>
					)}

					{currentStep === 2 && investorType === "individual" && (
						<IndividualInvestor onNext={handleDone} onBack={handleGoBack} />
					)}
					{currentStep === 2 && investorType === "huf" && (
						<HUFInvestor onNext={handleDone} onBack={handleGoBack} />
					)}
					{currentStep === 2 && investorType === "corporate" && (
						<CorporateInvestor onNext={handleDone} onBack={handleGoBack} />
					)}
					{currentStep === 3 && (
						<UserProfile onNext={handleDone} onBack={handleGoBack} />
					)}
					{currentStep === 4 && (
						<KYCProcess onNext={handleDone} onBack={handleGoBack} />
					)}
					{currentStep === 5 && (
						<Verification onNext={handleDone} onBack={handleGoBack} />
					)}
					{/* Fixed popup implementation */}
					<VerificationPopup
						open={showPopup}
						onOpenChange={setShowPopup}
						onSubmit={handlePopupSubmit}
					/>
					{currentStep === 6 && (
						<InvestorProfileSetup onNext={handleDone} onBack={handleGoBack} />
					)}
				</div>
			</div>
		</div>
	);
};

export default InvestorOnboarding;
