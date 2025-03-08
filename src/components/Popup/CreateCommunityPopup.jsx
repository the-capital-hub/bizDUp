import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CreateCommunityPopup({ open, onOpenChange }) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-xl font-bold">
						Create Community
					</DialogTitle>
				</DialogHeader>
				<div className="space-y-6 py-4">
					<div className="space-y-2">
						<Label>What is the name of your community?</Label>
						<Input placeholder="eg. Hub Community" />
					</div>

					<div className="space-y-4">
						<Label>How big is your community?</Label>
						<p className="text-sm text-gray-500">
							E.g. followers, mailing list, subscribers
						</p>

						<RadioGroup defaultValue="less-10k">
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="less-10k" id="less-10k" />
									<Label htmlFor="less-10k">Less than 10K</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="10k-100k" id="10k-100k" />
									<Label htmlFor="10k-100k">10K - 100K</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="100k-500k" id="100k-500k" />
									<Label htmlFor="100k-500k">100K - 500K</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="over-500k" id="over-500k" />
									<Label htmlFor="over-500k">Over 500K</Label>
								</div>
							</div>
						</RadioGroup>
					</div>
				</div>
				<Button className="w-full bg-[#1e1e4b] hover:bg-[#2a2a5e] text-white">
					Create Community
				</Button>
			</DialogContent>
		</Dialog>
	);
}
