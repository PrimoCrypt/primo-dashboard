"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	title: z.string().min(2, {
		message: "This field cannot be empty",
	}),
	message: z.string().min(2, {
		message: "This field cannot be empty",
	}),
	target: z.string().min(2,{
		message: "Please select your target"
	}
	),
});

function PushNotificationForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			message: "",
			target: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Notification title{" "}
								<span className="text-[#606060]">(optional)</span>
							</FormLabel>
							<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Write your message</FormLabel>
							<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
								<Textarea
									placeholder="shadcn"
									className="min-h-32"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="target"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="flex flex-col gap-2">
								Target customers
								<p className="text-[#606060]">
									notifications will be sent to the selected category
								</p>
							</FormLabel>
							<div className="flex gap-2 items-center">
								<p className="text-[#D9D9D9]">Segment</p>
								<Select onValueChange={field.onChange}>
									<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none flex items-center gap-2">
										<SelectTrigger className="bg-[#434343] outline-none border-none text-[#D9D9D9]">
											<SelectValue placeholder="Select Target" />
										</SelectTrigger>
									</FormControl>
									<SelectContent className="bg-[#434343] text-[#D9D9D9] border-background-emerald ">
																<SelectItem value="all">Fleet and Customers</SelectItem>
						<SelectItem value="fleet">Fleet</SelectItem>
						<SelectItem value="customers">Customers</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-between">
					<Button
						type="button"
						className="bg-[#838383] text-sm text-[#212121] hover:bg-background-emerald hover:bg-opacity-40 active:scale-95">
						Cancel
					</Button>

					<div className="flex gap-2">
						<Button
							type="button"
							className="bg-[#838383] text-sm text-[#212121] hover:bg-background-emerald hover:bg-opacity-40 active:scale-95">
							Save Draft
						</Button>
						<Button
							type="submit"
							className="bg-background-emerald text-sm text-white hover:bg-opacity-40 active:scale-95">
							Send Message
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}

export default PushNotificationForm;
