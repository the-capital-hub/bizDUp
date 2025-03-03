import { useState, useEffect } from "react";
import { format, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

export default function Sidebar({
	meetings,
	selectedDate,
	setSelectedDate,
	onAddMeeting,
}) {
	const [date, setDate] = useState(selectedDate);
	const [todayMeetings, setTodayMeetings] = useState([]);

	useEffect(() => {
		setDate(selectedDate);
		const filteredMeetings = meetings.filter((meeting) =>
			isSameDay(meeting.start, selectedDate)
		);
		setTodayMeetings(filteredMeetings);
	}, [meetings, selectedDate]);

	const handleDateChange = (newDate) => {
		setDate(newDate);
		setSelectedDate(newDate);
	};

	return (
		<div className="w-80 bg-white border-l border-gray-200 overflow-y-auto hide-scrollbar">
			<div className="p-4 border-b border-gray-200">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg font-medium">{format(date, "MMMM yyyy")}</h2>
					<div className="flex">
						<Button variant="ghost" size="icon" className="h-7 w-7">
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-7 w-7">
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
				<Calendar
					mode="single"
					selected={date}
					onSelect={handleDateChange}
					className="rounded-md border"
				/>
			</div>

			<div className="p-4">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-medium">Today Meetings</h2>
				</div>

				<div className="space-y-3">
					{todayMeetings.length > 0 ? (
						todayMeetings.map((meeting) => (
							<div
								key={meeting.id}
								className="flex items-center p-3 bg-gray-50 rounded-lg"
							>
								<div className="flex-1">
									<div className="flex items-center gap-2">
										<span className="font-medium">{meeting.company}</span>
										<Badge variant="outline" className="text-xs">
											{meeting.status}
										</Badge>
										<Badge variant="outline" className="text-xs">
											{meeting.type}
										</Badge>
									</div>
									<div className="flex mt-2 gap-2">
										<Button
											variant="secondary"
											size="sm"
											className="text-xs h-7 px-2"
										>
											Join
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="text-xs h-7 px-2"
										>
											See more
										</Button>
									</div>
								</div>
								<Button variant="ghost" size="icon" className="h-7 w-7">
									<ChevronRight className="h-4 w-4" />
								</Button>
							</div>
						))
					) : (
						<div className="text-center py-6 text-gray-500">
							No meetings for today
						</div>
					)}
				</div>

				<Button className="w-full mt-6" onClick={onAddMeeting}>
					Add Meeting
				</Button>
			</div>
		</div>
	);
}
