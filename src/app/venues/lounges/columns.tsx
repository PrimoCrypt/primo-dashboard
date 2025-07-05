"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { HangoutsLoungesProps } from "@/dataTypes";
import { formatNumbersInThousands } from "@/customFunctions";

export const columns: ColumnDef<HangoutsLoungesProps>[] = [
	{
		accessorKey: "loungeName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Lounge Name
			</h1>
		),
		cell: ({ row }) => {
			const loungeName = row.getValue("loungeName") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{loungeName}
				</div>
			);
		},
	},
	{
		accessorKey: "totalTables",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Total Tables
			</h1>
		),
		cell: ({ row }) => {
			const totalTables = row.getValue("totalTables") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{totalTables}
				</div>
			);
		},
	},
	{
		accessorKey: "availableTables",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Available Tables
			</h1>
		),
		cell: ({ row }) => {
			const availableTables = row.getValue("availableTables") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{availableTables}
				</div>
			);
		},
	},
	{
		accessorKey: "occupiedTables",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Occupied Tables
			</h1>
		),
		cell: ({ row }) => {
			const occupiedTables = row.getValue("occupiedTables") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{occupiedTables}
				</div>
			);
		},
	},
	{
		accessorKey: "reservedTables",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Reserved Tables
			</h1>
		),
		cell: ({ row }) => {
			const reservedTables = row.getValue("reservedTables") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{reservedTables}
				</div>
			);
		},
	},

	{
		accessorKey: "monthlyRevenue",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				This Month Revenue
			</h1>
		),
		cell: ({ row }) => {
			const monthRevenue = formatNumbersInThousands(
				row.original.monthRevenue as number
			);
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					N{monthRevenue}
				</div>
			);
		},
	},
	{
		accessorKey: "totalRevenue",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Total Revenue
			</h1>
		),
		cell: ({ row }) => {
			const totalRevenue = formatNumbersInThousands(
				row.original.totalRevenue as number
			);
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					N{totalRevenue}
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Action</h1>
		),
		cell: ({ row }) => {
			const id = row.original.id as number;
			return (
				<Link href="/hangouts/lounges/[id]" as={`/hangouts/lounges/${id}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						history
					</div>
				</Link>
			);
		},
	},
];
