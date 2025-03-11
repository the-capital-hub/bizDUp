import { useState } from "react";
import { ArrowLeft, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

export function Verification({ onNext, onBack }) {
	const [aadharFile, setAadharFile] = useState(null);
	const [panFile, setPanFile] = useState(null);
	const [chequeFile, setChequeFile] = useState(null);

	const handleAadharUpload = (e) => {
		if (e.target.files && e.target.files[0]) {
			setAadharFile(e.target.files[0]);
		}
	};

	const handlePanUpload = (e) => {
		if (e.target.files && e.target.files[0]) {
			setPanFile(e.target.files[0]);
		}
	};

	const handleChequeUpload = (e) => {
		if (e.target.files && e.target.files[0]) {
			setChequeFile(e.target.files[0]);
		}
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-sm">
			<div className="flex items-center mb-4">
				<Button variant="ghost" size="icon" className="mr-2">
					<ArrowLeft className="h-5 w-5" onClick={onBack} />
				</Button>
				<h1 className="text-2xl font-bold text-[#1e1e4b]">Verification</h1>
			</div>

			<p className="text-gray-600 mb-8">
				Secure Your Investments with Our Easy KYC Process
			</p>

			<div className="space-y-8">
				{/* Aadhar Card Section */}
				<div>
					<h2 className="text-lg font-semibold text-[#1e1e4b] mb-4">
						Aadhar card details
					</h2>

					<div className="mb-4">
						<Label htmlFor="aadhar-upload" className="block mb-2">
							Upload Aadhar card
						</Label>
						<div className="flex items-center border rounded-lg p-3">
							<div className="flex-1 flex items-center">
								{aadharFile ? (
									<span className="text-sm">{aadharFile.name}</span>
								) : (
									<FileIcon className="h-6 w-6 text-gray-400" />
								)}
							</div>
							<div>
								<input
									id="aadhar-upload"
									type="file"
									className="hidden"
									onChange={handleAadharUpload}
									accept="image/*,.pdf"
								/>
								<Button
									variant="outline"
									className="bg-gray-100 hover:bg-gray-200 text-gray-700"
									onClick={() =>
										document.getElementById("aadhar-upload").click()
									}
								>
									Upload
								</Button>
							</div>
						</div>
					</div>

					<div>
						<Label htmlFor="aadhar-number" className="block mb-2">
							Aadhar Card Number
						</Label>
						<Input
							id="aadhar-number"
							placeholder="Enter Aadhar Card Number"
							className="w-full"
						/>
					</div>
				</div>

				<Separator />

				{/* PAN Card Section */}
				<div>
					<h2 className="text-lg font-semibold text-[#1e1e4b] mb-4">
						PAN card details
					</h2>

					<div className="mb-4">
						<Label htmlFor="pan-upload" className="block mb-2">
							Upload Pan card
						</Label>
						<div className="flex items-center border rounded-lg p-3">
							<div className="flex-1 flex items-center">
								{panFile ? (
									<span className="text-sm">{panFile.name}</span>
								) : (
									<FileIcon className="h-6 w-6 text-gray-400" />
								)}
							</div>
							<div>
								<input
									id="pan-upload"
									type="file"
									className="hidden"
									onChange={handlePanUpload}
									accept="image/*,.pdf"
								/>
								<Button
									variant="outline"
									className="bg-gray-100 hover:bg-gray-200 text-gray-700"
									onClick={() => document.getElementById("pan-upload").click()}
								>
									Upload
								</Button>
							</div>
						</div>
					</div>

					<div>
						<Label htmlFor="pan-number" className="block mb-2">
							Pan Card Number
						</Label>
						<Input
							id="pan-number"
							placeholder="Enter Pan Card Number"
							className="w-full"
						/>
					</div>
				</div>

				<Separator />

				{/* Cheque Details Section */}
				<div>
					<h2 className="text-lg font-semibold text-[#1e1e4b] mb-4">
						Cheque details
					</h2>

					<div className="mb-4">
						<Label htmlFor="cheque-upload" className="block mb-2">
							Upload cancelled Cheque
						</Label>
						<div className="flex items-center border rounded-lg p-3">
							<div className="flex-1 flex items-center">
								{chequeFile ? (
									<span className="text-sm">{chequeFile.name}</span>
								) : (
									<FileIcon className="h-6 w-6 text-gray-400" />
								)}
							</div>
							<div>
								<input
									id="cheque-upload"
									type="file"
									className="hidden"
									onChange={handleChequeUpload}
									accept="image/*,.pdf"
								/>
								<Button
									variant="outline"
									className="bg-gray-100 hover:bg-gray-200 text-gray-700"
									onClick={() =>
										document.getElementById("cheque-upload").click()
									}
								>
									Upload
								</Button>
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<div>
							<Label htmlFor="account-number" className="block mb-2">
								Account Number
							</Label>
							<Input
								id="account-number"
								placeholder="Enter account number"
								className="w-full"
							/>
						</div>

						<div>
							<Label htmlFor="ifsc-code" className="block mb-2">
								IFSC Code
							</Label>
							<Input
								id="ifsc-code"
								placeholder="Enter IFSC Code"
								className="w-full"
							/>
						</div>

						<div>
							<Label htmlFor="account-holder" className="block mb-2">
								Account holder's name
							</Label>
							<Input
								id="account-holder"
								placeholder="Enter Name"
								className="w-full"
							/>
						</div>

						<div>
							<Label htmlFor="bank-name" className="block mb-2">
								Bank name
							</Label>
							<Input
								id="bank-name"
								placeholder="Enter bank name"
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<Button
					className="w-full py-6 bg-[#1e1e4b] hover:bg-[#2a2a5e] text-white"
					onClick={() => onNext()}
				>
					Verify
				</Button>
			</div>
		</div>
	);
}

export default Verification;
