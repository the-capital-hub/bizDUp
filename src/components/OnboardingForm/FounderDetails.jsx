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

const industries = [
	"Technology",
	"Healthcare",
	"Finance",
	"Education",
	"E-commerce",
	"Manufacturing",
	"Real Estate",
	"Others",
];

const categories = [
	"B2B",
	"B2C",
	"D2C",
	"SaaS",
	"Marketplace",
	"Hardware",
	"AI/ML",
	"Others",
];

export default function FounderDetails({ onNext }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		mobileNumber: "",
		linkedinProfile: "",
		registeredCompanyName: "",
		companyName: "",
		companyLinkedin: "",
		companyWebsite: "",
		previousFundraising: "",
		productDescription: "",
		tractionDescription: "",
		revenueInfo: "",
		teamCapacity: "",
		location: "",
		industry: "",
		category: "",
		referralCode: "",
		companyPitch: null,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormData((prev) => ({ ...prev, companyPitch: file }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft className="h-5 w-5 mr-2" />
				<div>
					<h2 className="text-xl font-semibold text-[#1e1b4b]">
						Founder Details
					</h2>
					<p className="text-sm text-gray-500">Enter the all details</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-medium mb-2">
							First Name of Founder
						</label>
						<Input
							name="firstName"
							placeholder="Enter the First Name"
							value={formData.firstName}
							onChange={handleChange}
							// required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-2">
							Last Name of Founder
						</label>
						<Input
							name="lastName"
							placeholder="Enter the Last Name"
							value={formData.lastName}
							onChange={handleChange}
							// required
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Email</label>
					<Input
						type="email"
						name="email"
						placeholder="Enter the Email"
						value={formData.email}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Mobile Number
					</label>
					<Input
						type="tel"
						name="mobileNumber"
						placeholder="Enter the Mobile Number"
						value={formData.mobileNumber}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Founder's LinkedIn Profile URL
					</label>
					<Input
						type="url"
						name="linkedinProfile"
						placeholder="Enter LinkedIn Profile URL"
						value={formData.linkedinProfile}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Registered Company Name
					</label>
					<Input
						name="registeredCompanyName"
						placeholder="Enter Registered Company Name"
						value={formData.registeredCompanyName}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">Company Name</label>
					<Input
						name="companyName"
						placeholder="Enter Company Name"
						value={formData.companyName}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Company LinkedIn URL
					</label>
					<Input
						type="url"
						name="companyLinkedin"
						placeholder="Enter Company LinkedIn URL"
						value={formData.companyLinkedin}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Company Website
					</label>
					<Input
						type="url"
						name="companyWebsite"
						placeholder="Enter Company Website"
						value={formData.companyWebsite}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Description of Previous Fundraising Round
					</label>
					<Textarea
						name="previousFundraising"
						placeholder="Enter details about previous fundraising"
						value={formData.previousFundraising}
						onChange={handleChange}
						className="min-h-[100px]"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Description of Your Product
					</label>
					<Textarea
						name="productDescription"
						placeholder="Enter product description"
						value={formData.productDescription}
						onChange={handleChange}
						className="min-h-[100px]"
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Description of Your Traction
					</label>
					<Textarea
						name="tractionDescription"
						placeholder="Enter traction details"
						value={formData.tractionDescription}
						onChange={handleChange}
						className="min-h-[100px]"
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Revenue Information
					</label>
					<Input
						name="revenueInfo"
						placeholder="Enter revenue information"
						value={formData.revenueInfo}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Team Capacity
					</label>
					<Input
						name="teamCapacity"
						placeholder="Enter team size"
						value={formData.teamCapacity}
						onChange={handleChange}
						// required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Company Location
					</label>
					<Input
						name="location"
						placeholder="Enter company location"
						value={formData.location}
						onChange={handleChange}
						// required
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-medium mb-2">Industry</label>
						<Select
							name="industry"
							value={formData.industry}
							onValueChange={(value) =>
								handleChange({ target: { name: "industry", value } })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select Industry" />
							</SelectTrigger>
							<SelectContent>
								{industries.map((industry) => (
									<SelectItem key={industry} value={industry.toLowerCase()}>
										{industry}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div>
						<label className="block text-sm font-medium mb-2">Category</label>
						<Select
							name="category"
							value={formData.category}
							onValueChange={(value) =>
								handleChange({ target: { name: "category", value } })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select Category" />
							</SelectTrigger>
							<SelectContent>
								{categories.map((category) => (
									<SelectItem key={category} value={category.toLowerCase()}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Referral Code for "Refer & Earn" Program
					</label>
					<Input
						name="referralCode"
						placeholder="Enter referral code (optional)"
						value={formData.referralCode}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">
						Upload Your Company Pitch
					</label>
					<div className="flex items-center gap-4">
						<Input
							type="file"
							accept=".pdf,.doc,.docx,.ppt,.pptx"
							onChange={handleFileChange}
							className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
						/>
						<span className="text-sm text-gray-500">
							PDF, DOC, PPT (max. 10MB)
						</span>
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
