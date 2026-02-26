import { Button } from 'antd';
import PropTypes from 'prop-types';

export const DynamicBtn = ({
	onClick,
	disabled,
	loading = false,
	children,
	icon = null,
	iconPlacement = 'start',
	type = 'button',
	className,
	width,
	...buttonProps
}) => {
	const isLoading = Boolean(loading);

	return (
		<Button
			size='large'
			icon={icon}
			iconPlacement={iconPlacement}
			loading={isLoading}
			style={{
				width: width ? width : 'fit-content',
			}}
			onClick={onClick}
			disabled={disabled || isLoading}
			className={className}
			htmlType={type}
			{...buttonProps}>
			{children}
		</Button>
	);
};

DynamicBtn.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	children: PropTypes.node,
	icon: PropTypes.node,
	iconPlacement: PropTypes.oneOf(['start', 'end']),
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
