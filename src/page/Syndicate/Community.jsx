import CommunitySidebar from "../../components/CommunitySidebar";
import Chats from "../Startup/Chats/Chats";

const Community = () => {
	return (
		<div className="">
			<h1 className="text-2xl font-bold mb-5">Community</h1>
			<div className="grid grid-cols-[1fr_2fr] gap-4">
				<CommunitySidebar />
				<Chats />
			</div>
		</div>
	);
};

export default Community;
