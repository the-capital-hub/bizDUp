import { Button } from "@/components/ui/button";
import Under_Review from "../../Images/Under_Review_Pic.png";

export default function UnderReview({ onDone }) {
	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm text-center">
			<div className="flex justify-center mb-8">
				<img src={Under_Review} alt="Hourglass" className="h-40" />
			</div>

			<h2 className="text-xl font-semibold text-[#1e1b4b] mb-8">
				Your Application was Under Review
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
