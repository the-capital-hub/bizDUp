import React from "react";
import HUF_Logo from "../../../Images/HUF_Logo.png";
import Individual_Logo from "../../../Images/Individual_Logo.png";
import Corporate_Logo from "../../../Images/Corporate_Logo.png";

const InvestorType = ({ onNext, selected, select }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-10 w-full">
			<h1 className="text-2xl font-bold text-blue-900 text-center">
				What type of an investor you are
			</h1>

			<div className="flex gap-5">
				<button
					className={`text-blue-900 bg-white font-bold text-2xl py-2 px-4 rounded-lg  ${
						selected === "individual" && "highlighted-border"
					} `}
					onClick={() => select("individual")}
				>
					<img src={Individual_Logo} className="w-[150px]" alt="Individual" />
					Individual
				</button>
				<button
					className={`text-blue-900 bg-white font-bold text-2xl py-2 px-4 rounded-lg  ${
						selected === "huf" && "highlighted-border"
					} `}
					onClick={() => select("huf")}
				>
					<img src={HUF_Logo} className="w-[150px]" alt="HUF" />
					HUF
				</button>
				<button
					className={`text-blue-900 bg-white font-bold text-2xl py-2 px-4 rounded-lg  ${
						selected === "corporate" && "highlighted-border"
					} `}
					onClick={() => select("corporate")}
				>
					<img src={Corporate_Logo} className="w-[150px]" alt="Corporate" />
					Corporate
				</button>
			</div>

			{/* Next Button */}
			<button
				className="bg-blue-900 text-white py-2 px-4 rounded-lg w-[300px] mx-auto"
				onClick={onNext}
			>
				Next
			</button>
		</div>
	);
};

export default InvestorType;
