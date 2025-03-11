import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import AddNewLead from "../../../components/Popup/AddLeadPopup";

// Dummy data for leads
const INITIAL_LEADS = [
	{
		id: 1,
		name: "Karthik",
		phone: "756917891",
		email: "Pramod@gmail.com",
		type: "Angel",
		tags: ["Technology"],
		assignedTeam: [
			{ name: "John", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Mike", image: "/placeholder.svg?height=32&width=32" },
		],
		poc: "Prem",
		status: "Pending",
	},
	{
		id: 2,
		name: "Karthik",
		phone: "756917891",
		email: "Pramod@gmail.com",
		type: "HNI",
		tags: ["Technology"],
		assignedTeam: [
			{ name: "John", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Mike", image: "/placeholder.svg?height=32&width=32" },
		],
		poc: "Prem",
		status: "Completed",
	},
	{
		id: 3,
		name: "Karthik",
		phone: "756917891",
		email: "Pramod@gmail.com",
		type: "UHNI",
		tags: ["Technology"],
		assignedTeam: [
			{ name: "John", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Mike", image: "/placeholder.svg?height=32&width=32" },
		],
		poc: "Prem",
		status: "Pending",
	},
	{
		id: 4,
		name: "Karthik",
		phone: "756917891",
		email: "Pramod@gmail.com",
		type: "Angel",
		tags: ["Technology"],
		assignedTeam: [
			{ name: "John", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
			{ name: "Mike", image: "/placeholder.svg?height=32&width=32" },
		],
		poc: "Prem",
		status: "Pending",
	},
];

const STATUS_COLORS = {
	Pending: "bg-blue-100 text-blue-800",
	Completed: "bg-green-100 text-green-800",
	"On Going": "bg-yellow-100 text-yellow-800",
};

export default function LeadManagement() {
	const [leads, setLeads] = useState(INITIAL_LEADS);
	const [showAddLead, setShowAddLead] = useState(false);

	const handleAddLead = (newLead) => {
		setLeads([...leads, { id: leads.length + 1, ...newLead }]);
		setShowAddLead(false);
	};

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Lead Management</h1>
				<Button
					onClick={() => setShowAddLead(true)}
					className="bg-blue-600 hover:bg-blue-700"
				>
					<Plus className="w-4 h-4 mr-2" /> New Lead
				</Button>
			</div>

			<div className="flex gap-3 mb-6">
				<Badge variant="secondary" className="px-3 py-1">
					3 Fresh
				</Badge>
				<Badge variant="secondary" className="px-3 py-1">
					10 Customers
				</Badge>
				<Badge variant="secondary" className="px-3 py-1 text-red-500">
					05 Lost Leads • 0.00%
				</Badge>
			</div>

			{/* Card Layout */}
			<div className="grid grid-cols-1 gap-4 bg-gray-50 p-4 rounded-lg">
				{/* Header Row */}
				<div className="grid grid-cols-8 gap-4 text-sm font-medium text-gray-500 px-4 py-2">
					<div>Name</div>
					<div>Phone Number</div>
					<div>Email</div>
					<div>Type</div>
					<div>Tags</div>
					<div>Assigned Team</div>
					<div>Poc</div>
					<div>Status</div>
				</div>

				{/* Lead Cards */}
				{leads.map((lead) => (
					<div
						key={lead.id}
						className="grid grid-cols-8 gap-4 bg-white p-4 rounded-lg shadow-sm"
					>
						<div className="font-medium text-yellow-500">{lead.name}</div>
						<div className="text-yellow-500">{lead.phone}</div>
						<div className="text-yellow-500 truncate" title={lead.email}>
							{lead.email}
						</div>
						<div className="text-yellow-500">{lead.type}</div>
						<div>
							<div className="flex gap-1">
								{lead.tags.map((tag, i) => (
									<Badge
										key={i}
										variant="secondary"
										className="bg-blue-50 text-blue-700"
									>
										{tag}
									</Badge>
								))}
							</div>
						</div>
						<div>
							<div className="flex -space-x-2">
								{lead.assignedTeam.map((member, i) => (
									<Avatar key={i} className="border-2 border-white">
										<AvatarImage src={member.image} alt={member.name} />
										<AvatarFallback>{member.name[0]}</AvatarFallback>
									</Avatar>
								))}
							</div>
						</div>
						<div className="text-yellow-500">{lead.poc}</div>
						<div>
							<Badge className={STATUS_COLORS[lead.status]}>
								{lead.status}
							</Badge>
						</div>
					</div>
				))}
			</div>

			<AddNewLead
				open={showAddLead}
				onOpenChange={setShowAddLead}
				onSubmit={handleAddLead}
			/>
		</div>
	);
}
