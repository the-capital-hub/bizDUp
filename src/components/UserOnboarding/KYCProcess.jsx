import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import KYCIcon from "../../Images/KYC_Icon.png";

const KYCProcess = ({ onNext, onBack }) => {
	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto">
			{/* Back Button */}
			<ArrowLeft className="h-5 w-5 mr-2 cursor-pointer" onClick={onBack} />

			<div className="flex flex-col justify-center items-center gap-4">
				<img src={KYCIcon} alt="KYC Icon" className="w-[400px] h-auto" />

				<h1 className="text-center text-2xl font-bold text-blue-900">
					Prepare for your KYC Process
				</h1>

				<p className="text-gray-600 text-center">Have your Documents Ready!</p>

				{/* Back Button */}
				<Button
					variant="outline"
					onClick={onBack}
					className="w-[230px] mx-auto py-6 border-blue-900 text-blue-900"
				>
					Back Edit Details
				</Button>

				<Button
					onClick={onNext}
					className="w-[230px] mx-auto bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default KYCProcess;
