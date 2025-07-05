"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { HotelProps } from "@/dataTypes";
import { formatNumbersInThousands } from "@/customFunctions";

export const columns: ColumnDef<HotelProps>[] = [
	{
		accessorKey: "noOfBookings",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				No of Bookings
			</h1>
		),
		cell: ({ row }) => {
			const noOfBookings = row.getValue("noOfBookings") as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfBookings}
				</div>
			);
		},
	},
	{
		accessorKey: "noOfCancellation",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No of Cancellation
			</h1>
		),
		cell: ({ row }) => {
			const noOfCancellation = row.getValue("noOfCancellation") as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfCancellation}
				</div>
			);
		},
	},
	{
		accessorKey: "revenueThisMonth",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Revenue Generated
			</h1>
		),
		cell: ({ row }) => {
			const revenueThisMonth = formatNumbersInThousands(
				row.getValue("revenueThisMonth") as number
			);
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{revenueThisMonth}
				</div>
			);
		},
	},
	{
		accessorKey: "percentRemitted",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Percentage Remitted
			</h1>
		),
		cell: ({ row }) => {
			const percentRemitted = formatNumbersInThousands(
				row.getValue("percentRemitted") as number
			);
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{percentRemitted}
				</div>
			);
		},
	},
];
