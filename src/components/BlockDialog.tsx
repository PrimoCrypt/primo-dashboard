import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Ban } from "lucide-react";

export const BlockDialog = ({ name }: { name: string }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="bg-error px-10 py-1 rounded-lg">Block</button>
			</DialogTrigger>
			<DialogContent className=" bg-background-secondary border-none flex flex-col items-center p-11">
				<div className="rounded-full h-[70px] w-[70px] flex items-center justify-center bg-error bg-opacity-20">
					<Ban color="#FF3333" size={28} />
				</div>
				<DialogHeader className="flex flex-col items-center mb-8 w-full">
					<DialogTitle className="text-2xl font-semibold">
						Block &quot;{name}&quot;
					</DialogTitle>
					<DialogDescription className="text-center text-white font-medium text-base ">
						Blocking a customer prevents them from assesing their account
					</DialogDescription>
				</DialogHeader>
				<div className="flex gap-3">
					<DialogClose asChild>
						<button
							className="border-white border-solid border-[1px] px-10 py-1 rounded-lg text-white font-bold">
							Cancel
						</button>
					</DialogClose>
					<button className="bg-error px-10 py-1 rounded-lg text-white font-bold">
						Continue
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
