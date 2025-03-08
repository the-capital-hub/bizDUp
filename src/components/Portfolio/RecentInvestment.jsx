import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RecentInvestments() {
	const investments = [
		{
			id: 1,
			name: "Zevo",
			category: "Electrical",
			amount: "$160.00",
			icon: "🔌",
		},
		{
			id: 2,
			name: "Mooev",
			category: "EV",
			amount: "$20.00",
			icon: "🚗",
		},
		{
			id: 3,
			name: "PDRL",
			category: "Drone",
			amount: "$160.00",
			icon: "🛸",
		},
		{
			id: 4,
			name: "Square",
			category: "XL fashions",
			amount: "$20.00",
			icon: "👕",
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Investments</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{investments.map((investment) => (
						<div
							key={investment.id}
							className="flex items-center justify-between"
						>
							<div className="flex items-center space-x-4">
								<div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl">
									{investment.icon}
								</div>
								<div>
									<p className="font-medium">{investment.name}</p>
									<p className="text-sm text-muted-foreground">
										{investment.category}
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="text-right">
									<p className="text-sm text-muted-foreground">
										amount invested
									</p>
									<p className="font-medium">{investment.amount}</p>
								</div>
								<Button
									variant="default"
									className="bg-green-500 hover:bg-green-600 text-white rounded-full"
								>
									Track
								</Button>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
