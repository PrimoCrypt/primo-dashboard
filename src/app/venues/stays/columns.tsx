"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { HangoutsHotelsProps } from "@/dataTypes";
import { formatNumbersInThousands } from "@/customFunctions";

export const columns: ColumnDef<HangoutsHotelsProps>[] = [
	{
		accessorKey: "hotelName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Hotel Name
			</h1>
		),
		cell: ({ row }) => {
			const hotelName = row.getValue("hotelName") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{hotelName}
				</div>
			);
		},
	},
	{
		accessorKey: "totalRooms",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Total Rooms
			</h1>
		),
		cell: ({ row }) => {
			const totalRooms = row.getValue("totalRooms") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{totalRooms}
				</div>
			);
		},
	},
	{
		accessorKey: "availableRooms",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Available Rooms
			</h1>
		),
		cell: ({ row }) => {
			const availableRooms = row.getValue("availableRooms") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{availableRooms}
				</div>
			);
		},
	},
	{
		accessorKey: "occupiedRooms",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Occupied Rooms
			</h1>
		),
		cell: ({ row }) => {
			const occupiedRooms = row.getValue("occupiedRooms") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{occupiedRooms}
				</div>
			);
		},
	},
	{
		accessorKey: "reservedRooms",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Reserved Rooms
			</h1>
		),
		cell: ({ row }) => {
			const reservedRooms = row.getValue("reservedRooms") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{reservedRooms}
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
			const revenue = formatNumbersInThousands(
				row.original.monthRevenue as number
			);
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{revenue}
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
				<Link
					href="/hangouts/hotels/[id]"
					as={`/hangouts/hotels/${id}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						history
					</div>
				</Link>
			);
		},
	},
];
