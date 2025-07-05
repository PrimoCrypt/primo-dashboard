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

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export const DataTable = <TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: { pagination: { pageSize: 6 } },
	});
	const currentPage = table.getState().pagination.pageIndex
	const totalRows = data.length
	const startRow = currentPage * 6 + 1;
	const endRow = Math.min((currentPage + 1) * 6, totalRows)

	return (
		<div>
			<div className="rounded-md ">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} >
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
			<div className="flex items-center justify-end space-x-2 py-4">
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
		</div>
	);
};
