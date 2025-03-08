import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PortfolioStats() {
	const stats = [
		{
			title: "Total investments",
			value: "$475M",
			growth: "1.3%",
			icon: "💰",
		},
		{
			title: "No.of investments",
			value: "$800.90M",
			growth: "1.3%",
			icon: "📊",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{stats.map((stat, index) => (
				<Card key={index}>
					<CardContent className="p-6">
						<div className="flex justify-between items-start">
							<div>
								<p className="text-sm text-muted-foreground">{stat.title}</p>
								<h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
								<div className="flex items-center mt-1 text-green-500 text-sm">
									<TrendingUp className="h-4 w-4 mr-1" />
									<span>{stat.growth} Up from past week</span>
								</div>
							</div>
							<div className="text-2xl">{stat.icon}</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
