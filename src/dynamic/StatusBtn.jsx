import PropTypes from "prop-types";

const StatusBtn = ({ status = {} }) => {
	const { statusName, color, className } = status;

	return (
		<span
			className={className}
			style={{
				color,
			}}>
			{statusName}
		</span>
	);
};

StatusBtn.propTypes = {
	status: PropTypes.shape({
		statusName: PropTypes.node,
		color: PropTypes.string,
		className: PropTypes.string,
	}),
};

export { StatusBtn };
export const Statusbtn = StatusBtn;
