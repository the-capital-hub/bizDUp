import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const STATUS_OPTIONS = ["New", "Pending", "On Going", "Completed"];
const TEAM_MEMBERS = ["Karthik", "Pramod", "Sarah", "Mike"];

export default function AddNewLead({ open, onOpenChange, onSubmit }) {
	const [formData, setFormData] = useState({
		status: "",
		assigned: "",
		name: "",
		email: "",
		phone: "",
		position: "",
		address: "",
		city: "",
		postalCode: "",
		description: "",
	});

	const handleChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			...formData,
			type: "Angel", // Default values
			tags: ["Technology"],
			assignedTeam: [
				{
					name: formData.assigned,
					image: "/placeholder.svg?height=32&width=32",
				},
			],
			poc: "Prem",
			status: formData.status || "Pending",
		});
		setFormData({}); // Reset form
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px] overflow-y-scroll hide-scrollbar h-[90dvh]">
				<DialogHeader>
					<DialogTitle className="flex justify-between items-center">
						<span className="text-2xl text-indigo-900 font-bold">Add New Lead</span>
					</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label>Status</Label>
							<Select
								value={formData.status}
								onValueChange={(value) => handleChange("status", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Nothing Selected" />
								</SelectTrigger>
								<SelectContent>
									{STATUS_OPTIONS.map((status) => (
										<SelectItem key={status} value={status.toLowerCase()}>
											{status}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<Label>Assigned</Label>
							<Select
								value={formData.assigned}
								onValueChange={(value) => handleChange("assigned", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select Team Member" />
								</SelectTrigger>
								<SelectContent>
									{TEAM_MEMBERS.map((member) => (
										<SelectItem key={member} value={member.toLowerCase()}>
											{member}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="space-y-2">
						<Label>Name</Label>
						<Input
							placeholder="Enter Full Name"
							value={formData.name}
							onChange={(e) => handleChange("name", e.target.value)}
						/>
					</div>

					<div className="space-y-2">
						<Label>Email Address</Label>
						<Input
							type="email"
							placeholder="Enter Email Address"
							value={formData.email}
							onChange={(e) => handleChange("email", e.target.value)}
						/>
					</div>

					<div className="space-y-2">
						<Label>Phone</Label>
						<Input
							type="tel"
							placeholder="Enter Phone number"
							value={formData.phone}
							onChange={(e) => handleChange("phone", e.target.value)}
						/>
					</div>

					<div className="space-y-2">
						<Label>Position</Label>
						<Input
							placeholder="Enter Position"
							value={formData.position}
							onChange={(e) => handleChange("position", e.target.value)}
						/>
					</div>

					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<Label>Address</Label>
							<Input
								placeholder="Enter Address"
								value={formData.address}
								onChange={(e) => handleChange("address", e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<Label>City</Label>
							<Input
								placeholder="Enter City"
								value={formData.city}
								onChange={(e) => handleChange("city", e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<Label>Postal Code</Label>
							<Input
								placeholder="Enter Postal Code"
								value={formData.postalCode}
								onChange={(e) => handleChange("postalCode", e.target.value)}
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label>Description</Label>
						<Textarea
							placeholder="Enter Description"
							value={formData.description}
							onChange={(e) => handleChange("description", e.target.value)}
							className="min-h-[100px]"
						/>
					</div>

					<Button type="submit" className="w-full bg-[#1e1b4b]">
						Add New Lead
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
