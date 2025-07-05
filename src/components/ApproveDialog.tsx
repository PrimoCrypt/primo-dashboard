import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { TriangleAlertIcon } from "lucide-react";

export const ApproveDialog = ({ name }: { name: string }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="bg-background-emerald px-10 py-1 rounded-lg">
					Approve
				</button>
			</DialogTrigger>
			<DialogContent className=" bg-background-secondary border-none flex flex-col items-center p-11">
				<div className="rounded-full h-[70px] w-[70px] flex items-center justify-center bg-background-emerald bg-opacity-20">
					<TriangleAlertIcon color="#10B981" size={28} />
				</div>
				<DialogHeader className="flex flex-col items-center mb-8 w-full">
					<DialogTitle className="text-2xl font-semibold">
						Approve &quot;{name}&quot;
					</DialogTitle>
					<DialogDescription className="text-center text-white  font-medium text-base">
						Restricting a customer prevents them from being seen by passengers
					</DialogDescription>
				</DialogHeader>
				<div className="flex gap-3">
					<DialogClose asChild>
						<button className="border-white border-solid border-[1px] px-10 py-1 rounded-lg text-white font-bold">
							Cancel
						</button>
					</DialogClose>
					<button className="bg-background-emerald px-10 py-1 rounded-lg text-white font-bold">
						Continue
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
