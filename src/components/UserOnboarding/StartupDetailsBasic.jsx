import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

export default function StartupBasicDetails({ onNext, onPrevious }) {
	const [pitchDeck, setPitchDeck] = useState(null);
	const [documentName, setDocumentName] = useState("No file chosen");

	const [formData, setFormData] = useState({
		registeredName: "",
		startupName: "",
		linkedinUrl: "",
		website: "",
		description: "",
		location: "",
		sector: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSectorChange = (value) => {
		setFormData((prev) => ({ ...prev, sector: value }));
	};

	const handleDocumentChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setPitchDeck(file);
			setDocumentName(file.name);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Combine form data with pitch deck
		const startupData = {
			...formData,
			pitchDeck,
		};
		onNext(startupData);
	};

	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft
					className="h-5 w-5 mr-2 cursor-pointer"
					onClick={onPrevious}
				/>
				<h2 className="text-xl font-semibold text-[#1e1b4b]">
					Startup Basic Details
				</h2>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-1">
					<label className="block text-sm font-medium">Registered Name</label>
					<Input
						name="registeredName"
						placeholder="Enter Registered Name"
						value={formData.registeredName}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Startup Name</label>
					<Input
						name="startupName"
						placeholder="Enter Startup Name"
						value={formData.startupName}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">LinkedIn URL</label>
					<Input
						type="url"
						name="linkedinUrl"
						placeholder="Enter LinkedIn URL"
						value={formData.linkedinUrl}
						onChange={handleChange}
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Website</label>
					<Input
						type="url"
						name="website"
						placeholder="Enter Website URL"
						value={formData.website}
						onChange={handleChange}
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Description</label>
					<Textarea
						name="description"
						placeholder="Enter a brief description of your startup"
						value={formData.description}
						onChange={handleChange}
						// required
						className="rounded-md min-h-24"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Location</label>
					<Input
						name="location"
						placeholder="Enter Location"
						value={formData.location}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Sector</label>
					<Select
						value={formData.sector}
						onValueChange={handleSectorChange}
						// required
					>
						<SelectTrigger className="rounded-md h-12">
							<SelectValue placeholder="Select your sector" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="technology">Technology</SelectItem>
							<SelectItem value="healthcare">Healthcare</SelectItem>
							<SelectItem value="finance">Finance</SelectItem>
							<SelectItem value="education">Education</SelectItem>
							<SelectItem value="ecommerce">E-Commerce</SelectItem>
							<SelectItem value="manufacturing">Manufacturing</SelectItem>
							<SelectItem value="other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label className="block text-sm font-medium">Pitch Deck</label>
					<div className="flex items-center">
						<label htmlFor="pitch-deck-upload">
							<Button
								type="button"
								variant="outline"
								className="rounded-md border border-gray-300 px-4 py-2 text-sm"
								onClick={() =>
									document.getElementById("pitch-deck-upload").click()
								}
							>
								Choose File
							</Button>
						</label>
						<span className="ml-4 text-sm text-gray-500">{documentName}</span>
						<input
							id="pitch-deck-upload"
							type="file"
							accept=".pdf,.doc,.docx,.ppt,.pptx"
							onChange={handleDocumentChange}
							className="hidden"
							// required
						/>
					</div>
					<p className="text-xs text-gray-500 mt-1">
						PDF, DOC, PPT (max. 10MB)
					</p>
				</div>

				<div className="flex space-x-4 pt-4">
					<Button
						type="button"
						variant="outline"
						onClick={onPrevious}
						className="w-full border-[#1e1b4b] text-[#1e1b4b] py-4 rounded-md"
					>
						Previous
					</Button>
					<Button
						type="submit"
						className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-4 rounded-md"
					>
						Next
					</Button>
				</div>
			</form>
		</div>
	);
}
