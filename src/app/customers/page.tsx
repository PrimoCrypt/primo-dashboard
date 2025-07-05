"use client";
import { useState } from "react";
import { usersData } from "@/data";
import { UsersDataProps } from "@/dataTypes";
import { DataTable } from "@/components/data-tables/data-table";
import { columns } from "./columns";
import { columns as morecolumns } from "./morecolumns";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Users = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [myUsersData, setMyUsersData] = useState<UsersDataProps[]>(usersData);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showMoreColumns, setShowMoreColumns] = useState<boolean>(true)
	const filteredData = usersData.filter(
		(item) =>
			item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.userId.toString().toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="flex flex-col gap-4 sm:gap-6">
			<div className="flex flex-col gap-6 sm:gap-8">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
					<h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Customers</h1>
					<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
						<Button
							onClick={() => setShowMoreColumns(!showMoreColumns)}
							className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl py-2 sm:py-3 px-4 sm:px-6 shadow-lg hover:bg-white/20 transition-all text-sm sm:text-base">
							{showMoreColumns ? "Show Less" : "Show More"}
						</Button>
						<label className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl py-2 sm:py-3 h-fit text-base sm:text-lg px-4 sm:px-6 flex items-center gap-2 sm:gap-3 shadow-lg">
							<input
								type="text"
								className="grow bg-transparent outline-none text-sm sm:text-base"
								value={searchTerm}
								placeholder="Search"
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="h-5 w-5 sm:h-6 sm:w-6 opacity-70 flex-shrink-0">
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</label>
					</div>
				</div>
				<div>
					<div className="w-full overflow-y-auto h-full backdrop-blur-sm bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl p-4 sm:p-6">
						{usersData.length > 0 ? (
							<DataTable columns={showMoreColumns ? morecolumns : columns} data={filteredData} />
						) : isLoading ? (
							<div className="p-10 sm:p-20 absolute top-0 w-full bg-transparent flex items-center justify-center">
								<Loader2 className="h-12 w-12 sm:h-16 sm:w-16 animate-spin text-emerald-500" />
							</div>
						) : (
							<div className="w-full flex justify-center p-4">
								<h1 className="text-lg sm:text-xl text-gray-400">No Customer Data</h1>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
