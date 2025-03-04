import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	ExternalLink,
	FileText,
	Heart,
	MapPin,
	Play,
	Download,
	Calendar,
} from "lucide-react";
import Avator5 from "../../Images/Avatar_4.png";
import Avator6 from "../../Images/Avatar_6.png";
import Avator8 from "../../Images/Avatar_8.jpg";
import Avator9 from "../../Images/Avatar_7.jpg";
import Avator10 from "../../Images/Avatar_10.png";
import Github_banner from "../../Images/GitHub+OpenAi_Banner.png";
import Openai_banner from "../../Images/Zevotech+OpenAi_Banner.png";
import Event1 from "../../Images/Event1.png";
import Event2 from "../../Images/Event2.png";

const StartupProfilePopup = ({ isOpen, onClose, startupData }) => {
	const [activeTab, setActiveTab] = useState("highlights");
	const [isFavorite, setIsFavorite] = useState(startupData?.favorited || false);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};

	// If no startup data is provided, don't render anything
	if (!startupData) return null;

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto hide-scrollbar">
				<DialogHeader className="flex flex-row items-center justify-between">
					<DialogTitle>{startupData.name}</DialogTitle>
				</DialogHeader>

				<div className="flex items-start gap-4 mt-4">
					<div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center overflow-hidden">
						<img
							src={startupData.logo || "/placeholder.svg?height=50&width=50"}
							alt={startupData.name}
							className="h-12 w-12"
						/>
					</div>

					<div className="flex-1">
						<div className="flex items-center justify-between">
							<div>
								<div className="flex items-center gap-2">
									<h2 className="text-2xl font-bold">{startupData.name}</h2>
									<span className="bg-red-100 p-2 rounded-full flex justify-center items-center">
										<button onClick={toggleFavorite} className="text-red-500">
											<Heart
												fill={isFavorite ? "currentColor" : "none"}
												size={20}
											/>
										</button>
									</span>
								</div>
								<p className="text-xs text-muted-foreground">
									{startupData.company}
								</p>
							</div>

							<Button className="bg-yellow-500 hover:bg-yellow-600 rounded-full">
								Invest Now
							</Button>
						</div>

						<div className="flex items-center gap-4 mt-2">
							<div className="flex items-center text-sm">
								<MapPin size={16} className="mr-1" /> {startupData.location}
							</div>

							<div className="flex gap-2">
								{startupData.tags &&
									startupData.tags.map((tag, idx) => (
										<Badge
											key={idx}
											variant="secondary"
											className="bg-muted text-foreground hover:bg-muted/80"
										>
											{tag}
										</Badge>
									))}
							</div>
						</div>

						<p className="mt-4 text-sm text-muted-foreground">
							{startupData.description}
						</p>
					</div>
				</div>

				<div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 bg-blue-50 rounded-md p-5">
					<div>
						<p className="text-xs text-gray-600 mb-2">
							Previous Funding Rounds
						</p>
						<p className="font-semibold text-sm bg-white p-2 rounded-md">
							{startupData.fundingRounds}
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-600 mb-2">Minimum Ticket Size</p>
						<p className="font-semibold text-sm bg-white p-2 rounded-md">
							{startupData.minimumTicketSize}
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-600 mb-2">Current Valuation</p>
						<p className="font-semibold text-sm bg-white p-2 rounded-md">
							{startupData.currentValuation}
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-600 mb-2">ARR</p>
						<p className="font-semibold text-sm bg-white p-2 rounded-md">
							{startupData.arr}
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-600 mb-2">MRR</p>
						<p className="font-semibold text-sm bg-white p-2 rounded-md">
							{startupData.mrr}
						</p>
					</div>
				</div>

				<div className="mt-6">
					<p className="text-lg font-medium mb-2">Interested Investors</p>
					<div className="flex flex-wrap gap-4 items-center">
						{startupData.investors &&
							startupData.investors.slice(0, 5).map((investor, idx) => (
								<div
									key={idx}
									className="flex items-center gap-2 py-2 px-3 bg-blue-100 rounded-full w-fit"
								>
									<img
										src={Avator5}
										alt={investor.name}
										className="w-8 h-8 rounded-full border-2 border-white"
									/>
									<span className="text-sm">{investor.name}</span>
								</div>
							))}
						{startupData.investors && startupData.investors.length > 5 && (
							<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs">
								+{startupData.investors.length - 5}
							</div>
						)}
					</div>
				</div>

				<div className="mt-6">
					<p className="text-lg font-medium mb-2">Sectors & Industry Tags</p>
					<div className="flex flex-wrap gap-3">
						{startupData.sectors &&
							startupData.sectors.map((sector, idx) => (
								<div
									key={idx}
									className="text-sm font-normal bg-blue-100 py-2 px-4 rounded-full w-fit flex justify-center items-center"
								>
									{sector}
								</div>
							))}
					</div>
				</div>

				<div className="mt-6">
					<p className="text-lg font-medium mb-2">Public Link</p>
					<div className="flex flex-wrap gap-3">
						<a
							href={startupData.links?.website}
							className="p-2 bg-green-600 text-white rounded-full flex items-center"
						>
							<ExternalLink size={16} className="mr-1" /> Website
						</a>
						<a
							href={startupData.links?.facebook}
							className="p-2 bg-blue-600 text-white rounded-full flex items-center"
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
							href={startupData.links?.twitter}
							className="p-2 bg-blue-400 text-white rounded-full flex items-center"
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
							href={startupData.links?.linkedin}
							className="p-2 bg-blue-700 text-white rounded-full flex items-center"
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

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card>
						<CardContent className="p-6">
							<h3 className="text-lg font-medium mb-4">Funding Ask</h3>
							<div className="aspect-square max-w-[200px] mx-auto mb-4">
								<div className="relative w-full h-full">
									{/* This is a simplified pie chart representation */}
									<div className="absolute inset-0 rounded-full overflow-hidden">
										<div className="w-full h-full flex">
											<div
												className="bg-red-400"
												style={{ width: "30%" }}
											></div>
											<div
												className="bg-blue-400"
												style={{ width: "25%" }}
											></div>
											<div
												className="bg-green-400"
												style={{ width: "25%" }}
											></div>
											<div
												className="bg-purple-400"
												style={{ width: "20%" }}
											></div>
										</div>
									</div>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="bg-white rounded-full w-[60%] h-[60%] flex items-center justify-center">
											<div className="text-center">
												<div className="text-xs">Total</div>
												<div className="font-bold">
													{startupData.fundingRounds}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<div className="flex items-center">
									<div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
									<span>R&D (30%)</span>
								</div>
								<div className="flex items-center">
									<div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
									<span>Marketing (25%)</span>
								</div>
								<div className="flex items-center">
									<div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
									<span>Operations (25%)</span>
								</div>
								<div className="flex items-center">
									<div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
									<span>Other (20%)</span>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6">
							<h3 className="text-lg font-medium mb-4">Pitch recording</h3>
							<div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
								<img
									src={Event1}
									alt="Video thumbnail"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 flex items-center justify-center">
									<button className="w-16 h-16 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-white">
										<Play size={24} />
									</button>
								</div>
							</div>
							<div className="text-sm">
								<p>{startupData.description}</p>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6">
							<h3 className="text-lg font-medium mb-4">
								Documents and Pitch day
							</h3>
							<div className="grid grid-cols-1 gap-4">
								<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
									<div className="flex items-center">
										<div className="bg-primary/10 p-2 rounded-full mr-3">
											<Download size={20} className="text-primary" />
										</div>
										<div>
											<h4 className="font-medium">Download</h4>
											<p className="text-sm text-muted-foreground">
												Pitch Deck
											</p>
										</div>
									</div>
									<Button variant="outline" size="sm" className="rounded-full">
										View
									</Button>
								</div>

								<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
									<div className="flex items-center">
										<div className="bg-primary/10 p-2 rounded-full mr-3">
											<Calendar size={20} className="text-primary" />
										</div>
										<div>
											<h4 className="font-medium">10/05/2023 | 2:00 PM</h4>
											<p className="text-sm text-muted-foreground">
												Video Meeting | 45-60 min
											</p>
										</div>
									</div>
									<Button size="sm" className="rounded-full">
										Register Now
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Tabs Navigation */}
				<Tabs
					defaultValue="highlights"
					value={activeTab}
					onValueChange={setActiveTab}
					className="w-full mt-6"
				>
					<TabsList className="grid grid-cols-4 mb-6">
						<TabsTrigger
							value="highlights"
							className="data-[state=active]:border-b-2 data-[state=active]:border-primary"
						>
							Highlights
						</TabsTrigger>
						<TabsTrigger
							value="about"
							className="data-[state=active]:border-b-2 data-[state=active]:border-primary"
						>
							About
						</TabsTrigger>
						<TabsTrigger
							value="documents"
							className="data-[state=active]:border-b-2 data-[state=active]:border-primary"
						>
							Documents
						</TabsTrigger>
						<TabsTrigger
							value="events"
							className="data-[state=active]:border-b-2 data-[state=active]:border-primary"
						>
							Events Highlights
						</TabsTrigger>
					</TabsList>

					{/* Highlights Tab Content */}
					<TabsContent value="highlights" className="mt-0">
						<h1 className="text-2xl font-bold mb-5">Quick Updates</h1>
						<Card>
							<CardContent className="p-4 flex gap-4">
								{/* image (left side) */}
								<img
									src={Github_banner}
									alt="Startup"
									className="w-56 h-32 object-cover rounded-lg mr-4"
								/>

								{/* content (right side) */}
								<div className="flex flex-col w-full">
									<h2 className="text-xl font-medium mb-4">
										ZEVO Technology with Open AI
									</h2>
									<p className="mb-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt.
									</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-4 flex gap-4">
								{/* image (left side) */}
								<img
									src={Openai_banner}
									alt="Startup"
									className="w-56 h-32 object-cover rounded-lg mr-4"
								/>

								{/* content (right side) */}
								<div className="flex flex-col w-full">
									<h2 className="text-xl font-medium mb-4">
										ZEVO Technology with Open AI
									</h2>
									<p className="mb-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex eaLorem ipsum dolor sit
										amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt.
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* About Tab Content */}
					<TabsContent value="about" className="mt-0">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-medium mb-4">
									About {startupData.name}
								</h3>
								<p className="text-muted-foreground mb-8">
									{startupData.description}
									<br />
									<br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>

								<h3 className="text-xl font-medium mb-4">Team</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<div className="flex flex-col items-center text-center">
										<img
											src={Avator8}
											alt="Team Member"
											className="w-16 h-16 rounded-full mb-2"
										/>
										<h4 className="font-medium">Nolan Levin</h4>
										<p className="text-sm text-muted-foreground mb-1">CEO</p>
										<p className="text-sm">
											Lorem ipsum dolor sit amet that is a provider of energy
											storage systems and batteries.
										</p>
										<a
											href="#"
											className="mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
										>
											LinkedIn
										</a>
									</div>
									<div className="flex flex-col items-center text-center">
										<img
											src={Avator9}
											alt="Team Member"
											className="w-16 h-16 rounded-full mb-2"
										/>
										<h4 className="font-medium">Emery Lubin</h4>
										<p className="text-sm text-muted-foreground mb-1">CTO</p>
										<p className="text-sm">
											Lorem ipsum dolor sit amet that is a provider of energy
											storage systems and batteries.
										</p>
										<a
											href="#"
											className="mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
										>
											LinkedIn
										</a>
									</div>
									<div className="flex flex-col items-center text-center">
										<img
											src={Avator10}
											alt="Team Member"
											className="w-16 h-16 rounded-full mb-2"
										/>
										<h4 className="font-medium">Craig Pixel Madsen</h4>
										<p className="text-sm text-muted-foreground mb-1">COO</p>
										<p className="text-sm">
											Lorem ipsum dolor sit amet that is a provider of energy
											storage systems and batteries.
										</p>
										<a
											href="#"
											className="mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
										>
											LinkedIn
										</a>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Documents Tab Content */}
					<TabsContent value="documents" className="mt-0">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-medium mb-6">Documents</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<div className="flex items-center gap-2 p-6 bg-muted rounded-lg">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<FileText className="text-blue-600" />
										</div>
										<h4 className="font-medium">KYC</h4>
										<Button variant="ghost" size="sm" className="mt-2">
											<Download size={16} className="mr-1" /> Download
										</Button>
									</div>
									<div className="flex items-center gap-2 p-6 bg-muted rounded-lg">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<FileText className="text-blue-600" />
										</div>
										<h4 className="font-medium">Market Report</h4>
										<Button variant="ghost" size="sm" className="mt-2">
											<Download size={16} className="mr-1" /> Download
										</Button>
									</div>
									<div className="flex items-center gap-2 p-6 bg-muted rounded-lg">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<FileText className="text-blue-600" />
										</div>
										<h4 className="font-medium">Compliance</h4>
										<Button variant="ghost" size="sm" className="mt-2">
											<Download size={16} className="mr-1" /> Download
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Events Tab Content */}
					<TabsContent value="events" className="mt-0">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-medium mb-6">Events Highlights</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<div className="border rounded-lg overflow-hidden">
										<div className="relative">
											<img
												src={Event1}
												alt="Event"
												className="w-full aspect-video object-cover"
											/>
											<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
												<div className="flex items-center">
													<img
														src={Avator6}
														alt="Presenter"
														className="w-8 h-8 rounded-full mr-2"
													/>
													<span>Alena Turf</span>
												</div>
											</div>
										</div>
										<div className="p-4">
											<div className="flex justify-between items-center mb-2">
												<h4 className="font-medium">Investor Webinar</h4>
												<span className="text-sm text-muted-foreground">
													Date: 25-06-2024
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna.
											</p>
										</div>
									</div>
									<div className="border rounded-lg overflow-hidden">
										<div className="relative">
											<img
												src={Event2}
												alt="Event"
												className="w-full aspect-video object-cover"
											/>
											<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
												<div className="flex items-center">
													<img
														src={Avator6}
														alt="Presenter"
														className="w-8 h-8 rounded-full mr-2"
													/>
													<span>David Kim</span>
												</div>
											</div>
										</div>
										<div className="p-4">
											<div className="flex justify-between items-center mb-2">
												<h4 className="font-medium">CEO Presentation</h4>
												<span className="text-sm text-muted-foreground">
													Date: 15-09-2024
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												Ut enim ad minim veniam, quis nostrud exercitation
												ullamco laboris nisi ut aliquip ex ea commodo.
											</p>
										</div>
									</div>
									<div className="border rounded-lg overflow-hidden">
										<div className="relative">
											<img
												src={Event1}
												alt="Event"
												className="w-full aspect-video object-cover"
											/>
											<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
												<div className="flex items-center">
													<img
														src={Avator6}
														alt="Presenter"
														className="w-8 h-8 rounded-full mr-2"
													/>
													<span>Emily Chen</span>
												</div>
											</div>
										</div>
										<div className="p-4">
											<div className="flex justify-between items-center mb-2">
												<h4 className="font-medium">Product Launch Event</h4>
												<span className="text-sm text-muted-foreground">
													Date: 10-12-2024
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												Sed ut perspiciatis unde omnis iste natus error sit
												voluptatem accusantium doloremque laudantium.
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				{/* Most Asked Questions */}
				<div className="mt-6">
					<h3 className="text-lg font-medium mb-4">Most Asked Questions</h3>
					<div className="space-y-2">
						<div className="border rounded-lg overflow-hidden">
							<div className="flex justify-between items-center p-4 cursor-pointer">
								<h4 className="font-medium">Which rounds first?</h4>
								<Button variant="ghost" size="icon">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										></path>
									</svg>
								</Button>
							</div>
						</div>
						<div className="border rounded-lg overflow-hidden">
							<div className="flex justify-between items-center p-4 cursor-pointer">
								<h4 className="font-medium">What is the market size & CAGR?</h4>
								<Button variant="ghost" size="icon">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										></path>
									</svg>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default StartupProfilePopup;
