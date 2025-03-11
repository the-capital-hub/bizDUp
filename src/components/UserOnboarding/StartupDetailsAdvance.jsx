import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

export default function StartupAdvancedDetails({ onNext, onPrevious }) {
	const [formData, setFormData] = useState({
		productDescription: "",
		traction: "",
		revenue: "",
		teamSize: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (name, value) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<div className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto">
			<div className="flex items-center mb-6">
				<ArrowLeft
					className="h-5 w-5 mr-2 cursor-pointer"
					onClick={onPrevious}
				/>
				<h2 className="text-xl font-semibold text-[#1e1b4b]">
					Startup Advanced Details
				</h2>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-1">
					<label className="block text-sm font-medium">
						Product Description
					</label>
					<Textarea
						name="productDescription"
						placeholder="Describe your product or service in detail"
						value={formData.productDescription}
						onChange={handleChange}
						// required
						className="rounded-md min-h-32"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Traction</label>
					<Textarea
						name="traction"
						placeholder="Describe your current traction and key metrics"
						value={formData.traction}
						onChange={handleChange}
						// required
						className="rounded-md min-h-24"
					/>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Revenue</label>
					<Select
						value={formData.revenue}
						onValueChange={(value) => handleSelectChange("revenue", value)}
						// required
					>
						<SelectTrigger className="rounded-md h-12">
							<SelectValue placeholder="Select revenue range" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="pre-revenue">Pre-Revenue</SelectItem>
							<SelectItem value="under-10k">Under $10K</SelectItem>
							<SelectItem value="10k-50k">$10K - $50K</SelectItem>
							<SelectItem value="50k-100k">$50K - $100K</SelectItem>
							<SelectItem value="100k-500k">$100K - $500K</SelectItem>
							<SelectItem value="500k-1m">$500K - $1M</SelectItem>
							<SelectItem value="1m-5m">$1M - $5M</SelectItem>
							<SelectItem value="5m-plus">$5M+</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-1">
					<label className="block text-sm font-medium">Team Size</label>
					<Select
						value={formData.teamSize}
						onValueChange={(value) => handleSelectChange("teamSize", value)}
						// required
					>
						<SelectTrigger className="rounded-md h-12">
							<SelectValue placeholder="Select team size" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="solo">Solo Founder</SelectItem>
							<SelectItem value="2-5">2-5 Employees</SelectItem>
							<SelectItem value="6-10">6-10 Employees</SelectItem>
							<SelectItem value="11-25">11-25 Employees</SelectItem>
							<SelectItem value="26-50">26-50 Employees</SelectItem>
							<SelectItem value="51-100">51-100 Employees</SelectItem>
							<SelectItem value="100-plus">100+ Employees</SelectItem>
						</SelectContent>
					</Select>
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
