"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formattedId } from "@/customFunctions";
import { UserDataProps } from "@/dataTypes";
import { formatPhoneNumber } from "../../../customFunctions";

export const columns: ColumnDef<UserDataProps>[] = [
	{
		accessorKey: "dateAndTime",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Date/Time
			</h1>
		),
		cell: ({ row }) => {
			const date = row.original.date as string;
			const time = row.original.time as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{date}/{time}
				</div>
			);
		},
	},
	{
		accessorKey: "pickupAddress",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Pick Up</h1>
		),
		cell: ({ row }) => {
			const pickupAddress = row.getValue("pickupAddress") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{pickupAddress}
				</div>
			);
		},
	},
	{
		accessorKey: "destination",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Destination
			</h1>
		),
		cell: ({ row }) => {
			const destination = formatPhoneNumber(row.getValue("destination"));
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{destination}
				</div>
			);
		},
	},
	{
		accessorKey: "cost",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Cost</h1>
		),
		cell: ({ row }) => {
			const cost = row.getValue("cost") as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					N{cost}
				</div>
			);
		},
	},

	{
		accessorKey: "coinsMined",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Coins Mined
			</h1>
		),
		cell: ({ row }) => {
			const coinsMined = row.getValue("coinsMined") as number;
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{coinsMined.toFixed(10)}
				</div>
			);
		},
	},
	{
		accessorKey: "distanceCovered",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Distance Covered
			</h1>
		),
		cell: ({ row }) => {
			const distanceCovered = row.getValue("distanceCovered") as number;
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{distanceCovered}miles
				</div>
			);
		},
	},
];
