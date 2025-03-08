import Welcome from "../../../components/Dashboard/Welcome";
import Meetings from "../../../components/Dashboard/Meetings";
import { RecentInvestments } from "../../../components/Portfolio/RecentInvestment";
import IndustryDistribution from "../../../components/Portfolio/IndustryDistribution";
import LiveDeals from "../../../components/Dashboard/LiveDeals";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<Welcome />
			<div className="grid grid-cols-[1fr_1.5fr] gap-4">
				<RecentInvestments />
				<IndustryDistribution />
			</div>
			<LiveDeals />
			<Meetings />
		</div>
	);
};

export default Dashboard;
