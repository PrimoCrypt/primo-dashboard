"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";
import { HotelProps } from "@/dataTypes";

export const columns: ColumnDef<HotelProps>[] = [
	{
		accessorKey: "noOfBoookingsToday",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				No of Bookings Today
			</h1>
		),
		cell: ({ row }) => {
			const noOfBoookingsToday = row.getValue("noOfBoookingsToday") as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfBoookingsToday}
				</div>
			);
		},
	},
	{
		accessorKey: "noOfBookingsThisWeek",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No of Bookings This Week
			</h1>
		),
		cell: ({ row }) => {
			const noOfBookingsThisWeek = row.getValue(
				"noOfBookingsThisWeek"
			) as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfBookingsThisWeek}
				</div>
			);
		},
	},
	{
		accessorKey: "noOfBookingsThisMonth",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No of Bookings This Month
			</h1>
		),
		cell: ({ row }) => {
			const noOfBookingsThisMonth = row.getValue(
				"noOfBookingsThisMonth"
			) as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfBookingsThisMonth}
				</div>
			);
		},
	},
	{
		accessorKey: "noOfCancellationsToday",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No of Cancellations Today
			</h1>
		),
		cell: ({ row }) => {
			const noOfCancellationsToday = row.getValue(
				"noOfCancellationsToday"
			) as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfCancellationsToday}
				</div>
			);
		},
	},

	{
		accessorKey: "noOfCancellationsThisWeek",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No of Cancellations This Week
			</h1>
		),
		cell: ({ row }) => {
			const noOfCancellationsThisWeek = row.getValue(
				"noOfCancellationsThisWeek"
			) as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfCancellationsThisWeek}
				</div>
			);
		},
	},
	{
		accessorKey: "noOfCancellationsThisMonth",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				No of Cancellations This Month
			</h1>
		),
		cell: ({ row }) => {
			const noOfCancellationsThisMonth = row.getValue(
				"noOfCancellationsThisMonth"
			) as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{noOfCancellationsThisMonth}
				</div>
			);
		},
	},
	{
		accessorKey: "revenueSoFar",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Revenue so Far
			</h1>
		),
		cell: ({ row }) => {
			const revenueSoFar = formatNumbersInThousands(
				row.getValue("revenueSoFar")
			);
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{revenueSoFar}
				</div>
			);
		},
	},
];
