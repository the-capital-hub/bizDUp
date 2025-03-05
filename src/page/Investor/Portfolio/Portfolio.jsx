import { PortfolioStats } from "../../../components/Portfolio/PortfolioStates";
import { RecentInvestments } from "../../../components/Portfolio/RecentInvestment";
import { IndustryDistribution } from "../../../components/Portfolio/IndustryDistribution";

export default function Portfolio() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold">Portfolio</h1>

			<PortfolioStats />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<RecentInvestments />
				<IndustryDistribution />
			</div>
		</div>
	);
}
