import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function AccountDetails({ onNext, onPrevious }) {
	const [kycDocument, setKycDocument] = useState(null);
	const [documentName, setDocumentName] = useState("No file chosen");

	const [formData, setFormData] = useState({
		accountNumber: "",
		bankName: "",
		branchName: "",
		ifscCode: "",
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
		const accountData = {
			...formData,
			kycDocument,
		};
		onNext(accountData);
	};

	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft
					className="h-5 w-5 mr-2 cursor-pointer"
					onClick={onPrevious}
				/>
				<h2 className="text-xl font-semibold text-[#1e1b4b]">
					Account Details
				</h2>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-1">
					<label className="block text-sm font-medium">Account Number</label>
					<Input
						name="accountNumber"
						placeholder="Enter Account Number"
						value={formData.accountNumber}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Name of Bank</label>
					<Input
						name="bankName"
						placeholder="Enter Bank Name"
						value={formData.bankName}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Name of Branch</label>
					<Input
						name="branchName"
						placeholder="Enter Branch Name"
						value={formData.branchName}
						onChange={handleChange}
						// required
						className="rounded-md h-12"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">IFSC Code</label>
					<Input
						name="ifscCode"
						placeholder="Enter IFSC Code"
						value={formData.ifscCode}
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
