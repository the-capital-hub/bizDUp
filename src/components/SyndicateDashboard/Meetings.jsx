import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enIN from "date-fns/locale/en-IN";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiShareForwardLine } from "react-icons/ri";
import CompanyLogo from "../../Images/Company_Logo.png";
import Avatar1 from "../../Images/Avatar_1.png";
import Avatar2 from "../../Images/Avatar_2.png";

const locales = {
	"en-IN": enIN,
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

export default function DashboardMeetings() {
	const events = [
		{
			id: 1,
			title: "Strategy Plan",
			start: new Date(2024, 0, 15, 9, 0),
			end: new Date(2024, 0, 15, 10, 0),
			attendees: [
				{ name: "John", avatar: "/placeholder.svg?height=32&width=32" },
				{ name: "Sarah", avatar: "/placeholder.svg?height=32&width=32" },
			],
			color: "#34D399",
		},
	];

	const todayMeetings = [
		// {
		// 	id: 1,
		// 	company: "Zevo",
		// 	time: "10:00 AM",
		// 	status: "Live",
		// 	logo: "/placeholder.svg?height=32&width=32",
		// },
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

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
			<div className="lg:col-span-3">
				<Card>
					<CardHeader className="font-semibold">Meetings</CardHeader>
					<CardContent className="p-6 pt-0">
						<Calendar
							localizer={localizer}
							events={events}
							startAccessor="start"
							endAccessor="end"
							style={{ height: 500 }}
							eventPropGetter={(event) => ({
								style: {
									backgroundColor: event.color,
								},
							})}
						/>
					</CardContent>
				</Card>
			</div>

			<div>
				<Card>
					<CardContent className="p-6">
						<h3 className="font-semibold mb-4">Today Meetings</h3>
						<div className="space-y-4">
							{/* {todayMeetings.map((meeting) => (
								<div
									key={meeting.id}
									className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
								>
									<div className="flex items-center gap-3">
										<Avatar>
											<AvatarImage src={meeting.logo} />
											<AvatarFallback>{meeting.company[0]}</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-medium">{meeting.company}</p>
											<p className="text-sm text-muted-foreground">
												{meeting.time}
											</p>
										</div>
									</div>
									<div className="flex gap-2">
										<Button
											size="sm"
											className="bg-[#1e1e4b] text-white hover:bg-[#2a2a5e]"
										>
											Join
										</Button>
										<Button size="sm" variant="outline">
											View
										</Button>
									</div>
								</div>
							))} */}
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
											<Button
												variant="destructive"
												size="sm"
												className="flex-1"
											>
												Re-Schedule
											</Button>
										</div>
									</div>

									<RiShareForwardLine className="h-6 w-6" />
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
