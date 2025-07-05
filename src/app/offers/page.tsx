"use client";
import PromoCodeLeftSection from "@/components/PromoCodeLeftSection";
import PromoCodeRightSection from "@/components/PromoCodeRightSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema } from "@/lib/schemas";
import { z } from "zod";

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
