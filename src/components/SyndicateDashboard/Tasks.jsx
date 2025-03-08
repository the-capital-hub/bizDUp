import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Star } from "lucide-react";

export default function DashboardTasks() {
	const tasks = [
		{
			id: 1,
			company: "Zevo",
			logo: "/placeholder.svg?height=32&width=32",
			priority: "HIGH PRIORITY",
			progress: { current: 25, total: 50 },
			tags: ["IOS APP", "UI/UX"],
			team: [
				{ name: "John", avatar: "/placeholder.svg?height=32&width=32" },
				{ name: "Sarah", avatar: "/placeholder.svg?height=32&width=32" },
			],
			dueDate: "20 JUNE",
		},
		// Add more tasks
	];

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">Tasks</h3>
			</div>

			<div className="flex gap-6 overflow-x-auto pb-4">
				{tasks.map((task) => (
					<Card
						key={task.id}
						className="min-w-[300px] rounded-xl border bg-card text-card-foreground shadow"
					>
						<CardContent className="p-6">
							<div className="flex justify-between items-start mb-4">
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage src={task.logo} />
										<AvatarFallback>{task.company[0]}</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="font-medium">{task.company}</h4>
										<p className="text-sm text-muted-foreground">
											{task.company}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<Star className="h-5 w-5 text-yellow-400" />
									<button>
										<MoreVertical className="h-5 w-5" />
									</button>
								</div>
							</div>

							<Badge className="bg-red-100 text-red-600 mb-4">
								{task.priority}
							</Badge>

							<div className="space-y-2 mb-4">
								<div className="flex justify-between text-sm">
									<span>Task Done :</span>
									<span>
										{task.progress.current}/{task.progress.total}
									</span>
								</div>
								<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
									<div
										className="h-full bg-blue-500"
										style={{
											width: `${
												(task.progress.current / task.progress.total) * 100
											}%`,
										}}
									/>
								</div>
							</div>

							<div className="flex gap-2 mb-4">
								{task.tags.map((tag, index) => (
									<Badge key={index} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>

							<div className="flex justify-between items-center">
								<div className="flex -space-x-2">
									{task.team.map((member, index) => (
										<Avatar key={index} className="border-2 border-white">
											<AvatarImage src={member.avatar} />
											<AvatarFallback>{member.name[0]}</AvatarFallback>
										</Avatar>
									))}
								</div>
								<p className="text-sm text-red-500">DUE DATE: {task.dueDate}</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
