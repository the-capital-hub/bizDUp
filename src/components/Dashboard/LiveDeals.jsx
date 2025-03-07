import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveDeals = () => {
	// Dummy data for deals
	const deals = [
		{
			id: 1,
			company: "Zeva",
			managedBy: "Manager XYZ",
			totalInvestors: 21,
			amountRaised: "$ 150,000",
			status: "closed",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
		},
		{
			id: 2,
			company: "Zeva",
			managedBy: "Manager XYZ",
			totalInvestors: 21,
			amountRaised: "$ 150,000",
			status: "live",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
		},
	];

	return (
		<div className="w-full">
			<h2 className="text-xl font-semibold mb-4">Live Deals</h2>

			<div className="space-y-4">
				{deals.map((deal) => (
					<Card key={deal.id} className="shadow-sm">
						<div className="flex flex-col md:flex-row">
							{/* Left side - Company info */}
							<div className="p-4 flex items-center space-x-3 border-b md:border-b-0 md:border-r border-gray-200 md:w-52">
								<div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
									<span className="text-blue-600 font-semibold">
										{deal.company.substring(0, 2)}
									</span>
								</div>
								<div>
									<h3 className="font-medium text-sm">{deal.company}</h3>
									<p className="text-xs text-gray-500">{deal.managedBy}</p>
								</div>
							</div>
							{/* Right/Cards */}
							<div className="flex-1">
								<div className="grid grid-cols-4 gap-3 h-full p-4">
									<div className="p-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 bg-indigo-900 text-white font-semibold rounded-lg">
										<p className="text-base">Total investors</p>
										<p className="font-semibold">{deal.totalInvestors}</p>
									</div>

									<div className="p-4 flex flex-col justify-center bg-indigo-900 text-white font-semibold rounded-lg">
										<p className="text-base">Amount raised</p>
										<p className="font-semibold">{deal.amountRaised}</p>
									</div>

									{deal.status === "closed" ? (
										<div className="text-white flex justify-center items-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-center w-full">
											Deal Closed
										</div>
									) : (
										<div className="text-white flex justify-center items-center rounded-lg bg-green-500 hover:bg-green-600 px-4 py-2 text-center w-full">
											Deal is live
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Description */}
						<CardContent className="pt-2 pb-4 text-sm text-gray-500">
							{deal.description}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default LiveDeals;
