"use client";
import {  useState } from "react";
import { revenueData } from "@/data";
import { RevenueDataProps } from "@/dataTypes";
import { DataTable } from "@/components/data-tables/data-table";
import { columns } from "./columns";
import { Loader2 } from "lucide-react";

const RevenueReports = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [revenuesData, setRevenuesData] =
		useState<RevenueDataProps[]>(revenueData);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const filteredData = revenuesData.filter((item) =>
		item.userName.toLowerCase().includes(searchTerm.toLowerCase())
	);



	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-10">
				<div className="flex  items-center justify-between">
					<h1 className="text-3xl font-semibold">Recent Feedbacks</h1>
					<label className="input border-white bg-transparent py-5 h-fit text-xl px-[30px] flex items-center gap-2">
						<input
							type="text"
							className="grow"
							value={searchTerm}
							placeholder="Search"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-8 w-8 opacity-70">
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
				</div>
				<div>
					<div className="w-full overflow-y-auto h-full">
						{revenuesData.length > 0 ? (
							<DataTable columns={columns} data={filteredData} />
						) : isLoading ? (
							<div className="p-20 absolute top-0 w-full bg-transparent flex items-center justify-center">
								<Loader2 className="h-16 w-16 animate-spin text-primary-700" />
							</div>
						) : (
							<div className="w-full flex justify-center p-4">
								<h1>No Feedback Data</h1>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RevenueReports;
