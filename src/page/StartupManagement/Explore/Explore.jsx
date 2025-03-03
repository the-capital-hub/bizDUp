// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Heart, MapPin, ExternalLink } from "lucide-react";
// import Avator5 from "../../../Images/Avatar_4.png";

// const StartupsPage = () => {
// 	const initialStartups = [
// 		{
// 			id: 1,
// 			name: "ZEVO Technology",
// 			logo: "/api/placeholder/64/64",
// 			company: "ZEVO Technology PVT. LTD",
// 			location: "Bangalore",
// 			tags: ["EV", "B2B", "Technology", "Automobile"],
// 			description:
// 				"ZEVO Technology is a startup that is a provider of energy storage systems and batteries. The company provides products such as fast charging batteries and storage systems of various configurations and capacities for a range of industries.",
// 			fundingRounds: "₹50,00,000",
// 			minimumTicketSize: "₹100,00,000",
// 			currentValuation: "₹100,00,000",
// 			arr: "₹100,00,000",
// 			mrr: "₹100,00,000",
// 			investors: [
// 				{ name: "Rayna Bator", avatar: {Avator5} },
// 				{ name: "Alana Lipshulz", avatar: "/api/placeholder/32/32" },
// 				{ name: "Gustavo Septimus", avatar: "/api/placeholder/32/32" },
// 				{ name: "Alena Torff", avatar: "/api/placeholder/32/32" },
// 				{ name: "Cristofer Veiros", avatar: "/api/placeholder/32/32" },
// 				{ name: "Corey Curtis", avatar: "/api/placeholder/32/32" },
// 			],
// 			sectors: ["Technology", "Digitals", "ML & AL", "Arts"],
// 			links: {
// 				website: "#",
// 				facebook: "#",
// 				twitter: "#",
// 				linkedin: "#",
// 			},
// 			favorited: true,
// 		},
// 		{
// 			id: 2,
// 			name: "NexaCloud Systems",
// 			logo: "/api/placeholder/64/64",
// 			company: "NexaCloud Systems Inc.",
// 			location: "Mumbai",
// 			tags: ["SaaS", "Cloud", "B2B", "Technology"],
// 			description:
// 				"NexaCloud Systems is a cloud infrastructure provider focusing on secure, scalable solutions for enterprise clients. Their platform offers automated deployment, management, and scaling of applications across distributed environments.",
// 			fundingRounds: "₹75,00,000",
// 			minimumTicketSize: "₹150,00,000",
// 			currentValuation: "₹200,00,000",
// 			arr: "₹120,00,000",
// 			mrr: "₹10,00,000",
// 			investors: [
// 				{ name: "Maya Johnson", avatar: "/api/placeholder/32/32" },
// 				{ name: "Vikram Mehta", avatar: "/api/placeholder/32/32" },
// 				{ name: "Sarah Williams", avatar: "/api/placeholder/32/32" },
// 				{ name: "David Chen", avatar: "/api/placeholder/32/32" },
// 			],
// 			sectors: ["Technology", "Cloud Services", "Enterprise", "Security"],
// 			links: {
// 				website: "#",
// 				facebook: "#",
// 				twitter: "#",
// 				linkedin: "#",
// 			},
// 			favorited: false,
// 		},
// 	];

// 	const [startups, setStartups] = useState(initialStartups);
// 	const [searchQuery, setSearchQuery] = useState("");

// 	// Handle search functionality
// 	const handleSearch = (e) => {
// 		const query = e.target.value.toLowerCase();
// 		setSearchQuery(query);

// 		if (query.trim() === "") {
// 			setStartups(initialStartups);
// 		} else {
// 			const filteredStartups = initialStartups.filter(
// 				(startup) =>
// 					startup.name.toLowerCase().includes(query) ||
// 					startup.company.toLowerCase().includes(query) ||
// 					startup.description.toLowerCase().includes(query) ||
// 					startup.tags.some((tag) => tag.toLowerCase().includes(query)) ||
// 					startup.sectors.some((sector) =>
// 						sector.toLowerCase().includes(query)
// 					) ||
// 					startup.location.toLowerCase().includes(query)
// 			);
// 			setStartups(filteredStartups);
// 		}
// 	};

// 	// Toggle favorite status
// 	const toggleFavorite = (id) => {
// 		setStartups(
// 			startups.map((startup) =>
// 				startup.id === id
// 					? { ...startup, favorited: !startup.favorited }
// 					: startup
// 			)
// 		);
// 	};

