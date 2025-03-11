import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function InvestorProfileSetup({ onNext, onBack }) {
	const [fundingPreferences, setFundingPreferences] = useState([
		{ id: 1, name: "Technology & Innovation", selected: true },
		{ id: 2, name: "Healthcare", selected: true },
		{ id: 3, name: "Pro Tech", selected: false },
		{ id: 4, name: "Insurance Tech", selected: false },
		{ id: 5, name: "Food", selected: false },
		{ id: 6, name: "Innovation", selected: true },
		{ id: 7, name: "Agri", selected: false },
		{ id: 8, name: "Digital", selected: true },
		{ id: 9, name: "Vechicles", selected: true },
	]);

	const [industryFocus, setIndustryFocus] = useState([
		{ id: 1, name: "Moto", selected: false },
		{ id: 2, name: "Mobiles", selected: true },
		{ id: 3, name: "Electronics", selected: false },
		{ id: 4, name: "Technology", selected: false },
		{ id: 5, name: "Fashions", selected: false },
		{ id: 6, name: "Innovation", selected: true },
		{ id: 7, name: "Agri", selected: false },
		{ id: 8, name: "Digital", selected: true },
		{ id: 9, name: "Vechicles", selected: true },
	]);

	const togglePreference = (id) => {
		setFundingPreferences(
			fundingPreferences.map((pref) =>
				pref.id === id ? { ...pref, selected: !pref.selected } : pref
			)
		);
	};

	const toggleIndustry = (id) => {
		setIndustryFocus(
			industryFocus.map((ind) =>
				ind.id === id ? { ...ind, selected: !ind.selected } : ind
			)
		);
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-sm">
			<div className="flex items-center mb-4">
				<Button variant="ghost" size="icon" className="mr-2">
					<ArrowLeft className="h-5 w-5" onClick={onBack} />
				</Button>
				<h1 className="text-2xl font-bold text-[#1e1e4b]">
					Investor Profile Setup
				</h1>
			</div>

			<p className="text-gray-600 mb-8">Complete Profile Setup</p>

			<div className="space-y-8">
				{/* Funding Preferences */}
				<div>
					<h2 className="text-lg font-semibold text-[#1e1e4b] mb-4">
						Funding Preferences
					</h2>
					<div className="flex flex-wrap gap-2">
						{fundingPreferences.map((pref) => (
							<Button
								key={pref.id}
								variant={pref.selected ? "default" : "outline"}
								className={`rounded-full px-4 py-2 ${
									pref.selected
										? "bg-[#1e1e4b] text-white"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200"
								}`}
								onClick={() => togglePreference(pref.id)}
							>
								{pref.name}
							</Button>
						))}
					</div>
				</div>

				{/* Past Investment */}
				<div>
					<h2 className="text-lg font-semibold text-[#1e1e4b] mb-4">
						Past Investment
					</h2>

					<div className="space-y-4">
						<div>
							<p className="text-sm text-gray-600 mb-2">Select Sector</p>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select Sector" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="tech">Technology</SelectItem>
									<SelectItem value="healthcare">Healthcare</SelectItem>
									<SelectItem value="finance">Finance</SelectItem>
									<SelectItem value="retail">Retail</SelectItem>
									<SelectItem value="energy">Energy</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<p className="text-sm text-gray-600 mb-2">Cheque Size</p>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Cheque Size" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="small">₹10,000 - ₹50,000</SelectItem>
									<SelectItem value="medium">₹50,000 - ₹2,00,000</SelectItem>
									<SelectItem value="large">₹2,00,000 - ₹10,00,000</SelectItem>
									<SelectItem value="xlarge">Above ₹10,00,000</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				{/* Industry Focus */}
				<div>
					<h2 className="text-lg font-semibold text-[#1e1e4b] mb-4">
						Industry Focus
					</h2>
					<div className="flex flex-wrap gap-2">
						{industryFocus.map((industry) => (
							<Button
								key={industry.id}
								variant={industry.selected ? "default" : "outline"}
								className={`rounded-full px-4 py-2 ${
									industry.selected
										? "bg-[#1e1e4b] text-white"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200"
								}`}
								onClick={() => toggleIndustry(industry.id)}
							>
								{industry.name}
							</Button>
						))}
					</div>
				</div>
			</div>

			<div className="mt-8">
				<Button
					className="w-full py-6 bg-[#1e1e4b] hover:bg-[#2a2a5e] text-white"
					onClick={() => onNext({ fundingPreferences, industryFocus })}
				>
					Done
				</Button>
			</div>
		</div>
	);
}

export default InvestorProfileSetup;
