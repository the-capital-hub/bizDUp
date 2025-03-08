import React from "react";
import Investment from "../../../components/Advice/Investments";
import Chats from "../../Startup/Chats/Chats";

const Advice = () => {
	return (
		<div className="flex flex-col gap-4">
			<Investment />
			<Chats />
		</div>
	);
};

export default Advice;
