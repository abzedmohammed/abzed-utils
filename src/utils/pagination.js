// src/pagination.js
/**
 * Returns Ant Design compatible pagination configuration.
 */
export const pagination = ({
	currentPage,
	limit,
	total,
	setCurrentPage,
	setLimit,
	setStart,
}) => ({
	hideOnSinglePage: true,
	current: currentPage,
	pageSize: limit,
	total,
	showSizeChanger: true,
	pageSizeOptions: [10, 20, 50, 100],
	onChange: (page, pageSize) => {
		setCurrentPage(page);
		setLimit(pageSize);
		setStart((page - 1) * pageSize);
		window.scrollTo(0, 0);
	},
});
