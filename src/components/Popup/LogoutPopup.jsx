import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import LogoutIcon from "../../Images/Logout.png";

export default function LogoutPopup({ isOpen, onClose, onConfirm }) {
	return (
		<AlertDialog open={isOpen} onOpenChange={onClose}>
			<AlertDialogContent className="max-w-md">
				<AlertDialogHeader>
					{/* <div className="mx-auto w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
					</div> */}
					<img src={LogoutIcon} alt="" className="mx-auto w-40 h-40" />
					<AlertDialogTitle className="text-center text-xl">
						Are You Trying Logging Out?
					</AlertDialogTitle>
					<AlertDialogDescription className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="flex gap-3 mt-6">
					<AlertDialogCancel className="flex-1 bg-gray-200 hover:bg-gray-300">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						className="flex-1 bg-red-500 text-white hover:bg-red-600"
						onClick={onConfirm}
					>
						Yes Logout
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