// 	return (
// 		<div className="">
// 			<h1 className="text-2xl font-bold mb-6">Startups</h1>

// 			{/* Search bar */}
// 			<div className="relative flex items-center mb-6 bg-white rounded-md">
// 				<Input
// 					type="text"
// 					placeholder="Eg. Industry, Company, Ticket Size e.t.c"
// 					className="w-full p-6 pl-12"
// 					value={searchQuery}
// 					onChange={handleSearch}
// 				/>
// 				<Button variant="ghost" className="absolute left-0 h-full">
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						width="24"
// 						height="24"
// 						viewBox="0 0 24 24"
// 						fill="none"
// 						stroke="currentColor"
// 						strokeWidth="2"
// 						strokeLinecap="round"
// 						strokeLinejoin="round"
// 						className="lucide lucide-search"
// 					>
// 						<circle cx="11" cy="11" r="8" />
// 						<path d="m21 21-4.3-4.3" />
// 					</svg>
// 				</Button>
// 			</div>

// 			{/* Startups list */}
// 			<div className="space-y-4">
// 				{startups.map((startup) => (
// 					<Card key={startup.id} className="overflow-hidden">
// 						<CardContent className="p-0">
// 							<div className="bg-white p-6 flex items-start">
// 								<div className="flex-1">
// 									<div className="flex items-center gap-4">
// 										<div className="h-16 w-16 bg-green-50 rounded-md flex items-center justify-center overflow-hidden">
// 											<img
// 												src={startup.logo}
// 												alt={startup.name}
// 												className="h-12 w-12"
// 											/>
// 										</div>

// 										<div>
// 											<div className="flex items-center gap-2">
// 												<h2 className="text-2xl font-bold">{startup.name}</h2>
// 												<span className="bg-red-100 p-2 rounded-full flex justify-center items-center">
// 													<button
// 														onClick={() => toggleFavorite(startup.id)}
// 														className="text-red-500"
// 													>
// 														<Heart
// 															fill={startup.favorited ? "currentColor" : "none"}
// 															size={20}
// 														/>
// 													</button>
// 												</span>
// 											</div>
// 											<p className="text-xs text-gray-500">{startup.company}</p>

// 											<div className="flex items-center gap-4 mt-2">
// 												<div className="flex items-center text-sm">
// 													<MapPin size={16} className="mr-1" />{" "}
// 													{startup.location}
// 												</div>

// 												<div className="flex gap-2">
// 													{startup.tags.map((tag, idx) => (
// 														<Badge
// 															key={idx}
// 															variant="secondary"
// 															className="bg-gray-100 text-gray-800 hover:bg-gray-200"
// 														>
// 															{tag}
// 														</Badge>
// 													))}
// 												</div>
// 											</div>
// 										</div>
// 									</div>

// 									<p className="mt-4 text-sm text-gray-600">
// 										{startup.description}
// 									</p>

// 									<div className="mt-6 grid grid-cols-5 gap-4 bg-blue-50 rounded-md p-5">
// 										<div className="">
// 											<p className="text-xs text-gray-600 mb-2">
// 												Previous Funding Rounds
// 											</p>
// 											<p className="font-semibold text-sm bg-white p-2 rounded-md">
// 												{startup.fundingRounds}
// 											</p>
// 										</div>
// 										<div>
// 											<p className="text-xs text-gray-600 mb-2">
// 												Minimum Ticket Size
// 											</p>
// 											<p className="font-semibold text-sm bg-white p-2 rounded-md">
// 												{startup.minimumTicketSize}
// 											</p>
// 										</div>
// 										<div>
// 											<p className="text-xs text-gray-600 mb-2">
// 												Current valuation
// 											</p>
// 											<p className="font-semibold text-sm bg-white p-2 rounded-md">
// 												{startup.currentValuation}
// 											</p>
// 										</div>
// 										<div>
// 											<p className="text-xs text-gray-600 mb-2">ARR</p>
// 											<p className="font-semibold text-sm bg-white p-2 rounded-md">
// 												{startup.arr}
// 											</p>
// 										</div>
// 										<div>
// 											<p className="text-xs text-gray-600 mb-2">MRR</p>
// 											<p className="font-semibold text-sm bg-white p-2 rounded-md">
// 												{startup.mrr}
// 											</p>
// 										</div>
// 									</div>

