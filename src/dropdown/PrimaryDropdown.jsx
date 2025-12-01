import { Dropdown } from "antd";
import { Space } from "antd";
import { forwardRef } from 'react';
import { defaultDropdownOverlayStyle } from "../utils";

const PrimaryDropdown = forwardRef(({
	items,
	triggerButton,
	overlayStyle,
	placement = 'bottom',
    trigger = 'click',
    className,
    overlayClassName=defaultDropdownOverlayStyle,
    disabled,
    onOpenChange,
}, ref) => {
	return (
        <Dropdown
			ref={ref}
			disabled={disabled}
			onOpenChange={onOpenChange}
			className={className}
			trigger={trigger}
			placement={placement}
			menu={{ items }}
			classNames={overlayClassName}
			style={overlayStyle}
		>
            <div onClick={(e) => e.preventDefault()}>
                <Space>{triggerButton}</Space>
            </div>
		</Dropdown>
	);
});

PrimaryDropdown.displayName = 'PrimaryDropdown';

export default PrimaryDropdown;
