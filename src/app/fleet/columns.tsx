"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formattedId } from "@/customFunctions";
import Link from "next/link";
import { DriverDataProps } from "@/dataTypes";

export const columns: ColumnDef<DriverDataProps>[] = [
	{
		accessorKey: "driverId",
		header: () => (
							<h1 className="font-semibold text-base text-left text-white"> Fleet ID</h1>
		),
		cell: ({ row }) => {
			const driverId = formattedId(row.getValue("driverId"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{driverId}
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
			const contactNo = row.getValue("contactNo") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{contactNo}
				</div>
			);
		},
	},
	{
		accessorKey: "verificationStatus",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Verification Status
			</h1>
		),
		cell: ({ row }) => {
			const verificationStatus = row.getValue("verificationStatus") as
				| "Verified"
				| "Unverified";

			return (
				<div
					className={`sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap ${
						verificationStatus === "Verified" ? "text-verified" : "text-unverified"
					}`}>
					<p>{verificationStatus}</p>
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
			const reviews = row.getValue("reviews") as string;

			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{reviews}.0
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">History</h1>
		),
		cell: ({ row }) => {
			const driverId = row.getValue("driverId");

			return (
				<Link href="/fleet/[driver-id]" as={`/fleet/${driverId}`}>
					<div className="text-background-primo underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						history
					</div>
				</Link>
			);
		},
	},
];
