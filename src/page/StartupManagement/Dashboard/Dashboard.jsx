import StatsCards from "../../../components/Dashboard/StatsCards";
import Meetings from "../../../components/Dashboard/Meetings";
import LiveDeals from "../../../components/Dashboard/LiveDeals";
import SupportSection from "../../../components/Dashboard/Support";
import Leads from "../../../components/Dashboard/Leads";
import Tasks from "../../../components/SyndicateDashboard/Tasks"

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<StatsCards />
			<Meetings />
			<Tasks />
			<Leads />
			<LiveDeals />
			<SupportSection />
		</div>
	);
};

export default Dashboard;
