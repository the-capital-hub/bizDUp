import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Pencil,
	Search,
	MoreHorizontal,
	MessageSquare,
	Paperclip,
	Clock,
} from "lucide-react";

// Dummy data for tasks
const INITIAL_TASKS = {
	backlog: [
		{
			id: "BK001",
			title: "Model Answer",
			labels: ["Design", "Backlog"],
			assignees: [
				{ name: "John", image: "/placeholder.svg?height=32&width=32" },
				{ name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
			],
			priority: "+5",
			comments: 3,
			attachments: 4,
		},
		{
			id: "BK002",
			title: "Create calendar, chat and email app pages",
			labels: ["Development", "Backlog"],
			assignees: [
				{ name: "Mike", image: "/placeholder.svg?height=32&width=32" },
				{ name: "Anna", image: "/placeholder.svg?height=32&width=32" },
			],
			priority: "+5",
			comments: 2,
			attachments: 4,
		},
	],
	todo: [
		{
			id: "TD001",
			title: "Add authentication pages",
			labels: ["ToDo"],
			assignees: [
				{ name: "Lisa", image: "/placeholder.svg?height=32&width=32" },
			],
			priority: "+3",
			comments: 2,
			attachments: 4,
		},
	],
	inProgress: [
		{
			id: "IP001",
			title: "Model Answer",
			labels: ["In Progress"],
			assignees: [
				{ name: "Tom", image: "/placeholder.svg?height=32&width=32" },
				{ name: "Jerry", image: "/placeholder.svg?height=32&width=32" },
			],
			priority: "+3",
			comments: 2,
			attachments: 4,
		},
	],
	done: [
		{
			id: "DN001",
			title: "Product Design, Figma, Sketch (Software), Prototype",
			labels: ["Done"],
			assignees: [
				{ name: "Kate", image: "/placeholder.svg?height=32&width=32" },
			],
			priority: "+3",
			comments: 2,
			attachments: 4,
		},
	],
};

const LABEL_COLORS = {
	Design: "bg-purple-100 text-purple-800",
	Backlog: "bg-yellow-100 text-yellow-800",
	Development: "bg-blue-100 text-blue-800",
	ToDo: "bg-red-100 text-red-800",
	"In Progress": "bg-orange-100 text-orange-800",
	Done: "bg-green-100 text-green-800",
};

export default function TaskManagement() {
	const [tasks, setTasks] = useState(INITIAL_TASKS);
	const [activeView, setActiveView] = useState("board");
	const [activeTab, setActiveTab] = useState("timeline");

	return (
		<div className="p-6">
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<div className="flex items-center gap-2">
					<h1 className="text-2xl font-bold">Task Management</h1>
					<Pencil className="w-5 h-5 text-gray-400" />
				</div>

				<div className="flex items-center gap-4">
					<div className="flex -space-x-2">
						{Array(4)
							.fill(0)
							.map((_, i) => (
								<Avatar key={i} className="border-2 border-white">
									<AvatarImage src={`/placeholder.svg?height=32&width=32`} />
									<AvatarFallback>U{i + 1}</AvatarFallback>
								</Avatar>
							))}
						<div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm">
							+5
						</div>
					</div>
					<Button variant="ghost" size="icon">
						<Clock className="w-5 h-5" />
					</Button>
				</div>
			</div>

			{/* Navigation */}
			<div className="flex justify-between items-center mb-6">
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="w-[400px]"
				>
					<TabsList>
						<TabsTrigger value="timeline">Timeline</TabsTrigger>
						<TabsTrigger value="calendar">Calendar</TabsTrigger>
						<TabsTrigger value="progress">Progress</TabsTrigger>
					</TabsList>
				</Tabs>

				<div className="flex items-center gap-4">
					<div className="flex gap-2">
						<Button
							variant={activeView === "board" ? "secondary" : "ghost"}
							onClick={() => setActiveView("board")}
							className="px-3"
						>
							Board View
						</Button>
						<Button
							variant={activeView === "list" ? "secondary" : "ghost"}
							onClick={() => setActiveView("list")}
							className="px-3"
						>
							List View
						</Button>
					</div>

					<div className="flex items-center gap-2 text-sm text-gray-500">
						<span>Owners</span>
						<span>•</span>
						<span>Capital Hub Team</span>
					</div>

					<div className="relative bg-white rounded-md">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
						<Input className="pl-9" placeholder="Search Tasks" />
					</div>
				</div>
			</div>

			{/* Kanban Board */}
			<div className="grid grid-cols-4 gap-6">
				{Object.entries(tasks).map(([status, statusTasks]) => (
					<div key={status} className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<h3 className="capitalize font-medium">
									{status.replace(/([A-Z])/g, " $1").trim()} Tasks
								</h3>
								<Badge variant="secondary" className="rounded-full">
									{statusTasks.length}
								</Badge>
							</div>
							<Button variant="ghost" size="icon">
								<MoreHorizontal className="w-4 h-4" />
							</Button>
						</div>

						<div className="space-y-4">
							{statusTasks.map((task) => (
								<Card key={task.id} className="border border-dashed">
									<CardHeader className="p-4">
										<CardTitle className="text-sm font-medium">
											{task.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="p-4 pt-0">
										<div className="flex flex-wrap gap-2 mb-3">
											{task.labels.map((label) => (
												<Badge key={label} className={LABEL_COLORS[label]}>
													{label}
												</Badge>
											))}
										</div>

										<div className="flex items-center justify-between">
											<div className="flex -space-x-2">
												{task.assignees.map((assignee, i) => (
													<Avatar key={i} className="border-2 border-white">
														<AvatarImage src={assignee.image} />
														<AvatarFallback>{assignee.name[0]}</AvatarFallback>
													</Avatar>
												))}
												{task.priority && (
													<div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs">
														{task.priority}
													</div>
												)}
											</div>

											<div className="flex items-center gap-3 text-gray-500">
												<div className="flex items-center gap-1">
													<MessageSquare className="w-4 h-4" />
													<span className="text-xs">{task.comments}</span>
												</div>
												<div className="flex items-center gap-1">
													<Paperclip className="w-4 h-4" />
													<span className="text-xs">{task.attachments}</span>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
