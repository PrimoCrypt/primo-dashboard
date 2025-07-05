import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlockDialog } from "../BlockDialog";
import { RestrictDialog } from "../RestrictDialog";

interface ReviewsDataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export const ReviewsDataTable = <TData, TValue>({
	columns,
	data,
	name,
}: ReviewsDataTableProps<TData, TValue> & { name: string }) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: { pagination: { pageSize: 5 } },
	});
	const currentPage = table.getState().pagination.pageIndex;
	const totalRows = data.length;
	const startRow = currentPage * 5 + 1;
	const endRow = Math.min((currentPage + 1) * 5, totalRows);

	return (
		<div>
			<div className="rounded-md ">
				<Table>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									className="border-none"
									key={row.id}
									data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className="px-0 align-top">
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-between ">
				<div className=" flex items-center space-x-2 py-4">
					<span>
						{startRow} - {endRow} / {totalRows}
					</span>
					<Button
						className="bg-grey p-2 rounded-full"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						<ChevronLeft className="w-5 h-5 stroke-2" />
					</Button>
					<Button
						className="bg-grey p-2 rounded-full"
						variant="outline"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						<ChevronRight className="w-5 h-5 stroke-2" />
					</Button>
				</div>
				<div className="text-2xl font-bold leading-[35px] flex gap-2">
					<BlockDialog name={name}/>
					<RestrictDialog name={name} />
				</div>
			</div>
		</div>
	);
};