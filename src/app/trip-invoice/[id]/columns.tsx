"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatNumbersInThousands } from "@/customFunctions";
import { RideInvoiceDataProps } from "@/dataTypes";

export const columns: ColumnDef<RideInvoiceDataProps>[] = [
	{
		accessorKey: "date",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Date</h1>
		),
		cell: ({ row }) => {
			const date = row.original.date as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{date}
				</div>
			);
		},
	},
	{
		accessorKey: "pickUp",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Pick Up</h1>
		),
		cell: ({ row }) => {
			const pickUp = row.getValue("pickUp") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{pickUp}
				</div>
			);
		},
	},
	{
		accessorKey: "dropOff",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Drop Off</h1>
		),
		cell: ({ row }) => {
			const dropOff = row.getValue("dropOff") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{dropOff}
				</div>
			);
		},
	},
	{
		accessorKey: "fare",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Fare</h1>
		),
		cell: ({ row }) => {
			const fare = formatNumbersInThousands(row.getValue("fare") as number);
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					N{fare}
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
