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

const bankAccountTypes = [
	"Indian Savings Account",
	"NRO Account",
	"NRE Account",
	"Foreign Account",
];

const paymentModes = ["Cheque", "NEFT", "RTGS", "Foreign Transfer"];

export default function IndividualInvestor({ onNext, onBack }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		mobileNumber: "",
		entityType: "",
		fullAddress: "",
		nationality: "",
		pan: "",
		nameOfBankAccountHolder: "",
		bankAccountNumber: "",
		bankAccountType: "",
		bankName: "",
		bankBranchName: "",
		ModeOfPayment: "",
		ifscCode: "",
		swiftCode: "",
		coi: "",
		cancelCheque: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e) => {
		const { name, files } = e.target;
		setFormData((prev) => ({ ...prev, [name]: files[0] }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2 cursor-pointer" onClick={onBack} />
				<div>
					<h2 className="text-xl font-semibold text-[#1e1b4b]">
						Individual Investors Details
					</h2>
					<p className="text-sm text-gray-500">Enter the all details</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-medium mb-2">First Name</label>
						<Input
							name="firstName"
							placeholder="Enter your First Name"
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-2">Last Name</label>
						<Input
							name="lastName"
							placeholder="Enter your Last Name"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Email</label>
					<Input
						type="email"
						name="email"
						placeholder="Enter your Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Mobile Number
					</label>
					<Input
						type="tel"
						name="mobileNumber"
						placeholder="Enter your Mobile Number"
						value={formData.mobileNumber}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Entity Type</label>
					<Input
						name="entityType"
						placeholder="Enter your Entity Type"
						value={formData.entityType}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Full Address</label>
					<Textarea
						name="fullAddress"
						placeholder="Enter your Full Address"
						value={formData.fullAddress}
						onChange={handleChange}
						className="min-h-[100px]"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Nationality</label>
					<Input
						name="nationality"
						placeholder="Enter your Nationality"
						value={formData.nationality}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">PAN</label>
					<Input
						name="pan"
						placeholder="Enter your PAN Number"
						value={formData.pan}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Name of Bank Account Holder
					</label>
					<Input
						name="nameOfBankAccountHolder"
						placeholder="Enter Bank Account Holder Name"
						value={formData.nameOfBankAccountHolder}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Bank Account Number
					</label>
					<Input
						name="bankAccountNumber"
						placeholder="Enter Bank Account Number"
						value={formData.bankAccountNumber}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Bank Account Type
					</label>
					<Select
						name="bankAccountType"
						value={formData.bankAccountType}
						onValueChange={(value) =>
							handleChange({ target: { name: "bankAccountType", value } })
						}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select Bank Account Type" />
						</SelectTrigger>
						<SelectContent>
							{bankAccountTypes.map((type) => (
								<SelectItem key={type} value={type.toLowerCase()}>
									{type}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Bank Name</label>
					<Input
						name="bankName"
						placeholder="Enter Bank Name"
						value={formData.bankName}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Bank Branch Name
					</label>
					<Input
						name="bankBranchName"
						placeholder="Enter Bank Branch Name"
						value={formData.bankBranchName}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Mode of Payment
					</label>
					<Select
						name="ModeOfPayment"
						value={formData.ModeOfPayment}
						onValueChange={(value) =>
							handleChange({ target: { name: "ModeOfPayment", value } })
						}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select Mode of Payment" />
						</SelectTrigger>
						<SelectContent>
							{paymentModes.map((mode) => (
								<SelectItem key={mode} value={mode.toLowerCase()}>
									{mode}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">IFSC Code</label>
					<Input
						name="ifscCode"
						placeholder="Enter IFSC Code"
						value={formData.ifscCode}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">SWIFT Code</label>
					<Input
						name="swiftCode"
						placeholder="Enter SWIFT Code"
						value={formData.swiftCode}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Certificate of Incorporation (COI)
					</label>
					<Input
						type="file"
						name="coi"
						onChange={handleFileChange}
						className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Cancelled Cheque
					</label>
					<Input
						type="file"
						name="cancelCheque"
						onChange={handleFileChange}
						className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
					/>
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
