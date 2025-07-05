import { useFormContext } from "react-hook-form";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { formSchema } from "@/app/promo/page";
import { z } from "zod";
import { Checkbox } from "./ui/checkbox";


const PromoCodeRightSection = () => {
	const form = useFormContext < z.infer<typeof formSchema>>(); // Use form context for easier management
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<Form {...form}>
			<form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
				<h1 className="text-xl">Usage limit</h1>
				<div className="grid grid-cols-2 gap-4 pt-2 ">
					<FormField
						control={form.control}
						name="maxpercustomer"
						render={({ field }) => (
							<FormItem className="flex flex-col justify-between">
								<FormLabel className="flex flex-col gap-1">
									Maximum per customer usage{" "}
									<span className="text-[#606060]">(optional)</span>
								</FormLabel>
								<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
									<Input
										{...field}
										// onChange={(value) =>
										// 	field.onChange(value.target.valueAsNumber)
										// }
										type="number"
										placeholder="leave blank for no limit"
										className="!py-5"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="maxtotalusage"
						render={({ field }) => (
							<FormItem className="flex flex-col justify-between">
								<FormLabel className="flex flex-col gap-1">
									Maximum total usage{" "}
									<span className="text-[#606060]">(optional)</span>
								</FormLabel>
								<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
									<Input
										{...field}
										// onChange={(value) =>
										// 	field.onChange(value.target.valueAsNumber)
										// }
										type="number"
										placeholder="leave blank for no limit"
										className="!py-5"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="minspend"
						render={({ field }) => (
							<FormItem className="flex flex-col justify-between">
								<FormLabel className="flex flex gap-1 flex-col">
									Minimum spend{" "}
									<span className="text-[#606060]">(optional)</span>
								</FormLabel>
								<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
									<Input
										{...field}
										// onChange={(value) =>
										// 	field.onChange(value.target.valueAsNumber)
										// }
										type="number"
										placeholder="leave blank for no minimum"
										className="!py-5"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="maxtotaldiscountamount"
						render={({ field }) => (
							<FormItem className="flex flex-col justify-between">
								<FormLabel className="flex flex gap-1 flex-col">
									Maximum total discount amount{" "}
									<span className="text-[#606060]">(optional)</span>
								</FormLabel>
								<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
									<Input
										{...field}
										// onChange={(value) =>
										// 	field.onChange(value.target.valueAsNumber)
										// }
										type="number"
										placeholder="Leave blank fo no maximum"
										className="!py-5"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<h1 className="text-xl pt-8">Applies to</h1>
				<div className="flex flex-col gap-4 pt-2">
					<FormField
						control={form.control}
						name="allrides"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>All Rides</FormLabel>
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="alldeliveries"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>All Deliveries</FormLabel>
								</div>
							</FormItem>
						)}
					/>
				</div>
				<h1 className="text-xl pt-8">Status</h1>
				<div className="flex flex-col gap-4">
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>Active</FormLabel>
								</div>
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default PromoCodeRightSection;
