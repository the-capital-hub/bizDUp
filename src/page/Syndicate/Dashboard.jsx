import Header from "../../components/SyndicateDashboard/Header";
import States from "../../components/SyndicateDashboard/States";
import Tasks from "../../components/SyndicateDashboard/Tasks";
import Meetings from "../../components/SyndicateDashboard/Meetings";
import Investments from "../../components/SyndicateDashboard/Investment";
import Support from "../../components/Dashboard/Support";
import Community from "../../components/Dashboard/Chats";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<Header />
			<States />
			<Meetings />
			<Tasks />
			<Investments />
			<Community />
			<Support />
		</div>
	);
};

export default Dashboard;
