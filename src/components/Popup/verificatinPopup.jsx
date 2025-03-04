import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BlueTick from "../../Images/Blue_Tick.png";

const VerificationPopup = ({ open, onOpenChange, onSubmit }) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90dvh]">
				<img
					src={BlueTick}
					className="w-[200px] mx-auto"
					alt="Verification complete"
				/>
				<DialogHeader>
					<DialogTitle className="flex flex-col gap-2 text-center">
						<span className="text-2xl text-indigo-900 font-bold">
							Congratulations!
						</span>
						<span>Your Verification is Completed</span>
					</DialogTitle>
				</DialogHeader>

				<p className="text-center text-base font-semibold text-blue-900">
					You're now ready to start investing with our app!
				</p>

				<Button
					className="w-[200px] mx-auto bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
					onClick={onSubmit}
				>
					Complete Profile Setup
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default VerificationPopup;
