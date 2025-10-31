export const Statusbtn = ({ status }) => {
	const { statusName, color, className } = status;

	return (
		<span
			className={className}
			style={{
				color: color,
			}}>
			{statusName}
		</span>
	);
}
