import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Monitor, TrendingUp, Search } from "lucide-react";
import AddNewStartup from "../../../components/Popup/AddNewStartup";

// Dummy data for startups
const INITIAL_STARTUPS = [
	{
		id: 1,
		company: "Zevo",
		logo: "/placeholder.svg?height=32&width=32",
		founderName: "Jane Cooper",
		phone: "(225) 555-0118",
		email: "jane@microsoft.com",
		tags: ["Innovation"],
		startDate: "15.02.25",
		status: "Active",
	},
	{
		id: 2,
		company: "MooEV",
		logo: "/placeholder.svg?height=32&width=32",
		founderName: "Floyd Miles",
		phone: "(205) 555-0100",
		email: "floyd@yahoo.com",
		tags: ["Gadgets"],
		startDate: "12.02.25",
		status: "Inactive",
	},
];

export default function StartupManagement() {
	const [startups, setStartups] = useState(INITIAL_STARTUPS);
	const [filteredStartups, setFilteredStartups] = useState(INITIAL_STARTUPS);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortField, setSortField] = useState("startDate");
	const [sortOrder, setSortOrder] = useState("desc");
	const [currentPage, setCurrentPage] = useState(1);
	const [showAddStartup, setShowAddStartup] = useState(false);
	const itemsPerPage = 8;

	// Search and filter
	useEffect(() => {
		let results = [...startups];

		if (searchQuery) {
			results = results.filter(
				(startup) =>
					startup.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
					startup.founderName.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Sorting
		results.sort((a, b) => {
			if (sortField === "startDate") {
				return sortOrder === "desc"
					? new Date(b.startDate) - new Date(a.startDate)
					: new Date(a.startDate) - new Date(b.startDate);
			}

			if (sortField === "status") {
				return sortOrder === "desc"
					? b.status.localeCompare(a.status)
					: a.status.localeCompare(b.status);
			}

			if (sortField === "tags") {
				return sortOrder === "desc"
					? b.tags[0].localeCompare(a.tags[0])
					: a.tags[0].localeCompare(b.tags[0]);
			}

			return 0;
		});

		setFilteredStartups(results);
	}, [startups, searchQuery, sortField, sortOrder]);

	// Pagination
	const totalPages = Math.ceil(filteredStartups.length / itemsPerPage);
	const paginatedStartups = filteredStartups.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleAddStartup = (newStartup) => {
		setStartups([...startups, { id: startups.length + 1, ...newStartup }]);
		setShowAddStartup(false);
	};

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Startup Management</h1>
				<Button
					onClick={() => setShowAddStartup(true)}
					className="bg-[#1e1b4b]"
				>
					+ New Customer
				</Button>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-3 gap-6 mb-8">
				<div className="bg-white p-6 rounded-xl shadow-sm">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-gray-500">Total Startups</p>
							<h3 className="text-3xl font-bold mt-2">20</h3>
						</div>
						<div className="p-3 bg-green-100 rounded-lg">
							<Users className="w-6 h-6 text-green-600" />
						</div>
					</div>
					<p className="text-green-500 text-sm mt-4">
						<TrendingUp className="w-4 h-4 inline mr-1" />
						1.3% Up from past week
					</p>
				</div>

				<div className="bg-white p-6 rounded-xl shadow-sm">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-gray-500">Investors</p>
							<h3 className="text-3xl font-bold mt-2">200</h3>
						</div>
						<div className="p-3 bg-blue-100 rounded-lg">
							<Users className="w-6 h-6 text-blue-600" />
						</div>
					</div>
					<p className="text-green-500 text-sm mt-4">
						<TrendingUp className="w-4 h-4 inline mr-1" />
						1.3% Up from past week
					</p>
				</div>

				<div className="bg-white p-6 rounded-xl shadow-sm">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-gray-500">Live Deals</p>
							<h3 className="text-3xl font-bold mt-2">12</h3>
						</div>
						<div className="p-3 bg-purple-100 rounded-lg">
							<Monitor className="w-6 h-6 text-purple-600" />
						</div>
					</div>
				</div>
			</div>

			{/* Filters and Search */}
			<div className="flex justify-between items-center mb-6">
				<div className="flex items-center gap-4">
					<h2 className="font-semibold">All Startups</h2>
					<Badge variant="secondary" className="bg-green-100 text-green-800">
						Active Members
					</Badge>
				</div>

				<div className="flex items-center gap-4">
					<div className="relative bg-white rounded-md">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
						<Input
							placeholder="Search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-9"
						/>
					</div>

					<Select value={sortField} onValueChange={setSortField}>
						<SelectTrigger className="w-[180px] bg-white rounded-md">
							<SelectValue placeholder="Sort by" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="startDate">Start Date</SelectItem>
							<SelectItem value="status">Status</SelectItem>
							<SelectItem value="tags">Tags</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Table */}
			<div className="bg-white rounded-xl shadow-sm mb-6">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Company</TableHead>
							<TableHead>Founder Name</TableHead>
							<TableHead>Phone Number</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Tags</TableHead>
							<TableHead>Start Date</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedStartups.map((startup) => (
							<TableRow key={startup.id}>
								<TableCell>
									<div className="flex items-center gap-2">
										<img
											src={startup.logo || "/placeholder.svg"}
											alt={startup.company}
											className="w-8 h-8 rounded"
										/>
										{startup.company}
									</div>
								</TableCell>
								<TableCell>{startup.founderName}</TableCell>
								<TableCell>{startup.phone}</TableCell>
								<TableCell>{startup.email}</TableCell>
								<TableCell>
									{startup.tags.map((tag) => (
										<Badge
											key={tag}
											variant="secondary"
											className="bg-orange-100 text-orange-800"
										>
											{tag}
										</Badge>
									))}
								</TableCell>
								<TableCell>{startup.startDate}</TableCell>
								<TableCell>
									<Badge
										className={
											startup.status === "Active"
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}
									>
										{startup.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Pagination */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-gray-500">
					Showing data 1 to {itemsPerPage} of {filteredStartups.length} entries
				</p>
				<div className="flex gap-2">
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<Button
							key={page}
							variant={currentPage === page ? "default" : "outline"}
							size="sm"
							onClick={() => setCurrentPage(page)}
							className="bg-[#1e1b4b]"
						>
							{page}
						</Button>
					))}
				</div>
			</div>

			<AddNewStartup
				open={showAddStartup}
				onOpenChange={setShowAddStartup}
				onSubmit={handleAddStartup}
			/>
		</div>
	);
}
