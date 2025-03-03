import { Button } from "@/components/ui/button";
import { RiShareForwardLine } from "react-icons/ri";
import CompanyLogo from "../../Images/Company_Logo.png";
import Avatar1 from "../../Images/Avatar_1.png";
import Avatar2 from "../../Images/Avatar_2.png";

const meetings = [
	{
		day: "Monday 12/02",
		events: [
			{
				time: "09:00",
				title: "Shooting Stars Hubble",
				attendees: [`${Avatar1}`, `${Avatar2}`],
				color: "green",
			},
		],
	},
	{
		day: "Tuesday 13/02",
		events: [
			{
				time: "11:00",
				title: "The Amazing Hubble",
				attendees: [`${Avatar1}`, `${Avatar2}`],
				color: "red",
			},
		],
	},
	// Add more days...
];

const todayMeetings = [
	{
		company: "Zevo",
		logo: `${CompanyLogo}`,
		tags: ["Health", "09:00"],
	},
	{
		company: "MoaEV",
		logo: `${CompanyLogo}`,
		tags: ["Electric", "10:00"],
	},
	{
		company: "Square",
		logo: `${CompanyLogo}`,
		tags: ["Finance", "11:00"],
	},
];

export default function MeetingsSection() {
	return (
		<div className="bg-white rounded-xl p-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold">Meetings</h2>
				<div className="text-sm font-medium">Today Meetings</div>
			</div>

			<div className="grid grid-cols-3 gap-6">
				<div className="col-span-2">
					<div className="grid grid-cols-5 gap-4">
						{meetings.map((day) => (
							<div key={day.day} className="space-y-2">
								<div className="text-sm font-medium">{day.day}</div>
								{day.events.map((event, index) => (
									<div
										key={index}
										className={`p-3 rounded-lg border-2 ${
											event.color === "green"
												? "border-green-500 bg-green-50"
												: event.color === "red"
												? "border-red-500 bg-red-50"
												: "border-gray-200"
										}`}
									>
										<div className="text-sm font-medium">{event.time}</div>
										<div className="text-sm">{event.title}</div>
										<div className="flex -space-x-2 mt-2">
											{event.attendees.map((avatar, i) => (
												<img
													key={i}
													src={avatar || "/placeholder.svg"}
													alt={`Attendee ${i + 1}`}
													className="w-6 h-6 rounded-full border-2 border-white"
												/>
											))}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>

				<div className="space-y-4">
					{todayMeetings.map((meeting, index) => (
						<div
							key={index}
							className="flex gap-3 justify-between items-center bg-blue-50 rounded-lg p-4"
						>
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center gap-2">
									<img
										src={meeting.logo || "/placeholder.svg"}
										alt={meeting.company}
										className="w-12 h-12 rounded-lg"
									/>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<div className="flex gap-2">
									<span className="font-medium">{meeting.company}</span>
									{meeting.tags.map((tag, i) => (
										<span
											key={i}
											className="bg-white px-2 py-1 rounded text-xs"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-2 mt-3">
									<Button
										variant="default"
										size="sm"
										className="flex-1 bg-[#1e1b4b]"
									>
										Join
									</Button>
									<Button variant="destructive" size="sm" className="flex-1">
										Re-Schedule
									</Button>
								</div>
							</div>

							<RiShareForwardLine className="h-6 w-6" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
