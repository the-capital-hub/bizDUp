import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function DashboardStats() {
	const stats = [
		{
			title: "Total investments",
			value: "$475M",
			growth: "1.3%",
			icon: "💰",
		},
		{
			title: "No. of Investments",
			value: "$800.90M",
			growth: "1.3%",
			icon: "📊",
		},
	];

	const requests = [
		{
			id: 1,
			name: "Karthik",
			avatar: "/placeholder.svg?height=32&width=32",
		},
		{
			id: 2,
			name: "Karthik",
			avatar: "/placeholder.svg?height=32&width=32",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

			<Card>
				<CardContent className="p-6">
					<div className="flex justify-between items-center mb-4">
						<h3 className="font-semibold">Requests</h3>
						<Button variant="ghost" className="text-sm">
							Show all
						</Button>
					</div>
					<div className="space-y-4">
						{requests.map((request) => (
							<div
								key={request.id}
								className="flex items-center justify-between"
							>
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage src={request.avatar} />
										<AvatarFallback>{request.name[0]}</AvatarFallback>
									</Avatar>
									<span className="text-sm">
										{request.name} want's to join the syndicate
									</span>
								</div>
								<div className="flex gap-2">
									<Button
										size="sm"
										className="bg-green-500 hover:bg-green-600 text-white"
									>
										Accept
									</Button>
									<Button size="sm" variant="destructive">
										Reject
									</Button>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
