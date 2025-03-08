import { useState } from "react";
import BizDateUpLogo from "../../../Images/BizDateUp_Logo.png";
import FounderDetails from "../../../components/OnboardingForm/FounderDetails";
import FundRequired from "../../../components/OnboardingForm/FundsRequired";
import StartupDetails from "../../../components/OnboardingForm/StartupDetails";
import Background_img_1 from "../../../Images/Background_img_1.png";
import Background_img_2 from "../../../Images/Background_img_2.png";

const ApplicationFlow = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleDone = (data) => {
		// In a real app, this might navigate to a dashboard or home page
		if (currentStep < 3) {
			console.log(data);
			setCurrentStep(currentStep + 1);
		} else {
			// Reset to first step for demo purposes
			console.log(data);
			setCurrentStep(1);
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
					{currentStep === 1 && <FounderDetails onNext={handleDone} />}

					{currentStep === 2 && <StartupDetails onNext={handleDone} />}

					{currentStep === 3 && <FundRequired onNext={handleDone} />}
				</div>
			</div>
		</div>
	);
};

export default ApplicationFlow;
