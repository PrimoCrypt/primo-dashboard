"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SignUpRequestsCabHailingDataProps } from "@/dataTypes";
import Link from "next/link";

export const columns: ColumnDef<SignUpRequestsCabHailingDataProps>[] = [
	{
		accessorKey: "name",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Name</h1>
		),
		cell: ({ row }) => {
			const name = row.getValue("name") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{name}
				</div>
			);
		},
	},
	{
		accessorKey: "vehicleType",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Vehicle Type
			</h1>
		),
		cell: ({ row }) => {
			const vehicleType = row.getValue("vehicleType") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{vehicleType}
				</div>
			);
		},
	},
	{
		accessorKey: "vehicleNumber",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Vehicle Number
			</h1>
		),
		cell: ({ row }) => {
			const vehicleNumber = row.getValue("vehicleNumber") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{vehicleNumber}
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Status</h1>
		),
		cell: ({ row }) => {
			const status = row.getValue("status") as
				| "Approved"
				| "Pending"
				| "Devlined";
			return (
				<div
					className={`sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap ${
						status === "Approved"
							? "text-verified"
							: status === "Pending"
							? "text-[#f05816]"
							: "text-unverified"
					}`}>
					<p>{status}</p>
				</div>
			);
		},
	},
	{
		accessorKey: "date",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Date</h1>
		),
		cell: ({ row }) => {
			const date = row.getValue("date") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{date}
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
			const id = row.original.id;

			return (
				<Link
					href="/signuprequests/cabhailing/[id]"
					as={`/signuprequests/cabhailing/${id}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						Request Info
					</div>
				</Link>
			);
		},
	},
];
