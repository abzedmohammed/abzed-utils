import { Table } from 'antd';
import PropTypes from 'prop-types';

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

MainTable.propTypes = {
	rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	className: PropTypes.string,
	scroll: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.object]),
	columns: PropTypes.arrayOf(PropTypes.object),
	dataSource: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
	pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	rowSelection: PropTypes.object,
};
