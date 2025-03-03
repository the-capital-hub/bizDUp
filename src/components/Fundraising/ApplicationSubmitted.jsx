import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";
import Application_Submitted from "../../Images/Application_Selected.png";

export default function ApplicationSubmitted({ onGoBack, onDone }) {
	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm text-center">
			<div className="flex justify-center mb-8">
				{/* <div className="relative">
					<div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
						<div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
							<div className="w-12 h-12 bg-[#1e1b4b] rounded-full flex items-center justify-center">
								<Check className="h-6 w-6 text-white" />
							</div>
						</div>
					</div>
				</div> */}
				<img src={Application_Submitted} alt="" className="w-40" />
			</div>

			<h2 className="text-xl font-semibold text-[#1e1b4b] mb-8">
				Application Submitted
			</h2>

			<div className="space-y-4">
				<Button variant="outline" onClick={onGoBack} className="w-full py-6">
					Go Back to Change Fundraising
				</Button>

				<Button
					onClick={onDone}
					className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
				>
					Done
				</Button>
			</div>
		</div>
	);
}
