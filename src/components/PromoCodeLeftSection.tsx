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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const PromoCodeLeftSection = () => {
	const form = useFormContext(); // Use form context for easier management

	return (
		<Form {...form}>
			<h2 className="text-xl">Promo code</h2>
			<div className="space-y-2">
				<FormField
					control={form.control}
					name="promocode"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Promo codes can use both letters and numbers
							</FormLabel>
							<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
								<Input placeholder="Enter target" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="promotype"
					render={({ field }) => (
						<FormItem className="pt-4">
							<FormLabel>Choose the type of promo in dicsount </FormLabel>
							<div className="flex gap-2 items-center justify-between">
								<p className="text-[#D9D9D9]">type</p>
								<Select onValueChange={field.onChange}>
									<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none flex items-center gap-2">
										<SelectTrigger className="bg-[#434343] outline-none border-none text-[#D9D9D9]">
											<SelectValue placeholder="Select Target" />
										</SelectTrigger>
									</FormControl>
									<SelectContent className="bg-[#434343]  text-[#D9D9D9] border-background-emerald ">
										<SelectItem value="all">percentage</SelectItem>
										<SelectItem value="fleet">fixed amount</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="promodiscountamount"
					render={({ field }) => (
						<FormItem className="pt-2">
							<div className="flex gap-2 items-center justify-between">
								<p className="text-[#D9D9D9]">amount</p>
								<FormControl className="border-solid border-[1px] border-white border-opacity-70 focus:border-background-emerald outline-none">
									<div className="flex items-center h-full bg-[#434343] rounded-lg">
										<Input
											{...field}
											onChange={(value) =>
												field.onChange(value.target.valueAsNumber)
											}
											type="number"
											className=" bg-background-secondary focus:outline-none active:outline-none active:border-none focus:!ring-background-emerald focus:border-none border-none rounded-none rounded-l-lg"
										/>
										<span className="rounded-r-lg px-3">%</span>
									</div>
								</FormControl>
								<FormMessage />
							</div>
						</FormItem>
					)}
				/>
			</div>
			<h2 className="text-xl pt-8">Active date</h2>
			{/* <div className="space-y-2">
					<FormField
						control={form.control}
						name="promocode"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Promo codes can use both lettersand numbers
								</FormLabel>
								<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
									<Input placeholder="Enter target" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="promotype"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Promo codes can use both lettersand numbers
								</FormLabel>
								<div className="flex gap-2 items-center justify-between">
									<p className="text-[#D9D9D9]">type</p>
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
					<FormField
						control={form.control}
						name="promodiscountamount"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Choose the type of promo in dicsount </FormLabel>
								<div className="flex gap-2 items-center justify-between">
									<p className="text-[#D9D9D9]">amount</p>
									<FormControl className="border-solid border-[1px] focus:border-background-emerald outline-none">
										<div className="flex items-center h-full bg-[#434343] rounded-lg">
											<Input
												{...field}
												className="h-fit bg-background-secondary border-none rounded-none rounded-l-lg"
											/>
											<span className="rounded-r-lg px-3">%</span>
										</div>
									</FormControl>
									<FormMessage />
								</div>
							</FormItem>
						)}
					/>
				</div> */}
		</Form>
	);
};

export default PromoCodeLeftSection;
