import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

export default function DashboardHeader() {
	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold">Dashboard</h1>

			<div className="space-y-4 bg-white p-4 rounded-xl border bg-card text-card-foreground shadow">
				<h2 className="text-2xl font-semibold">Syndicate Name</h2>
				<p className="text-muted-foreground">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
					sit amet.
				</p>

				<div className="flex gap-4 items-center">
					<Input
						placeholder="Generate Link"
						className="max-w-md"
						readOnly
						value="https://example.com/invite/abc123"
					/>
					<Button variant="outline" className="gap-2">
						<Copy className="h-4 w-4" />
						Copy
					</Button>
					<Button className="bg-[#1e1e4b] text-white hover:bg-[#2a2a5e]">
						Invite
					</Button>
				</div>
			</div>
		</div>
	);
}
