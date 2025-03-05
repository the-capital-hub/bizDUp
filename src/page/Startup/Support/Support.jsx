import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { Plus, Minus } from "lucide-react";
import Contactus_Icon from "../../../Images/Contactus_Icon.png";
import Mailus_Icon from "../../../Images/Email_Icon.png";
import GetHelp_Icon from "../../../Images/Help_Icon.png";

// Dummy questions data
const QUESTIONS = [
	{
		id: 1,
		question: "Which round is this?",
		answer:
			"This is the Series A funding round, typically ranging from $2M to $15M for startups that have shown strong product-market fit and growth potential.",
		category: "funding",
	},
	{
		id: 2,
		question: "What is the market size & CAGR?",
		answer:
			"The global market size is estimated at $500B with a CAGR of 15.3% from 2024-2028, driven by increasing digital transformation and technological adoption.",
		category: "market",
	},
	{
		id: 3,
		question: "How does the investment process work?",
		answer:
			"The investment process involves initial screening, due diligence, term sheet negotiation, and final closing. This typically takes 3-6 months.",
		category: "process",
	},
	{
		id: 4,
		question: "What are the key metrics you look for?",
		answer:
			"Key metrics include MRR growth rate, customer acquisition cost (CAC), lifetime value (LTV), burn rate, and gross margins.",
		category: "metrics",
	},
	{
		id: 5,
		question: "How much equity do I need to give up?",
		answer:
			"Equity dilution typically ranges from 15-25% for Series A, depending on valuation and amount raised.",
		category: "equity",
	},
];

export default function Support() {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredQuestions, setFilteredQuestions] = useState(QUESTIONS);
	const [selectedQuestion, setSelectedQuestion] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	useEffect(() => {
		if (searchQuery.trim() === "") {
			setFilteredQuestions(QUESTIONS);
		} else {
			const filtered = QUESTIONS.filter(
				(q) =>
					q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
					q.answer.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setFilteredQuestions(filtered);
		}
	}, [searchQuery]);

	const handleQuestionClick = (question) => {
		setSelectedQuestion(question);
		setIsDrawerOpen(true);
	};

	return (
		<div className="">
			<h1 className="text-2xl font-bold mb-6">Support</h1>

			{/* Search Section */}
			<div className="relative mb-8">
				<Input
					type="text"
					placeholder="Ask a question..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="pr-24 bg-white"
				/>
				<Button
					className="absolute right-0 top-0 bg-[#1e1b4b]"
					onClick={() => {}}
				>
					Search
				</Button>
			</div>

			{/* Questions Section */}
			<div className="mb-12">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">
						{searchQuery ? "Search Results" : "Most Asked Questions"}
					</h2>
					<p className="text-sm text-gray-500">
						Ranking according to member growth
					</p>
				</div>

				<div className="space-y-4">
					{filteredQuestions.map((q) => (
						<div
							key={q.id}
							className="bg-white border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
							onClick={() => handleQuestionClick(q)}
						>
							<div className="flex justify-between items-center">
								<h3 className="font-medium">{q.question}</h3>
								{selectedQuestion?.id === q.id ? (
									<Minus className="w-5 h-5 text-gray-400" />
								) : (
									<Plus className="w-5 h-5 text-gray-400" />
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Support Options */}
			<div className="flex gap-4 justify-center items-center">
				<Button
					variant="outline"
					className="flex flex-col items-center gap-2 p-6 h-[150px] w-[170px]"
					onClick={() => (window.location.href = "mailto:support@example.com")}
				>
					<img
						src={Contactus_Icon}
						alt="Contactus Icon"
						className="w-[90px] h-auto"
					/>
					<span className="font-medium">Contact us</span>
				</Button>

				<Button
					variant="outline"
					className="flex flex-col items-center gap-2 p-6 h-[150px] w-[170px]"
					onClick={() => (window.location.href = "mailto:info@example.com")}
				>
					<img
						src={Mailus_Icon}
						alt="Mailus Icon"
						className="w-[90px] h-auto"
					/>
					<span className="font-medium">Mail us</span>
				</Button>

				<Button
					variant="outline"
					className="flex flex-col items-center gap-2 p-6 h-[150px] w-[170px]"
					onClick={() => window.open("/help", "_blank")}
				>
					<img
						src={GetHelp_Icon}
						alt="GetHelp Icon"
						className="w-[90px] h-auto"
					/>
					<span className="font-medium">Get Help</span>
				</Button>
			</div>

			{/* Answer Drawer */}
			<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
				<DrawerContent>
					<div className="mx-auto w-full max-w-2xl">
						<DrawerHeader>
							<DrawerTitle>{selectedQuestion?.question}</DrawerTitle>
							<DrawerDescription>{selectedQuestion?.answer}</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button variant="outline">Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
