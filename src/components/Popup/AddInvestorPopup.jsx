import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import UserProfile from "../InvestorOnboarding/BasicDetails/UserProfile";
import Verification from "../InvestorOnboarding/Verification/Verification";
import InvestorProfileSetup from "../InvestorOnboarding/InvestorProfileSetup/InvestorProfileSetup";

const AddInvestorPopup = ({ open, onOpenChange }) => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleDone = () => {
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		} else {
			setCurrentStep(1);
		}
	};

	const handleGoBack = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px] h-[90dvh] overflow-y-scroll hide-scrollbar">
				<DialogHeader>
					<DialogTitle className="flex justify-between items-center">
						<span>Add New Startup</span>
					</DialogTitle>
				</DialogHeader>

				{currentStep === 1 && (
					<UserProfile onNext={handleDone} onBack={handleGoBack} />
				)}

				{currentStep === 2 && (
					<Verification onNext={handleDone} onBack={handleGoBack} />
				)}

				{currentStep === 3 && (
					<InvestorProfileSetup onNext={handleDone} onBack={handleGoBack} />
				)}
			</DialogContent>
		</Dialog>
	);
};

export default AddInvestorPopup;
