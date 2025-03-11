import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

export default function InvestorForm({ onNext, onBack, investorType }) {
	const [kycDocument, setKycDocument] = useState(null);
	const [documentName, setDocumentName] = useState("No file chosen");

	const [formData, setFormData] = useState({
		name: "", // This will be fullName or partnerName depending on investorType
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

	const handleDocumentChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setKycDocument(file);
			setDocumentName(file.name);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Combine form data with KYC document
		const investorData = {
			...formData,
			kycDocument,
			investorType,
		};
		onNext(investorData);
	};

	// Determine label for the name field based on investor type
	const getNameLabel = () => {
		switch (investorType) {
			case "Individual":
				return "Full Name";
			case "HUF":
				return "Name of the Partner/Karta";
			case "Corporate":
				return "Name of Partner";
			default:
				return "Name";
		}
	};

	// Determine placeholder for the name field based on investor type
	const getNamePlaceholder = () => {
		switch (investorType) {
			case "Individual":
				return "Enter Full Name";
			case "HUF":
				return "Enter Partner/Karta Name";
			case "Corporate":
				return "Enter Partner Name";
			default:
				return "Enter Name";
		}
	};

	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-3xl mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2 cursor-pointer" onClick={onBack} />
				<div>
					<h2 className="text-xl font-semibold text-[#1e1b4b]">
						{investorType} Investor Form
					</h2>
					<p className="text-sm text-gray-500">Enter all details</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-1">
					<label className="block text-sm font-medium">{getNameLabel()}</label>
					<Input
						name="name"
						placeholder={getNamePlaceholder()}
						value={formData.name}
						onChange={handleChange}
						// required
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
						// required
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
						// required
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
						// required
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
						// required
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
						// required
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
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-2">
					<label className="block text-sm font-medium">KYC Document</label>
					<div className="flex items-center">
						<label htmlFor="kyc-document-upload">
							<Button
								type="button"
								variant="outline"
								className="rounded-md border border-gray-300 px-4 py-2 text-sm"
								onClick={() =>
									document.getElementById("kyc-document-upload").click()
								}
							>
								Choose File
							</Button>
						</label>
						<span className="ml-4 text-sm text-gray-500">{documentName}</span>
						<input
							id="kyc-document-upload"
							type="file"
							accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
							onChange={handleDocumentChange}
							className="hidden"
							// required
						/>
					</div>
					<p className="text-xs text-gray-500 mt-1">
						PDF, DOC, JPG, PNG (max. 10MB)
					</p>
				</div>

				<div className="flex space-x-4 pt-4">
					<Button
						type="button"
						variant="outline"
						onClick={onBack}
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
