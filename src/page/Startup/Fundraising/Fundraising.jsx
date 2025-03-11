import { useState } from "react";
import ApplicationForm from "../../../components/Fundraising/FundraisingApplication";
import ApplicationSubmitted from "../../../components/Fundraising/ApplicationSubmitted";
import UnderReview from "../../../components/Fundraising/ApplicationUnderReview";
import Selected from "../../../components/Fundraising/ApplicationSelected";
import ProgressTracker from "../../../components/Fundraising/ProgressTracker";
import BizDateUpLogo from "../../../Images/BizDateUp_Logo.png";
import Background_img_1 from "../../../Images/Background_img_1.png";
import Background_img_2 from "../../../Images/Background_img_2.png";

export default function FundraisingApp() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		fullName: "",
		phoneNumber: "",
		donateAmount: "",
		cardHolderName: "",
		cardDetails: "",
		message: "",
	});
	console.log(formData);

	const handleFormSubmit = (data) => {
		setFormData(data);
		setCurrentStep(2);
	};

	const handleGoBack = () => {
		setCurrentStep(1);
	};

	const handleDone = () => {
		// In a real app, this might navigate to a dashboard or home page
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		} else {
			// Reset to first step for demo purposes
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

				<ProgressTracker currentStep={currentStep} />

				<div className="max-w-2xl mx-auto mt-8">
					{currentStep === 1 && <ApplicationForm onSubmit={handleFormSubmit} />}

					{currentStep === 2 && (
						<ApplicationSubmitted onGoBack={handleGoBack} onDone={handleDone} />
					)}

					{currentStep === 3 && <UnderReview onDone={handleDone} />}

					{currentStep === 4 && <Selected onDone={handleDone} />}
				</div>
			</div>
		</div>
	);
}