// 									<div className="mt-6">
// 										<p className="text-lg text-black mb-2">
// 											Interested Investors
// 										</p>
// 										<div className="flex flex-wrap gap-4 items-center">
// 											{startup.investors.slice(0, 5).map((investor, idx) => (
// 												<div
// 													key={idx}
// 													className="flex items-center gap-2 py-2 px-3 bg-blue-100 rounded-full w-fit"
// 												>
// 													<img
// 														src={Avator5}
// 														alt={investor.name}
// 														className="w-10 h-10 rounded-full border-2 border-white"
// 														title={investor.name}
// 													/>

// 													<span className=""> {investor.name} </span>
// 												</div>
// 											))}
// 											{startup.investors.length > 5 && (
// 												<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs">
// 													+{startup.investors.length - 5}
// 												</div>
// 											)}
// 										</div>
// 									</div>

// 									<div className="mt-6">
// 										<p className="text-lg text-black mb-2">
// 											Sectors & Industry Tags
// 										</p>
// 										<div className="flex flex-wrap gap-3">
// 											{startup.sectors.map((sector, idx) => (
// 												<div
// 													key={idx}
// 													className="text-sm font-normal bg-blue-100 py-3 px-4 rounded-full w-fit flex justify-center items-center text-black"
// 												>
// 													{sector}
// 												</div>
// 											))}
// 										</div>
// 									</div>

// 									<div className="mt-6">
// 										<p className="text-lg text-black mb-2">Public Link</p>
// 										<div className="flex gap-3">
// 											<a
// 												href={startup.links.website}
// 												className="p-3 bg-green-600 text-white rounded-full flex items-center"
// 											>
// 												<ExternalLink size={16} className="mr-1" /> Website
// 											</a>
// 											<a
// 												href={startup.links.facebook}
// 												className="p-3 bg-blue-600 text-white rounded-full flex items-center"
// 											>
// 												<svg
// 													xmlns="http://www.w3.org/2000/svg"
// 													width="16"
// 													height="16"
// 													viewBox="0 0 24 24"
// 													fill="none"
// 													stroke="currentColor"
// 													strokeWidth="2"
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													className="mr-1"
// 												>
// 													<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
// 												</svg>
// 												Facebook
// 											</a>
// 											<a
// 												href={startup.links.twitter}
// 												className="p-3 bg-blue-400 text-white rounded-full flex items-center"
// 											>
// 												<svg
// 													xmlns="http://www.w3.org/2000/svg"
// 													width="16"
// 													height="16"
// 													viewBox="0 0 24 24"
// 													fill="none"
// 													stroke="currentColor"
// 													strokeWidth="2"
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													className="mr-1"
// 												>
// 													<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
// 												</svg>
// 												Twitter
// 											</a>
// 											<a
// 												href={startup.links.linkedin}
// 												className="p-3 bg-blue-700 text-white rounded-full flex items-center"
// 											>
// 												<svg
// 													xmlns="http://www.w3.org/2000/svg"
// 													width="16"
// 													height="16"
// 													viewBox="0 0 24 24"
// 													fill="none"
// 													stroke="currentColor"
// 													strokeWidth="2"
// 													strokeLinecap="round"
// 													strokeLinejoin="round"
// 													className="mr-1"
// 												>
// 													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
// 													<rect width="4" height="12" x="2" y="9" />
// 													<circle cx="4" cy="4" r="2" />
// 												</svg>
// 												LinkedIn
// 											</a>
// 										</div>
// 									</div>

// 									<div className="mt-6 flex justify-center">
// 										<Button variant="outline" className="rounded-full">
// 											Know More
// 										</Button>
// 									</div>
// 								</div>

// 								<div className="ml-4">
// 									<Button
// 										variant="default"
// 										className="bg-yellow-500 hover:bg-yellow-600 rounded-full"
// 									>
// 										Track
// 									</Button>
// 								</div>
// 							</div>
// 						</CardContent>
// 					</Card>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default StartupsPage;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, ExternalLink } from "lucide-react";
import Avator5 from "../../../Images/Avatar_4.png";
import StartupProfilePopup from "../../../components/Popup/StartupProfile";

