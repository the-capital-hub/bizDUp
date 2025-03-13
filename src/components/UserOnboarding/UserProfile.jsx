import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Avatar from "../../Images/Avatar.png";

export default function UserProfile({ onNext, onBack, email = "" }) {
	const [profileImage, setProfileImage] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(Avatar);

	const [formData, setFormData] = useState({
		fullName: "",
		mobile: "",
		email: email ? email : "",
		linkedinUrl: "",
		userRole: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleRoleChange = (value) => {
		setFormData((prev) => ({ ...prev, userRole: value }));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setProfileImage(file);
			const imageUrl = URL.createObjectURL(file);
			setPreviewUrl(imageUrl);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Combine form data with profile image
		const userData = {
			...formData,
			profileImage,
		};
		onNext(userData);
	};

	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2 cursor-pointer" onClick={onBack} />
				<h2 className="text-xl font-semibold text-[#1e1b4b]">User Profile</h2>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="flex flex-col items-center justify-center mb-4">
					<div className="w-32 h-32 rounded-full overflow-hidden border border-gray-200 mb-4">
						{previewUrl ? (
							<img
								src={previewUrl}
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						) : (
							<div className="w-full h-full bg-gray-100 flex items-center justify-center">
								<span className="text-gray-400">No Image</span>
							</div>
						)}
					</div>

					<label htmlFor="profile-upload">
						<Button
							type="button"
							variant="outline"
							className="rounded-full border border-gray-300 px-4 py-2 text-sm"
							onClick={() => document.getElementById("profile-upload").click()} // Trigger file input click
						>
							Change Picture
						</Button>
					</label>
					<input
						id="profile-upload"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className="hidden"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Full Name</label>
					<Input
						name="fullName"
						placeholder="Enter Name"
						value={formData.fullName}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Mobile Number</label>
					<Input
						type="tel"
						name="mobile"
						placeholder="Enter Mobile Number"
						value={formData.mobile}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Email</label>
					<Input
						type="email"
						name="email"
						placeholder="Enter Email"
						value={formData.email}
						// disabled={email !== "" ? true : false}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">
						LinkedIn URL (Optional)
					</label>
					<Input
						type="url"
						name="linkedinUrl"
						placeholder="Enter LinkedIn Profile URL"
						value={formData.linkedinUrl}
						onChange={handleChange}
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">User Role</label>
					<Select
						value={formData.userRole}
						onValueChange={handleRoleChange}
						// required
					>
						<SelectTrigger className="rounded-md h-12">
							<SelectValue placeholder="Select your role" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="startup">Startup</SelectItem>
							<SelectItem value="investor">Investor</SelectItem>
							<SelectItem value="startup_manager">Startup Manager</SelectItem>
							<SelectItem value="investor_manager">Investor Manager</SelectItem>
							<SelectItem value="syndicate">Syndicate</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<Button
					type="submit"
					className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-4 rounded-md mt-8"
				>
					Next
				</Button>
			</form>
		</div>
	);
}
