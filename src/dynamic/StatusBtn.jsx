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

export { StatusBtn };
export const Statusbtn = StatusBtn;