const StartupsPage = () => {
	const initialStartups = [
		{
			id: 1,
			name: "ZEVO Technology",
			logo: "/api/placeholder/64/64",
			company: "ZEVO Technology PVT. LTD",
			location: "Bangalore",
			tags: ["EV", "B2B", "Technology", "Automobile"],
			description:
				"ZEVO Technology is a startup that is a provider of energy storage systems and batteries. The company provides products such as fast charging batteries and storage systems of various configurations and capacities for a range of industries.",
			fundingRounds: "₹50,00,000",
			minimumTicketSize: "₹100,00,000",
			currentValuation: "₹100,00,000",
			arr: "₹100,00,000",
			mrr: "₹100,00,000",
			investors: [
				{ name: "Rayna Bator", avatar: Avator5 },
				{ name: "Alana Lipshulz", avatar: "/api/placeholder/32/32" },
				{ name: "Gustavo Septimus", avatar: "/api/placeholder/32/32" },
				{ name: "Alena Torff", avatar: "/api/placeholder/32/32" },
				{ name: "Cristofer Veiros", avatar: "/api/placeholder/32/32" },
				{ name: "Corey Curtis", avatar: "/api/placeholder/32/32" },
			],
			sectors: ["Technology", "Digitals", "ML & AL", "Arts"],
			links: {
				website: "#",
				facebook: "#",
				twitter: "#",
				linkedin: "#",
			},
			favorited: true,
			team: [
				{
					name: "Nolan Levin",
					position: "CEO",
					avatar: "/placeholder.svg?height=60&width=60",
					description:
						"Lorem ipsum dolor sit amet that is a provider of energy storage systems and batteries.",
				},
				{
					name: "Emery Lubin",
					position: "CTO",
					avatar: "/placeholder.svg?height=60&width=60",
					description:
						"Lorem ipsum dolor sit amet that is a provider of energy storage systems and batteries.",
				},
				{
					name: "Craig Pixel Madsen",
					position: "COO",
					avatar: "/placeholder.svg?height=60&width=60",
					description:
						"Lorem ipsum dolor sit amet that is a provider of energy storage systems and batteries.",
				},
			],
			documents: [
				{ name: "KYC", icon: "FileText", url: "#" },
				{ name: "Market Report", icon: "FileText", url: "#" },
				{ name: "Compliance", icon: "FileText", url: "#" },
			],
			events: [
				{
					name: "Investor Webinar",
					presenter: "Alena Turf",
					date: "25-06-2024",
					image: "/placeholder.svg?height=150&width=250",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
				},
				{
					name: "CEO Presentation",
					presenter: "David Kim",
					date: "15-09-2024",
					image: "/placeholder.svg?height=150&width=250",
					description:
						"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
				},
				{
					name: "Product Launch Event",
					presenter: "Emily Chen",
					date: "10-12-2024",
					image: "/placeholder.svg?height=150&width=250",
					description:
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
				},
			],
		},
		{
			id: 2,
			name: "NexaCloud Systems",
			logo: "/api/placeholder/64/64",
			company: "NexaCloud Systems Inc.",
			location: "Mumbai",
			tags: ["SaaS", "Cloud", "B2B", "Technology"],
			description:
				"NexaCloud Systems is a cloud infrastructure provider focusing on secure, scalable solutions for enterprise clients. Their platform offers automated deployment, management, and scaling of applications across distributed environments.",
			fundingRounds: "₹75,00,000",
			minimumTicketSize: "₹150,00,000",
			currentValuation: "₹200,00,000",
			arr: "₹120,00,000",
			mrr: "₹10,00,000",
			investors: [
				{ name: "Maya Johnson", avatar: "/api/placeholder/32/32" },
				{ name: "Vikram Mehta", avatar: "/api/placeholder/32/32" },
				{ name: "Sarah Williams", avatar: "/api/placeholder/32/32" },
				{ name: "David Chen", avatar: "/api/placeholder/32/32" },
			],
			sectors: ["Technology", "Cloud Services", "Enterprise", "Security"],
			links: {
				website: "#",
				facebook: "#",
				twitter: "#",
				linkedin: "#",
			},
			favorited: false,
			team: [
				{
					name: "Maya Johnson",
					position: "CEO",
					avatar: "/placeholder.svg?height=60&width=60",
					description:
						"Expert in cloud infrastructure with over 15 years of experience in the technology sector.",
				},
				{
					name: "Vikram Mehta",
					position: "CTO",
					avatar: "/placeholder.svg?height=60&width=60",
					description:
						"Former Google engineer specializing in distributed systems and cloud architecture.",
				},
				{
					name: "Sarah Williams",
					position: "COO",
					avatar: "/placeholder.svg?height=60&width=60",
					description:
						"Operations expert with background in scaling SaaS businesses globally.",
				},
			],
			documents: [
				{ name: "KYC", icon: "FileText", url: "#" },
				{ name: "Market Report", icon: "FileText", url: "#" },
				{ name: "Compliance", icon: "FileText", url: "#" },
			],
			events: [
				{
					name: "Cloud Summit",
					presenter: "Maya Johnson",
					date: "15-07-2024",
					image: "/placeholder.svg?height=150&width=250",
					description:
						"Join us for an in-depth look at the future of cloud infrastructure and security",
				},
				{
					name: "Enterprise Solutions Webinar",
					presenter: "Vikram Mehta",
					date: "22-08-2024",
					image: "/placeholder.svg?height=150&width=250",
					description:
						"Learn how our solutions can transform your enterprise IT infrastructure",
				},
				{
					name: "Partner Program Launch",
					presenter: "Sarah Williams",
					date: "05-11-2024",
					image: "/placeholder.svg?height=150&width=250",
					description:
						"Discover the benefits of becoming a NexaCloud Systems partner",
				},
			],
		},
	];

	const [startups, setStartups] = useState(initialStartups);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStartup, setSelectedStartup] = useState(null);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	// Handle search functionality
	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase();
		setSearchQuery(query);

		if (query.trim() === "") {
			setStartups(initialStartups);
		} else {
			const filteredStartups = initialStartups.filter(
				(startup) =>
					startup.name.toLowerCase().includes(query) ||
					startup.company.toLowerCase().includes(query) ||
					startup.description.toLowerCase().includes(query) ||
					startup.tags.some((tag) => tag.toLowerCase().includes(query)) ||
					startup.sectors.some((sector) =>
						sector.toLowerCase().includes(query)
					) ||
					startup.location.toLowerCase().includes(query)
			);
			setStartups(filteredStartups);
		}
	};

	// Toggle favorite status
	const toggleFavorite = (id) => {
		setStartups(
			startups.map((startup) =>
				startup.id === id
					? { ...startup, favorited: !startup.favorited }
					: startup
			)
		);
	};

	// Open startup profile popup
	const openStartupProfile = (startup) => {
		setSelectedStartup(startup);
		setIsProfileOpen(true);
	};

	// Close startup profile popup
	const closeStartupProfile = () => {
		setIsProfileOpen(false);
	};

	return (
		<div className="">
			<h1 className="text-2xl font-bold mb-6">Startups</h1>

			{/* Search bar */}
			<div className="relative flex items-center mb-6 bg-white rounded-md">
				<Input
					type="text"
					placeholder="Eg. Industry, Company, Ticket Size e.t.c"
					className="w-full p-6 pl-12"
					value={searchQuery}
					onChange={handleSearch}
				/>
				<Button variant="ghost" className="absolute left-0 h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-search"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</Button>
			</div>

			{/* Startups list */}
			<div className="space-y-4">
				{startups.map((startup) => (
					<Card key={startup.id} className="overflow-hidden">
						<CardContent className="p-0">
							<div className="bg-white p-6 flex items-start">
								<div className="flex-1">
									<div className="flex items-center gap-4">
										<div className="h-16 w-16 bg-green-50 rounded-md flex items-center justify-center overflow-hidden">
											<img
												src={startup.logo || "/placeholder.svg"}
												alt={startup.name}
												className="h-12 w-12"
											/>
										</div>

										<div>
											<div className="flex items-center gap-2">
												<h2 className="text-2xl font-bold">{startup.name}</h2>
												<span className="bg-red-100 p-2 rounded-full flex justify-center items-center">
													<button
														onClick={() => toggleFavorite(startup.id)}
														className="text-red-500"
													>
														<Heart
															fill={startup.favorited ? "currentColor" : "none"}
															size={20}
														/>
													</button>
												</span>
											</div>
											<p className="text-xs text-gray-500">{startup.company}</p>

											<div className="flex items-center gap-4 mt-2">
												<div className="flex items-center text-sm">
													<MapPin size={16} className="mr-1" />{" "}
													{startup.location}
												</div>

												<div className="flex gap-2">
													{startup.tags.map((tag, idx) => (
														<Badge
															key={idx}
															variant="secondary"
															className="bg-gray-100 text-gray-800 hover:bg-gray-200"
														>
															{tag}
														</Badge>
													))}
												</div>
											</div>
										</div>
									</div>

									<p className="mt-4 text-sm text-gray-600">
										{startup.description}
									</p>

									<div className="mt-6 grid grid-cols-5 gap-4 bg-blue-50 rounded-md p-5">
										<div className="">
											<p className="text-xs text-gray-600 mb-2">
												Previous Funding Rounds
											</p>
											<p className="font-semibold text-sm bg-white p-2 rounded-md">
												{startup.fundingRounds}
											</p>
										</div>
										<div>
											<p className="text-xs text-gray-600 mb-2">
												Minimum Ticket Size
											</p>
											<p className="font-semibold text-sm bg-white p-2 rounded-md">
												{startup.minimumTicketSize}
											</p>
										</div>
										<div>
											<p className="text-xs text-gray-600 mb-2">
												Current valuation
											</p>
											<p className="font-semibold text-sm bg-white p-2 rounded-md">
												{startup.currentValuation}
											</p>
										</div>
										<div>
											<p className="text-xs text-gray-600 mb-2">ARR</p>
											<p className="font-semibold text-sm bg-white p-2 rounded-md">
												{startup.arr}
											</p>
										</div>
										<div>
											<p className="text-xs text-gray-600 mb-2">MRR</p>
											<p className="font-semibold text-sm bg-white p-2 rounded-md">
												{startup.mrr}
											</p>
										</div>
									</div>

									<div className="mt-6">
										<p className="text-lg text-black mb-2">
											Interested Investors
										</p>
										<div className="flex flex-wrap gap-4 items-center">
											{startup.investors.slice(0, 5).map((investor, idx) => (
												<div
													key={idx}
													className="flex items-center gap-2 py-2 px-3 bg-blue-100 rounded-full w-fit"
												>
													<img
														src={Avator5 || "/placeholder.svg"}
														alt={investor.name}
														className="w-10 h-10 rounded-full border-2 border-white"
														title={investor.name}
													/>

													<span className=""> {investor.name} </span>
												</div>
											))}
											{startup.investors.length > 5 && (
												<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs">
													+{startup.investors.length - 5}
												</div>
											)}
										</div>
									</div>

									<div className="mt-6">
										<p className="text-lg text-black mb-2">
											Sectors & Industry Tags
										</p>
										<div className="flex flex-wrap gap-3">
											{startup.sectors.map((sector, idx) => (
												<div
													key={idx}
													className="text-sm font-normal bg-blue-100 py-3 px-4 rounded-full w-fit flex justify-center items-center text-black"
												>
													{sector}
												</div>
											))}
										</div>
									</div>

									<div className="mt-6">
										<p className="text-lg text-black mb-2">Public Link</p>
										<div className="flex gap-3">
											<a
												href={startup.links.website}
												className="p-3 bg-green-600 text-white rounded-full flex items-center"
											>
												<ExternalLink size={16} className="mr-1" /> Website
											</a>
											<a
												href={startup.links.facebook}
												className="p-3 bg-blue-600 text-white rounded-full flex items-center"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="mr-1"
												>
													<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
												</svg>
												Facebook
											</a>
											<a
												href={startup.links.twitter}
												className="p-3 bg-blue-400 text-white rounded-full flex items-center"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="mr-1"
												>
													<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
												</svg>
												Twitter
											</a>
											<a
												href={startup.links.linkedin}
												className="p-3 bg-blue-700 text-white rounded-full flex items-center"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="mr-1"
												>
													<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
													<rect width="4" height="12" x="2" y="9" />
													<circle cx="4" cy="4" r="2" />
												</svg>
												LinkedIn
											</a>
										</div>
									</div>

									<div className="mt-6 flex justify-center">
										<Button
											variant="outline"
											className="rounded-full"
											onClick={() => openStartupProfile(startup)}
										>
											Know More
										</Button>
									</div>
								</div>

								<div className="ml-4">
									<Button
										variant="default"
										className="bg-yellow-500 hover:bg-yellow-600 rounded-full"
									>
										Track
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Startup Profile Popup */}
			<StartupProfilePopup
				isOpen={isProfileOpen}
				onClose={closeStartupProfile}
				startupData={selectedStartup}
			/>
		</div>
	);
};

export default StartupsPage;
