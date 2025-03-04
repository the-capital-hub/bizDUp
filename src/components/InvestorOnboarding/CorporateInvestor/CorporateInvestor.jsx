import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

export default function CorporateInvestorForm({ onNext, onBack }) {
	const [formData, setFormData] = useState({
		partnerName: "",
		fullAddress: "",
		nationality: "",
		citizenship: "",
		pan: "",
		email: "",
		phoneNo: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-3xl mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2 cursor-pointer" onClick={onBack} />
				<div>
					<h2 className="text-xl font-semibold text-[#1e1b4b]">
						Corporate investors the form
					</h2>
					<p className="text-sm text-gray-500">Enter the all details</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-1">
					<label className="block text-sm font-medium">
						Name of the Partner/Karta
					</label>
					<Input
						name="partnerName"
						placeholder="Enter the First Name"
						value={formData.partnerName}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Full Address</label>
					<Input
						name="fullAddress"
						placeholder="Enter Full Address"
						value={formData.fullAddress}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Nationality</label>
					<Input
						name="nationality"
						placeholder="Enter Nationality"
						value={formData.nationality}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Citizenship</label>
					<Input
						name="citizenship"
						placeholder="Enter Citizenship"
						value={formData.citizenship}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">PAN</label>
					<Input
						name="pan"
						placeholder="Enter PAN Number"
						value={formData.pan}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Email Id</label>
					<Input
						type="email"
						name="email"
						placeholder="Enter Email Id"
						value={formData.email}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Phone No.</label>
					<Input
						type="tel"
						name="phoneNo"
						placeholder="Enter Phone No."
						value={formData.phoneNo}
						onChange={handleChange}
						required
						className="rounded-md h-12"
					/>
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
