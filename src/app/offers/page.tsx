"use client";
import PromoCodeLeftSection from "@/components/PromoCodeLeftSection";
import PromoCodeRightSection from "@/components/PromoCodeRightSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";

const formSchema = z.object({
	promocode: z
		.string()
		.min(6, { message: "Input up to 6 characters for the promo code" }),
	promotype: z
		.string()
		.min(2, { message: "Please select the type of promo discount" }),
	promodiscountamount: z
		.number()
		.min(1, { message: "Enter a value greater than 1%" })
		.max(100, { message: "Your max value cannot be greater than 100%" }),
	maxpercustomer: z.string().optional(),
	maxtotalusage: z.string().optional(),
	minspend: z.string().optional(),
	maxtotaldiscountamount: z
		.string()
		.max(100, { message: "Cannot excceed 100% reached" })
		.optional(),
	alldeliveries: z.boolean().default(false).optional(),
	allrides: z.boolean().default(false).optional(),
	status: z.boolean().default(false).optional()
});

const Promo = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			promocode: "",
			promotype: "",
		},
	});
	
	return (
		<div className="">
			<div className="w-full h-[1px] bg-white bg-opacity-10 mt-2 mb-4"></div>
			<div className="grid grid-cols-2 gap-14">
				<FormProvider {...form}>
					
					<div className="flex flex-col gap-4 border-r-solid border-r-[2px] border-r-white border-opacity-10 pr-12">
						<PromoCodeLeftSection />
					</div>
					<div className="flex flex-col gap-4">
						<PromoCodeRightSection />
					</div>
				</FormProvider>
			</div>
		</div>
	);
};

export default Promo;
