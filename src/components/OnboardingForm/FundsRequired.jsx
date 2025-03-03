import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Upload } from "lucide-react";

const fundRanges = [
	"₹1L - ₹5L",
	"₹5L - ₹10L",
	"₹10L - ₹25L",
	"₹25L - ₹50L",
	"₹50L - ₹1Cr",
	"₹1Cr - ₹5Cr",
	"₹5Cr+",
];

export default function FundsRequired({ onNext }) {
	const [formData, setFormData] = useState({
		fundsRequired: "",
		kycDocument: null,
		complianceDocument: null,
		pitchDeck: null,
	});

	const handleFileChange = (name, file) => {
		setFormData((prev) => ({ ...prev, [name]: file }));
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
						Funds required
					</h2>
					<p className="text-sm text-gray-500">Enter the all details</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-8">
				<div>
					<label className="block text-sm font-medium mb-2">
						Funds Required
					</label>
					<Select
						value={formData.fundsRequired}
						onValueChange={(value) =>
							setFormData((prev) => ({ ...prev, fundsRequired: value }))
						}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select amount range" />
						</SelectTrigger>
						<SelectContent>
							{fundRanges.map((range) => (
								<SelectItem key={range} value={range}>
									{range}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<h3 className="text-lg font-medium mb-4">Documents upload</h3>

					<div className="space-y-6">
						<div>
							<label className="block text-sm font-medium mb-2">KYC</label>
							<div className="flex items-center justify-between p-4 border border-dashed rounded-lg">
								<div className="flex items-center gap-2 text-gray-500">
									<Upload className="h-5 w-5" />
									<span>{formData.kycDocument?.name || "No file chosen"}</span>
								</div>
								<label className="cursor-pointer">
									<span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
										Upload
									</span>
									<input
										type="file"
										className="hidden"
										onChange={(e) =>
											handleFileChange("kycDocument", e.target.files[0])
										}
									/>
								</label>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Compliance
							</label>
							<div className="flex items-center justify-between p-4 border border-dashed rounded-lg">
								<div className="flex items-center gap-2 text-gray-500">
									<Upload className="h-5 w-5" />
									<span>
										{formData.complianceDocument?.name || "No file chosen"}
									</span>
								</div>
								<label className="cursor-pointer">
									<span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
										Upload
									</span>
									<input
										type="file"
										className="hidden"
										onChange={(e) =>
											handleFileChange("complianceDocument", e.target.files[0])
										}
									/>
								</label>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Pitch deck
							</label>
							<div className="flex items-center justify-between p-4 border border-dashed rounded-lg">
								<div className="flex items-center gap-2 text-gray-500">
									<Upload className="h-5 w-5" />
									<span>{formData.pitchDeck?.name || "No file chosen"}</span>
								</div>
								<label className="cursor-pointer">
									<span className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">
										Upload
									</span>
									<input
										type="file"
										className="hidden"
										onChange={(e) =>
											handleFileChange("pitchDeck", e.target.files[0])
										}
									/>
								</label>
							</div>
						</div>
					</div>
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
