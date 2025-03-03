import { useState } from "react";
import MeetingsCalender from "../../../components/Meetings/MeetingsCalender";
import MeetingsSidebar from "../../../components/Meetings/MeetingsSidebar";
import AddMeetingPopup from "../../../components/Meetings/AddMeetingsPopup";

const Meetings = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [meetings, setMeetings] = useState([
		{
			id: 1,
			title: "The Amazing Hobbit",
			start: new Date(2024, 4, 21, 11, 0),
			end: new Date(2024, 4, 21, 12, 0),
			color: "bg-blue-100 border-blue-400",
			attendees: ["/avatars/01.png", "/avatars/02.png"],
			company: "Zevo",
			status: "Online",
			type: "Team",
		},
		{
			id: 2,
			title: "Choosing A Quality Cookware Set",
			start: new Date(2024, 4, 21, 13, 0),
			end: new Date(2024, 4, 21, 14, 0),
			color: "bg-purple-100 border-purple-400",
			attendees: ["/avatars/03.png", "/avatars/04.png"],
			company: "MooEV",
			status: "Online",
			type: "Team",
		},
		{
			id: 3,
			title: "Astronomy Binoculars A Great Alternative",
			start: new Date(2024, 4, 21, 15, 0),
			end: new Date(2024, 4, 21, 16, 0),
			color: "bg-yellow-100 border-yellow-400",
			attendees: ["/avatars/05.png", "/avatars/06.png"],
			company: "Sapore",
			status: "Online",
			type: "Team",
		},
		{
			id: 4,
			title: "Shooting Stars",
			start: new Date(2024, 4, 22, 9, 0),
			end: new Date(2024, 4, 22, 10, 0),
			color: "bg-green-100 border-green-400",
			attendees: ["/avatars/01.png", "/avatars/02.png"],
			company: "Zevo",
			status: "Online",
			type: "Team",
		},
		{
			id: 5,
			title: "The Amazing Hobbit",
			start: new Date(2024, 4, 22, 17, 0),
			end: new Date(2024, 4, 22, 18, 0),
			color: "bg-blue-100 border-blue-400",
			attendees: ["/avatars/03.png", "/avatars/04.png"],
			company: "Zevo",
			status: "Offline",
			type: "Team",
		},
		{
			id: 6,
			title: "Astronomy Binoculars A Great Alternative",
			start: new Date(2024, 4, 23, 15, 0),
			end: new Date(2024, 4, 23, 16, 0),
			color: "bg-pink-100 border-pink-400",
			attendees: ["/avatars/05.png", "/avatars/06.png"],
			company: "Zevo",
			status: "Online",
			type: "Team",
		},
	]);

	const addMeeting = (meeting) => {
		setMeetings([
			...meetings,
			{
				...meeting,
				id: meetings.length + 1,
				color: getRandomColor(),
			},
		]);
	};

	const getRandomColor = () => {
		const colors = [
			"bg-blue-100 border-blue-400",
			"bg-green-100 border-green-400",
			"bg-purple-100 border-purple-400",
			"bg-yellow-100 border-yellow-400",
			"bg-pink-100 border-pink-400",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<>
			<div className="flex-1 flex flex-col overflow-hidden custom-height1">
				<header className="bg-white shadow-sm">
					<div className="px-6 py-4">
						<h1 className="text-2xl font-bold text-gray-900">Meetings</h1>
					</div>
				</header>
				<main className="flex flex-1 overflow-hidden">
					<div className="flex-1 overflow-y-auto">
						<MeetingsCalender
							meetings={meetings}
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
						/>
					</div>
					<MeetingsSidebar
						meetings={meetings}
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
						onAddMeeting={() => setIsDialogOpen(true)}
					/>
				</main>
			</div>
			<AddMeetingPopup
				open={isDialogOpen}
				onOpenChange={setIsDialogOpen}
				onAddMeeting={addMeeting}
				selectedDate={selectedDate}
			/>
		</>
	);
};

export default Meetings;
