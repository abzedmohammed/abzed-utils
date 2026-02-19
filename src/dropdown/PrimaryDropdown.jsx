import { Dropdown, Space } from "antd";
import { forwardRef } from 'react';
import { defaultDropdownOverlayStyle } from "../utils";

const PrimaryDropdown = forwardRef(({
	items,
	triggerButton,
	overlayStyle = defaultDropdownOverlayStyle,
	placement = 'bottom',
    trigger = ['click'],
    className,
    overlayClassName,
    disabled,
    onOpenChange,
}, ref) => {
    const normalizedTrigger = Array.isArray(trigger) ? trigger : [trigger];
    const overlayClassNameIsString = typeof overlayClassName === 'string';
    const resolvedOverlayClassName = overlayClassNameIsString
        ? overlayClassName
        : undefined;
    const resolvedOverlayStyle =
        overlayClassName &&
        typeof overlayClassName === 'object' &&
        !Array.isArray(overlayClassName)
            ? overlayClassName
            : overlayStyle;

	return (
        <Dropdown
			ref={ref}
			disabled={disabled}
			onOpenChange={onOpenChange}
			className={className}
			trigger={normalizedTrigger}
			placement={placement}
			menu={{ items }}
            overlayClassName={resolvedOverlayClassName}
            overlayStyle={resolvedOverlayStyle}
		>
            <div onClick={(e) => e.preventDefault()}>
                <Space>{triggerButton}</Space>
            </div>
		</Dropdown>
	);
});

PrimaryDropdown.displayName = 'PrimaryDropdown';

export default PrimaryDropdown;
