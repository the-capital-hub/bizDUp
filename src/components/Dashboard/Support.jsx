import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "Which round is this?",
		answer: "",
	},
	{
		question: "What is the market size & CAGR?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
	},
	// Add more FAQs...
];

export default function SupportSection() {
	const [openFaq, setOpenFaq] = useState(1);

	return (
		<div className="bg-white p-6 rounded-xl border bg-card text-card-foreground shadow">
			<h2 className="text-xl font-semibold mb-6">Support</h2>

			<div className="relative mb-8">
				<Input
					type="text"
					placeholder="Ask a question..."
					className="w-full pl-10 pr-4 py-2"
				/>
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
				<button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#1e1b4b] text-white px-4 py-1 rounded-md text-sm">
					Search
				</button>
			</div>

			<div>
				<h3 className="text-lg font-medium mb-2">Most Asked Questions</h3>
				<p className="text-sm text-gray-500 mb-4">
					Ranking according to member growth
				</p>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div key={index} className="border-b border-gray-200 pb-4">
							<button
								className="w-full flex items-center justify-between"
								onClick={() => setOpenFaq(openFaq === index ? null : index)}
							>
								<span className="font-medium">{faq.question}</span>
								{openFaq === index ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
							</button>
							{openFaq === index && faq.answer && (
								<p className="mt-2 text-gray-600">{faq.answer}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
