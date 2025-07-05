"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";
import { UsersDataProps } from "@/dataTypes";

export const columns: ColumnDef<UsersDataProps>[] = [
	{
		accessorKey: "userId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white"> User ID</h1>
		),
		cell: ({ row }) => {
			const userId = formattedId(row.getValue("userId"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{userId}
				</div>
			);
		},
	},
	{
		accessorKey: "email",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Email</h1>
		),
		cell: ({ row }) => {
			const email = row.getValue("email") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{email}
				</div>
			);
		},
	},
	{
		accessorKey: "contactNo",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Contact No
			</h1>
		),
		cell: ({ row }) => {
			const contactNo = row.getValue("contactNo") as number;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{contactNo}
				</div>
			);
		},
	},
	{
		accessorKey: "verification",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Verification
			</h1>
		),
		cell: ({ row }) => {
			const verification = row.getValue("verification") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{verification}
				</div>
			);
		},
	},
	{
		accessorKey: "reviews",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Reviews</h1>
		),
		cell: ({ row }) => {
			const reviews = row.getValue("reviews") as number;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{reviews}
				</div>
			);
		},
	},
	{
		accessorKey: "totalRides",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Total Rides
			</h1>
		),
		cell: ({ row }) => {
			const totalRides = row.getValue("totalRides") as number;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{totalRides}
				</div>
			);
		},
	},
	{
		accessorKey: "cancelledRides",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Cancelled Rides
			</h1>
		),
		cell: ({ row }) => {
			const cancelledRides = row.getValue("cancelledRides") as number;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{cancelledRides}
				</div>
			);
		},
	},
	{
		accessorKey: "completedRides",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Completed Rides
			</h1>
		),
		cell: ({ row }) => {
			const completedRides = row.getValue("completedRides") as number;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{completedRides}
				</div>
			);
		},
	},
	{
		accessorKey: "amountSpent",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Amount Spent
			</h1>
		),
		cell: ({ row }) => {
			const amountSpent = formatNumbersInThousands(row.getValue("amountSpent"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{amountSpent}
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Actions</h1>
		),
		cell: ({ row }) => {
			const userId = row.original.userId;

			return (
				<div className="text-background-emerald underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					<Link href={`/users/${userId}`}>View More</Link>
				</div>
			);
		},
	},
];
