import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DonutChart } from "@/components/ui/chart";

export function IndustryDistribution() {
	const data = [
		{ name: "B2B", value: 30, color: "#FF00FF" },
		{ name: "AI", value: 50, color: "#8080FF" },
		{ name: "Arts", value: 10, color: "#00FF00" },
		{ name: "Tech", value: 10, color: "#FFA500" },
		{ name: "ML", value: 10, color: "#FF0000" },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Invested Industry</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex h-[300px] w-full items-center justify-center">
					{/* <DonutChart
						data={data}
						category="value"
						index="name"
						valueFormatter={(value) => `${value}%`}
						colors={data.map((item) => item.color)}
						className="w-full max-w-xs"
					/> */}
				</div>
				<div className="grid grid-cols-2 gap-4 mt-4">
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
			</CardContent>
		</Card>
	);
}
