import { useState, useEffect } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enIN from "date-fns/locale/en-IN";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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

export default function Calendar({ meetings, selectedDate, setSelectedDate }) {
	const [view, setView] = useState("week");
	const [currentDate, setCurrentDate] = useState(selectedDate);

	useEffect(() => {
		setCurrentDate(selectedDate);
	}, [selectedDate]);

	const handleNavigate = (action) => {
		let newDate = new Date(currentDate);

		if (action === "PREV") {
			newDate.setDate(newDate.getDate() - 7);
		} else if (action === "NEXT") {
			newDate.setDate(newDate.getDate() + 7);
		} else if (action === "TODAY") {
			newDate = new Date();
		}

		setCurrentDate(newDate);
		setSelectedDate(newDate);
	};

	const CustomToolbar = ({ label }) => {
		return (
			<div className="flex justify-between items-center mb-4">
				<div className="flex items-center space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => handleNavigate("TODAY")}
					>
						Today
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => handleNavigate("PREV")}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => handleNavigate("NEXT")}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
					<span className="text-sm font-medium">{label}</span>
				</div>
				<div className="flex space-x-1">
					<Button
						variant={view === "year" ? "default" : "ghost"}
						size="sm"
						onClick={() => setView("year")}
					>
						Year
					</Button>
					<Button
						variant={view === "week" ? "default" : "ghost"}
						size="sm"
						onClick={() => setView("week")}
					>
						Week
					</Button>
					<Button
						variant={view === "month" ? "default" : "ghost"}
						size="sm"
						onClick={() => setView("month")}
					>
						Month
					</Button>
					<Button
						variant={view === "day" ? "default" : "ghost"}
						size="sm"
						onClick={() => setView("day")}
					>
						Day
					</Button>
				</div>
			</div>
		);
	};

	const CustomEvent = ({ event }) => {
		const startTime = format(new Date(event.start), "HH:mm");
		const endTime = format(new Date(event.end), "HH:mm");

		return (
			<div
				className={`p-2 rounded-md border h-full overflow-hidden ${
					event.color || "bg-blue-50 border-blue-200"
				}`}
			>
				<div className="flex gap-1 text-xs font-medium">
					<span>{startTime}</span>
					<span>-</span>
					<span>{endTime}</span>
				</div>
				<div className="font-medium text-sm mt-1">{event.title}</div>
				{event.attendees && event.attendees.length > 0 && (
					<div className="flex mt-2">
						{event.attendees.map((avatar, index) => (
							<Avatar
								key={index}
								className="h-6 w-6 border-2 border-white -ml-2 first:ml-0"
							>
								<AvatarImage src={avatar} alt="Attendee" />
								<AvatarFallback>{avatar.charAt(0) || index + 1}</AvatarFallback>
							</Avatar>
						))}
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="bg-white p-6 h-full">
			<BigCalendar
				localizer={localizer}
				events={meetings || []}
				startAccessor="start"
				endAccessor="end"
				style={{ height: "calc(100vh - 200px)" }}
				views={["month", "week", "day", "year"]}
				view={view}
				onView={setView}
				date={currentDate}
				onNavigate={(date) => {
					setCurrentDate(date);
					setSelectedDate(date);
				}}
				components={{
					toolbar: CustomToolbar,
					event: CustomEvent,
				}}
			/>
		</div>
	);
}
