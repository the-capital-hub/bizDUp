import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function IndustryDistribution() {
	const data = [
		{ name: "B2B", value: 30, color: "#FF00FF" },
		{ name: "AI", value: 50, color: "#8080FF" },
		{ name: "Arts", value: 10, color: "#00FF00" },
		{ name: "Tech", value: 10, color: "#FFA500" },
		{ name: "ML", value: 10, color: "#FF0000" },
	];

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-white p-2 border rounded shadow">
					<p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
				</div>
			);
		}
		return null;
	};

	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
		name,
		value,
	}) => {
		const RADIAN = Math.PI / 180;
		const radius = innerRadius + (outerRadius - 1.5 * innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
				className="text-xs font-medium"
			>
				{`${name} ${value}%`}
			</text>
		);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Invested Industry</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-[2.5fr_1fr]">
					<div className="h-72 w-full">
						<ResponsiveContainer width="100%" height="100%">
							<PieChart>
								<Pie
									data={data}
									cx="50%"
									cy="50%"
									labelLine={false}
									label={renderCustomizedLabel}
									innerRadius={60}
									outerRadius={120}
									paddingAngle={0}
									dataKey="value"
								>
									{data.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Pie>
								<Tooltip content={<CustomTooltip />} />
							</PieChart>
						</ResponsiveContainer>
					</div>
					<div className="flex flex-col gap-4 p-4 bg-blue-50 rounded-md">
						{data.map((item) => (
							<div key={item.name} className="flex items-center gap-2">
								<div
									className="w-3 h-3 rounded-full"
									style={{ backgroundColor: item.color }}
								/>
								<span className="text-sm">
									{item.name} {item.value}%
								</span>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default IndustryDistribution;
