import { Search, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import CreateCommunityPopup from "../components/Popup/CreateCommunityPopup";

export default function MessagesList() {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [communities] = useState([
		{
			id: 1,
			name: "Growth Community",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: 2,
			name: "PDRL Community",
			avatar: "/placeholder.svg?height=40&width=40",
		},
	]);

	const [messages] = useState([
		{
			id: 1,
			user: "Sophia Chen",
			avatar: "/placeholder.svg?height=40&width=40",
			message: "Remember that concert last y...",
			timestamp: "07:23 PM",
			unread: false,
		},
		{
			id: 2,
			user: "Benjamin Knight",
			avatar: "/placeholder.svg?height=40&width=40",
			message: "Just got back from a hiking trip!",
			timestamp: "06:45 PM",
			unread: true,
		},
		{
			id: 3,
			user: "Olivia Foster",
			avatar: "/placeholder.svg?height=40&width=40",
			message: "Excited for the upcoming vac...",
			timestamp: "Yesterday",
			unread: false,
		},
		{
			id: 4,
			user: "Jackson Adams",
			avatar: "/placeholder.svg?height=40&width=40",
			message: "Looking forward to this weekend...",
			timestamp: "Yesterday",
			unread: false,
		},
		{
			id: 5,
			user: "Ethan Sullivan",
			avatar: "/placeholder.svg?height=40&width=40",
			message: "Finished reading a captivating no...",
			timestamp: "Yesterday",
			unread: false,
		},
	]);

	return (
		<>
			<div className="h-screen flex flex-col bg-white rounded-md">
				{/* Header with Search */}
				<div className="p-4 border-b">
					<div className="flex items-center gap-2">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input
								placeholder="Search messages, people"
								className="pl-9 bg-gray-50"
							/>
						</div>
						<Button
							size="icon"
							className="bg-[#1e1e4b] hover:bg-[#2a2a5e] text-white rounded-lg"
							onClick={() => setDialogOpen(true)}
						>
							<Plus className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<ScrollArea className="flex-1">
					{/* Communities Section */}
					<div className="p-4 border-b">
						<div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-4">
							<Users className="h-4 w-4" />
							<span>COMMUNITY</span>
						</div>
						<div className="space-y-3">
							{communities.map((community) => (
								<div
									key={community.id}
									className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
								>
									<Avatar>
										<AvatarImage src={community.avatar} alt={community.name} />
										<AvatarFallback>{community.name[0]}</AvatarFallback>
									</Avatar>
									<span className="font-medium">{community.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Messages Section */}
					<div className="p-4">
						<div className="text-sm font-semibold text-gray-600 mb-4">
							ALL MESSAGES
						</div>
						<div className="space-y-3">
							{messages.map((message) => (
								<div
									key={message.id}
									className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
								>
									<Avatar>
										<AvatarImage src={message.avatar} alt={message.user} />
										<AvatarFallback>{message.user[0]}</AvatarFallback>
									</Avatar>
									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between">
											<span className="font-medium">{message.user}</span>
											<span className="text-xs text-gray-500">
												{message.timestamp}
											</span>
										</div>
										<p className="text-sm text-gray-600 truncate">
											{message.message}
										</p>
									</div>
									{message.unread && (
										<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
									)}
								</div>
							))}
						</div>
					</div>
				</ScrollArea>
			</div>

			<CreateCommunityPopup open={dialogOpen} onOpenChange={setDialogOpen} />
		</>
	);
}
