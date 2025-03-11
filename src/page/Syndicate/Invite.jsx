import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Copy } from "lucide-react";
import Mail_Icon from "../../Images/mail_Icon.png";

export default function Invite() {
	const [requests, setRequests] = useState([
		{ id: 1, name: "Karthik", avatar: "/placeholder.svg?height=40&width=40" },
		{ id: 2, name: "Karthik", avatar: "/placeholder.svg?height=40&width=40" },
		{ id: 3, name: "Karthik", avatar: "/placeholder.svg?height=40&width=40" },
		{ id: 4, name: "Karthik", avatar: "/placeholder.svg?height=40&width=40" },
	]);

	const [inviteLink, setInviteLink] = useState(
		"https://example.com/invite/abc123"
	);
	const [copied, setCopied] = useState(false);

	const handleAccept = (id) => {
		setRequests(requests.filter((request) => request.id !== id));
		// Add your accept logic here
	};

	const handleReject = (id) => {
		setRequests(requests.filter((request) => request.id !== id));
		// Add your reject logic here
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(inviteLink);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleInvite = () => {
		// Add your invite logic here
		alert("Invite sent!");
	};

	return (
		<div className="max-w-2xl mx-auto space-y-6">
			{/* Requests Section */}
			<div className="bg-white rounded-3xl p-6 shadow-sm">
				<h2 className="text-lg font-semibold mb-4">Requests</h2>

				<div className="space-y-3">
					{requests.map((request) => (
						<div
							key={request.id}
							className="flex items-center justify-between p-3 bg-blue-50 rounded-xl"
						>
							<div className="flex items-center gap-3">
								<Avatar>
									<AvatarImage src={request.avatar} alt={request.name} />
									<AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
								</Avatar>
								<span className="text-sm">
									{request.name} wants to join the syndicate
								</span>
							</div>

							<div className="flex gap-2">
								<Button
									size="sm"
									className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-1 h-8"
									onClick={() => handleAccept(request.id)}
								>
									Accept
								</Button>
								<Button
									size="sm"
									variant="destructive"
									className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1 h-8"
									onClick={() => handleReject(request.id)}
								>
									Reject
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Invite People Section */}
			<div className="bg-green-50 rounded-3xl p-6 shadow-sm">
				<h2 className="text-lg font-semibold text-center">
					Invite People
				</h2>

				<div className="flex justify-center mb-6">
					<img src={Mail_Icon} alt="Mail Icon" className="w-96" />
				</div>

				<div className="flex gap-2 mt-4">
					<Input
						value={inviteLink}
						onChange={(e) => setInviteLink(e.target.value)}
						placeholder="Generate Link"
						className="flex-1"
					/>

					<Button
						variant="outline"
						className="bg-white hover:bg-gray-100"
						onClick={handleCopy}
					>
						{copied ? (
							<Check className="w-4 h-4 mr-1" />
						) : (
							<Copy className="w-4 h-4 mr-1" />
						)}
						Copy
					</Button>

					<Button
						className="bg-[#1e1e4b] hover:bg-[#2a2a5e] text-white"
						onClick={handleInvite}
					>
						Invite
					</Button>
				</div>
			</div>
		</div>
	);
}
