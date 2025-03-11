import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Message = ({
	message,
	description,
	type = "success",
	onAction,
	actionText,
	className = "",
}) => {
	const isSuccess = type === "success";

	return (
		<div
			className={`rounded-lg border p-4 shadow-sm ${
				isSuccess ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
			} ${className}`}
		>
			<div className="flex items-start gap-4">
				<div
					className={`mt-1 ${isSuccess ? "text-green-500" : "text-red-500"}`}
				>
					{isSuccess ? <CheckCircle size={24} /> : <XCircle size={24} />}
				</div>

				<div className="flex-1">
					<h3
						className={`text-lg font-semibold ${
							isSuccess ? "text-green-700" : "text-red-700"
						}`}
					>
						{message}
					</h3>

					{description && (
						<p
							className={`mt-1 text-sm ${
								isSuccess ? "text-green-600" : "text-red-600"
							}`}
						>
							{description}
						</p>
					)}

					{actionText && onAction && (
						<button
							onClick={onAction}
							className={`mt-3 rounded-md px-4 py-2 text-sm font-medium text-white ${
								isSuccess
									? "bg-green-600 hover:bg-green-700"
									: "bg-red-600 hover:bg-red-700"
							}`}
						>
							{actionText}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Message;
