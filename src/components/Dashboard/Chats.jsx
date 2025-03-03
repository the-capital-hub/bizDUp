import { FaUpload, FaRegUser, FaRegEye } from "react-icons/fa";
import Avatart1 from "../../Images/Avatar_1.png";
import Avatart2 from "../../Images/Avatar_2.png";
import Avatart3 from "../../Images/Avatar_3.png";
import Avatart4 from "../../Images/Avatar_4.png";
import Avatart5 from "../../Images/Avatar_5.png";

const chatGroups = [
	{
		name: "Active investors",
		handle: "@activeinvestors",
		members: "3.3k",
		views: "104k",
		color: "bg-green-100",
		avatars: [
			{ src: Avatart1 },
			{ src: Avatart2 },
			{ src: Avatart3 },
			{ src: Avatart4 },
			{ src: Avatart5 },
		],
	},
	{
		name: "Investors Deal flow",
		handle: "@dealflow",
		members: "3.3k",
		views: "104k",
		color: "bg-orange-50",
		avatars: [
			{ src: Avatart1 },
			{ src: Avatart2 },
			{ src: Avatart3 },
			{ src: Avatart4 },
			{ src: Avatart5 },
		],
	},
	{
		name: "Zevo Deal flow",
		handle: "@zevo",
		members: "3.3k",
		views: "104k",
		color: "bg-blue-100",
		avatars: [
			{ src: Avatart1 },
			{ src: Avatart2 },
			{ src: Avatart3 },
			{ src: Avatart4 },
			{ src: Avatart5 },
		],
	},
	{
		name: "Another Active investors",
		handle: "@anotheractiveinvestors",
		members: "3.3k",
		views: "104k",
		color: "bg-green-100",
		avatars: [
			{ src: Avatart1 },
			{ src: Avatart2 },
			{ src: Avatart3 },
			{ src: Avatart4 },
			{ src: Avatart5 },
		],
	},
];

export default function ChatsSection() {
	return (
		<div>
			<h2 className="text-xl font-semibold mb-4">Chats</h2>
			<div className="flex gap-4 h-64 overflow-x-scroll custom-width hide-scrollbar">
				{chatGroups.map((chat, index) => (
					<div
						key={index}
						className={`${chat.color} rounded-xl p-4 relative w-[350px] h-[230px]`}
					>
						<button className="absolute top-4 right-4">
							<FaUpload className="h-4 w-4 text-gray-600" />
						</button>

						<div className="mb-4">
							<h3 className="font-medium">{chat.name}</h3>
							<p className="text-sm text-gray-600">{chat.handle}</p>
						</div>

						<div className="flex justify-between p-4 rounded-full items-center gap-4 mb-4 bg-white ">
							<div className="flex gap-1 items-center px-4 py-1 text-sm">
								<FaRegUser className="h-6 w-6 mr-2" />
								<span className="font-medium">{chat.members}</span>
							</div>
							<div className="flex gap-1 items-center px-4 py-1 text-sm">
								<FaRegEye className="h-6 w-6 mr-2" />
								<span className="font-medium">{chat.views}</span>
							</div>
						</div>

						<div className="flex -space-x-2">
							{chat.avatars.map((avatar, i) => (
								<img
									key={i}
									src={avatar.src || "/placeholder.svg"}
									alt={`Member ${i + 1}`}
									className="w-11 h-11 rounded-full border-2 border-white"
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
