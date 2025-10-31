import { Button } from 'antd';

export const DynamicBtn = ({
	handleClick,
	disabled,
	isProcessing,
	text,
	icon = null,
	iconPosition='start',
	type = 'button',
	className,
	width,
}) => {
	return (
		<Button
			size='large'
			icon={icon}
			iconPosition={iconPosition}
			loading={isProcessing}
			style={{
				width: width ? width : 'fit-content',
			}}
			onClick={handleClick}
			disabled={disabled || isProcessing}
			className={className}
			htmlType={type}>
			{text}
		</Button>
	);
}
