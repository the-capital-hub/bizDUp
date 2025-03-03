import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";
import Application_Selected from "../../Images/Application_Selected.png";

export default function Selected({ onDone }) {
	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm text-center">
			<div className="flex justify-center mb-8">
				{/* <div className="relative">
					<div className="w-20 h-20 bg-gray-200 rounded-lg transform rotate-6"></div>
					<div className="absolute inset-0 w-20 h-20 bg-gray-100 rounded-lg transform -rotate-3"></div>
					<div className="absolute inset-0 w-20 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
						<div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
							<Check className="h-5 w-5 text-white" />
						</div>
						<div className="space-y-2">
							<div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
							<div className="w-10 h-1.5 bg-gray-800 rounded-full"></div>
							<div className="w-8 h-1.5 bg-gray-800 rounded-full"></div>
						</div>
					</div>
				</div> */}
				<img src={Application_Selected} alt="" className="w-40" />
			</div>

			<h2 className="text-xl font-semibold text-[#1e1b4b] mb-8">
				Your Fundraising Application was Selected
			</h2>

			<Button
				onClick={onDone}
				className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
			>
				Done
			</Button>
		</div>
	);
}
