"use client";
import { ColumnDef } from "@tanstack/react-table";

interface SentMessagesProps {
    message: string;
    dateSent: string;
}

export const sentMessagesColumns: ColumnDef<SentMessagesProps>[] = [
	{
		accessorKey: "message",
		header: () => (
			<h1 className="font-medium text-lg text-left text-white">Messages</h1>
		),
		cell: ({ row }) => {
			const message = row.getValue("message") as string;
			return <p  className="font-medium py-2">{message}</p>;
		},
	},
	{
		accessorKey: "dateSent",
		header: () => (
			<h1 className="font-medium text-lg text-left text-white">Date</h1>
		),
		cell: ({ row }) => {
			const dateSent = row.getValue("dateSent") as string;
			return <p className="font-medium py-2">{dateSent}</p>;
		},
	},
];
