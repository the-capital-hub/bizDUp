import StatsCards from "../../components/Dashboard/StatsCards";
import Welcome from "../../components/Dashboard/Welcome";
import Tasks from "../../components/SyndicateDashboard/Tasks";
import Leads from "../../components/Dashboard/Leads";
import Meetings from "../../components/SyndicateDashboard/Meetings";

import { RecentInvestments } from "../../components/Portfolio/RecentInvestment";
import IndustryDistribution from "../../components/Portfolio/IndustryDistribution";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<Welcome />
			<StatsCards />
			<div className="grid grid-cols-[1fr_1.5fr] gap-4">
				<RecentInvestments />
				<IndustryDistribution />
			</div>
			<Tasks />
			<Leads />
			<Meetings />
		</div>
	);
};

export default Dashboard;
