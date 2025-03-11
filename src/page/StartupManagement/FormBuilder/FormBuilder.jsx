import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Fund_Pic from "../../../Images/Fund_Application_Pic.png";

const FormBuilder = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		phoneNumber: "",
		email: "",
		location: "",
		interestedIndustry: "",
		ticketSize: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Special handler for Select component since it doesn't provide event objects
	const handleSelectChange = (name, value) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<h1 className="text-2xl font-bold mb-4">Form Builder</h1>
			<div className="bg-white rounded-2xl py-8 px-12 shadow-sm max-w-4xl mx-auto">
				<div className="flex justify-center mb-8">
					<div className="w-40 h-40 flex items-center justify-center">
						<img src={Fund_Pic} alt="" className="w-40" />
					</div>
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
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								Email
							</label>
							<Input
								id="email"
								name="email"
								placeholder="Enter Email Address"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div>
							<label
								htmlFor="location"
								className="block text-sm font-medium mb-2"
							>
								Location
							</label>
							<Input
								id="location"
								name="location"
								placeholder="Enter Location"
								value={formData.location}
								onChange={handleChange}
								required
							/>
						</div>

						<div>
							<label
								htmlFor="interestedIndustry"
								className="block text-sm font-medium mb-2"
							>
								Interested Industry
							</label>
							<Input
								id="interestedIndustry"
								name="interestedIndustry"
								placeholder="Enter Interested Industry"
								value={formData.interestedIndustry}
								onChange={handleChange}
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Ticket Size
							</label>
							<Select
								value={formData.ticketSize}
								onValueChange={(value) =>
									handleSelectChange("ticketSize", value)
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Not Selected" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="5L-10L">5L - 10L</SelectItem>
									<SelectItem value="10L-15L">10L - 15L</SelectItem>
									<SelectItem value="15L-20L">15L - 20L</SelectItem>
									<SelectItem value="20L-25L">20L - 25L</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<Button
							type="submit"
							className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-6"
						>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormBuilder;
