"use client"
import { sentMessagesData } from "@/data";
import { SentMessagesDataTable } from "./data-tables/sent-messages-datatable";
import { sentMessagesColumns } from "./columns/sent-messages-column";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface SentMessagesProps {
    message: string;
    dateSent: string;
}

const SentMessages = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
		<div className="flex flex-col font-medium">
			<h1 className="text-2xl pl-4">History</h1>
			{sentMessagesData.length > 0 ? (
				<SentMessagesDataTable
					columns={sentMessagesColumns}
					data={sentMessagesData}
				/>
			) : isLoading ? (
				<div className="p-20 absolute top-0 w-full bg-transparent flex items-center justify-center">
					<Loader2 className="h-16 w-16 animate-spin text-primary-700" />
				</div>
			) : (
				<div className="w-full flex justify-center p-4">
					<h1>No Game Data</h1>
				</div>
			)}
		</div>
	);
}
export default SentMessages