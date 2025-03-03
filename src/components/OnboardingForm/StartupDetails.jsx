import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function StartupDetails({ onNext }) {
	const [formData, setFormData] = useState({
		startupName: "",
		legalName: "",
		website: "",
		tags: [],
	});

	const [tagInput, setTagInput] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddTag = (e) => {
		e.preventDefault();
		if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
			setFormData((prev) => ({
				...prev,
				tags: [...prev.tags, tagInput.trim()],
			}));
			setTagInput("");
		}
	};

	const handleRemoveTag = (tagToRemove) => {
		setFormData((prev) => ({
			...prev,
			tags: prev.tags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2" />
				<div>
					<h2 className="text-xl font-semibold text-[#1e1b4b]">
						Startup Details
					</h2>
					<p className="text-sm text-gray-500">Enter the all details</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label className="block text-sm font-medium mb-2">Startup name</label>
					<Input
						name="startupName"
						placeholder="Enter the Startup name"
						value={formData.startupName}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Legal Name</label>
					<Input
						name="legalName"
						placeholder="Enter the Legal Name"
						value={formData.legalName}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Website</label>
					<Input
						type="url"
						name="website"
						placeholder="Enter the Website"
						value={formData.website}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Sectors & Tags
					</label>
					<div className="flex gap-2 mb-2">
						{formData.tags.map((tag, index) => (
							<Badge key={index} variant="secondary" className="px-3 py-1">
								{tag}
								<button
									type="button"
									className="ml-2 hover:text-red-500"
									onClick={() => handleRemoveTag(tag)}
								>
									×
								</button>
							</Badge>
						))}
					</div>
					<form onSubmit={handleAddTag} className="flex gap-2">
						<Input
							value={tagInput}
							onChange={(e) => setTagInput(e.target.value)}
							placeholder="Add a tag"
						/>
						<Button type="submit" variant="outline">
							Add
						</Button>
					</form>
				</div>

				<Button
					type="submit"
					className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
				>
					Next
				</Button>
			</form>
		</div>
	);
}
