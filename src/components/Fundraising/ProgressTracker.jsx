export default function ProgressTracker({ currentStep }) {
	const steps = [
		{ id: 1, name: "Apply for Fundraising" },
		{ id: 2, name: "Application Submitted" },
		{ id: 3, name: "Under Review" },
		{ id: 4, name: "Selected for Fundraising" },
	];

	return (
		<div className="max-w-3xl mx-auto">
			<div className="flex items-center justify-between">
				{steps.map((step) => (
					<div key={step.id} className="flex flex-col items-center">
						<div
							className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
								step.id === currentStep
									? "bg-blue-500 text-white border-blue-500"
									: step.id < currentStep
									? "bg-blue-500 text-white border-blue-500"
									: "bg-gray-200 text-gray-500 border-gray-300"
							}`}
						>
							{step.id}
						</div>
						<p
							className={`mt-2 text-sm ${
								step.id === currentStep
									? "text-blue-500 font-medium"
									: step.id < currentStep
									? "text-blue-500"
									: "text-gray-500"
							}`}
						>
							{step.name}
						</p>
						{step.id < steps.length && (
							<div className="w-24 h-px bg-gray-300 mt-4 hidden md:block"></div>
						)}
					</div>
				))}
			</div>
			<div className="flex justify-between mt-2 md:hidden">
				{steps.map((step, index) => (
					<div
						key={`line-${step.id}`}
						className={`flex-1 h-px ${
							index < currentStep - 1 ? "bg-blue-500" : "bg-gray-300"
						} ${index === steps.length - 1 ? "hidden" : ""}`}
					></div>
				))}
			</div>
		</div>
	);
}
