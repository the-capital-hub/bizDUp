import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Fund_Pic from "../../Images/Fund_Application_Pic.png";

export default function ApplicationForm({ onSubmit }) {
	const [formData, setFormData] = useState({
		fullName: "",
		phoneNumber: "",
		donateAmount: "",
		cardHolderName: "",
		cardDetails: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2" />
				<h2 className="text-xl font-semibold text-[#1e1b4b]">
					Fundraising Application
				</h2>
			</div>

			<div className="flex justify-center mb-8">
				{/* <div className="relative">
					<div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center">
						<div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
							<span className="text-white text-2xl">$</span>
						</div>
					</div>
					<div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
						<div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
							<div className="w-6 h-6 bg-purple-200 rounded-full"></div>
						</div>
					</div>
				</div> */}
				<img src={Fund_Pic} alt="Fund_Pic" className="w-40 h-40" />
			</div>

			<form onSubmit={handleSubmit}>
				<div className="space-y-6">
					<div>
						<label
							htmlFor="fullName"
							className="block text-sm font-medium mb-2"
						>
							Full Name
						</label>
						<Input
							id="fullName"
							name="fullName"
							placeholder="Enter Full Name"
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label
							htmlFor="phoneNumber"
							className="block text-sm font-medium mb-2"
						>
							Phone Number
						</label>
						<Input
							id="phoneNumber"
							name="phoneNumber"
							placeholder="Enter Phone Number"
							value={formData.phoneNumber}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label
							htmlFor="donateAmount"
							className="block text-sm font-medium mb-2"
						>
							Donate Amount
						</label>
						<Input
							id="donateAmount"
							name="donateAmount"
							placeholder="Enter Amount"
							value={formData.donateAmount}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label
							htmlFor="cardHolderName"
							className="block text-sm font-medium mb-2"
						>
							Card Holder Name
						</label>
						<Input
							id="cardHolderName"
							name="cardHolderName"
							placeholder="Enter Holder Name"
							value={formData.cardHolderName}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label
							htmlFor="cardDetails"
							className="block text-sm font-medium mb-2"
						>
							Card Details
						</label>
						<Input
							id="cardDetails"
							name="cardDetails"
							placeholder="Enter Card Details"
							value={formData.cardDetails}
							onChange={handleChange}
							required
						/>
					</div>

					<div>
						<label htmlFor="message" className="block text-sm font-medium mb-2">
							Message
						</label>
						<Textarea
							id="message"
							name="message"
							placeholder="Enter Message"
							value={formData.message}
							onChange={handleChange}
							className="min-h-[100px]"
						/>
					</div>

					<Button
						type="submit"
						className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white py-6"
					>
						Apply
					</Button>
				</div>
			</form>
		</div>
	);
}
