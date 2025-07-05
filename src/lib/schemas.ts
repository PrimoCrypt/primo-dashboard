import { z } from "zod";

export const formSchema = z.object({
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