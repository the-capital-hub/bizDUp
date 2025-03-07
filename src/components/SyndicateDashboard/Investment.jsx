import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function DashboardInvested() {
	const investments = [
		{
			id: 1,
			company: "Zevo",
			logo: "/placeholder.svg?height=32&width=32",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			totalInvestors: 21,
			commitments: "$ 150,000",
			issued: "$ 15,000",
			status: "Deal Closed",
			investors: [
				{ name: "John", avatar: "/placeholder.svg?height=32&width=32" },
				{ name: "Sarah", avatar: "/placeholder.svg?height=32&width=32" },
			],
		},
		// Add more investments
	];

	return (
		<div className="space-y-6">
			<h3 className="font-semibold">Your Invested</h3>

			<div className="space-y-6">
				{investments.map((investment) => (
					<Card key={investment.id}>
						<CardContent className="p-6">
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="h-12 w-12">
									<AvatarImage src={investment.logo} />
									<AvatarFallback>{investment.company[0]}</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<h4 className="font-medium">{investment.company}</h4>
									<p className="text-sm text-muted-foreground">
										{investment.description}
									</p>
								</div>
							</div>

							<div className="grid grid-cols-4 gap-4 mb-4">
								<div className="bg-gray-100 p-3 rounded-lg">
									<p className="text-sm text-muted-foreground">
										Total Investors
									</p>
									<p className="font-medium">{investment.totalInvestors}</p>
								</div>
								<div className="bg-gray-100 p-3 rounded-lg">
									<p className="text-sm text-muted-foreground">Commitments</p>
									<p className="font-medium">{investment.commitments}</p>
								</div>
								<div className="bg-gray-100 p-3 rounded-lg">
									<p className="text-sm text-muted-foreground">Issued</p>
									<p className="font-medium">{investment.issued}</p>
								</div>
								<div>
									<Badge className="bg-red-500 text-white">
										{investment.status}
									</Badge>
								</div>
							</div>

							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Syndicate investors
								</p>
								<div className="flex -space-x-2">
									{investment.investors.map((investor, index) => (
										<Avatar key={index} className="border-2 border-white">
											<AvatarImage src={investor.avatar} />
											<AvatarFallback>{investor.name[0]}</AvatarFallback>
										</Avatar>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
