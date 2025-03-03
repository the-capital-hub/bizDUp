import Welcome from "../../../components/Dashboard/Welcome";
import Meetings from "../../../components/Dashboard/Meetings";
import Chats from "../../../components/Dashboard/Chats";
import Support from "../../../components/Dashboard/Support";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<Welcome />
			<Meetings />
			<Chats />
			<Support />
		</div>
	);
};

export default Dashboard;
