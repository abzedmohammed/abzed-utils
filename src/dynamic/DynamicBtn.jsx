import { Button } from 'antd';
import PropTypes from 'prop-types';

export const DynamicBtn = ({
	handleClick,
	onClick,
	disabled,
	isProcessing,
	loading,
	text,
	children,
	icon = null,
	iconPosition='start',
	type = 'button',
	className,
	width,
	...buttonProps
}) => {
	const resolvedLoading = Boolean(loading ?? isProcessing);
	const resolvedOnClick = onClick ?? handleClick;

	return (
		<Button
			size='large'
			icon={icon}
			iconPosition={iconPosition}
			loading={resolvedLoading}
			style={{
				width: width ? width : 'fit-content',
			}}
			onClick={resolvedOnClick}
			disabled={disabled || resolvedLoading}
			className={className}
			htmlType={type}
			{...buttonProps}>
			{text ?? children}
		</Button>
	);
};

DynamicBtn.propTypes = {
	handleClick: PropTypes.func,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	isProcessing: PropTypes.bool,
	loading: PropTypes.bool,
	text: PropTypes.node,
	children: PropTypes.node,
	icon: PropTypes.node,
	iconPosition: PropTypes.oneOf(['start', 'end']),
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
