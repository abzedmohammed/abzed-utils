import { Table } from 'antd';
import { useEffect, useState } from 'react';

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
	const [data, setdata] = useState(dataSource);

	useEffect(() => {
		setdata(dataSource);
	}, [dataSource]);

	return (
		<div className="max-w-full w-full overflow-x-auto">
			<Table
				rowSelection={rowSelection}
				loading={loading}
				scroll={{ x: scroll }}
				pagination={pagination}
				rowKey={rowKey}
				className={className}
				columns={columns}
				dataSource={data}
			/>
		</div>
	);
}
