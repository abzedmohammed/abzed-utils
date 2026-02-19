import { Table } from 'antd';

export const MainTable = ({
	rowKey,
	className,
	scroll,
	columns = [],
	dataSource = [],
	loading = false,
	pagination,
	rowSelection
}) => {
	const tableScroll =
		scroll && typeof scroll === 'object'
			? scroll
			: scroll
				? { x: scroll }
				: undefined;

	return (
		<div className="max-w-full w-full overflow-x-auto">
			<Table
				rowSelection={rowSelection}
				loading={loading}
				scroll={tableScroll}
				pagination={pagination}
				rowKey={rowKey}
				className={className}
				columns={columns}
				dataSource={dataSource}
			/>
		</div>
	);
};
