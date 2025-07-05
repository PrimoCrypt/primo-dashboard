"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CompanyDataProps } from "@/dataTypes";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";

export const columns: ColumnDef<CompanyDataProps>[] = [
	{
		accessorKey: "managerId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Manager ID
			</h1>
		),
		cell: ({ row }) => {
			const managerId = formattedId(row.getValue("managerId"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{managerId}
				</div>
			);
		},
	},
	{
		accessorKey: "companyName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Company Name
			</h1>
		),
		cell: ({ row }) => {
			const companyName = formattedId(row.getValue("companyName"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{companyName}
				</div>
			);
		},
	},
	{
		accessorKey: "companyId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Company ID
			</h1>
		),
		cell: ({ row }) => {
			const companyId = row.getValue("companyId") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{companyId}
				</div>
			);
		},
	},
	{
		accessorKey: "noOfRiders",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No Of Riders
			</h1>
		),
		cell: ({ row }) => {
			const noOfRiders = formatNumbersInThousands(row.getValue("noOfRiders"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfRiders}
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: () => (
			<h1 className="font-medium text-xl text-left text-white">Actions</h1>
		),
		cell: ({ row }) => {
			const managerId = row.getValue("managerId");

			return (
				<Link href="/company/[manager-id]" as={`/company/${managerId}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						view more
					</div>
				</Link>
			);
		},
	},
];
