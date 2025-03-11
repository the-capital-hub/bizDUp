import React from "react";
import { Users, Monitor, TrendingUp, Search } from "lucide-react";

const StatsCards = () => {
	return (
		<div className="grid grid-cols-3 gap-6">
			<div className="bg-white p-6 rounded-xl shadow-sm">
				<div className="flex justify-between items-start">
					<div>
						<p className="text-gray-500">Total Startups</p>
						<h3 className="text-3xl font-bold mt-2">20</h3>
					</div>
					<div className="p-3 bg-green-100 rounded-lg">
						<Users className="w-6 h-6 text-green-600" />
					</div>
				</div>
				<p className="text-green-500 text-sm mt-4">
					<TrendingUp className="w-4 h-4 inline mr-1" />
					1.3% Up from past week
				</p>
			</div>

			<div className="bg-white p-6 rounded-xl shadow-sm">
				<div className="flex justify-between items-start">
					<div>
						<p className="text-gray-500">Investors</p>
						<h3 className="text-3xl font-bold mt-2">200</h3>
					</div>
					<div className="p-3 bg-blue-100 rounded-lg">
						<Users className="w-6 h-6 text-blue-600" />
					</div>
				</div>
				<p className="text-green-500 text-sm mt-4">
					<TrendingUp className="w-4 h-4 inline mr-1" />
					1.3% Up from past week
				</p>
			</div>

			<div className="bg-white p-6 rounded-xl shadow-sm">
				<div className="flex justify-between items-start">
					<div>
						<p className="text-gray-500">Live Deals</p>
						<h3 className="text-3xl font-bold mt-2">12</h3>
					</div>
					<div className="p-3 bg-purple-100 rounded-lg">
						<Monitor className="w-6 h-6 text-purple-600" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsCards;
