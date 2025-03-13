import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import UserPic from "../../Images/UserPic.png";
import Avatar from "../../Images/Avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

export default function WelcomeSection() {
	const user = useSelector(selectUser);
	return (
		<div className="space-y-4">
			<h1 className="text-3xl font-bold">Welcome Back {user?.fullName} </h1>

			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Dashboard</h2>
				<Button variant="outline" size="sm" className="gap-2">
					<Settings className="h-4 w-4" />
					Dashboard Options
				</Button>
			</div>

			<div className="bg-blue-100 rounded-xl p-6">
				<div className="flex items-start gap-4">
					<div className="relative">
						<img src={UserPic} alt="Jaydon Vetrovs" className="rounded-full" />
						<div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
							Task assigned
						</div>
					</div>

					<div className="flex-grow">
						<h3 className="text-xl font-semibold">{user?.fullName}</h3>
						<p className="text-gray-600 mt-1">
							As the Founder at Capital HUB, Man's all about building great
							start-ups from a simple idea.
						</p>
						<div className="flex gap-4 mt-2 text-sm">
							<span>+91 {user?.mobile}</span>
							<span>{user?.email}</span>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-red-50 rounded-xl p-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img src={Avatar} alt="Profile" className="rounded-full w-12 h-12" />
					<span>Please complete your profile</span>
				</div>
				<div className="flex items-center gap-3">
					<span className="bg-red-200 text-red-700 text-sm px-3 py-1 rounded-full">
						Message from admin
					</span>
					<Button className="bg-green-600 hover:bg-green-700">Reply</Button>
				</div>
			</div>
		</div>
	);
}
