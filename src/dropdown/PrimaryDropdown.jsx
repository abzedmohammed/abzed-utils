import { Dropdown, Space } from "antd";
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { defaultDropdownOverlayStyle } from "../utils";

const PrimaryDropdown = forwardRef(({
	items = [],
	triggerButton,
	children,
	overlayStyle = defaultDropdownOverlayStyle,
	placement = 'bottom',
    trigger = ['click'],
    className,
    overlayClassName,
    classNames,
    styles,
    disabled,
    onOpenChange,
    onToggle,
}, ref) => {
    const normalizedTrigger = Array.isArray(trigger) ? trigger : [trigger];
    const resolvedTriggerButton = children ?? triggerButton;
    const resolvedOnOpenChange = onOpenChange ?? onToggle;
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
    const resolvedClassNames = resolvedOverlayClassName
        ? {
              root: resolvedOverlayClassName,
              ...(classNames ?? {}),
          }
        : classNames;
    const resolvedStyles = resolvedOverlayStyle
        ? {
              root: resolvedOverlayStyle,
              ...(styles ?? {}),
          }
        : styles;

	return (
        <Dropdown
			ref={ref}
			disabled={disabled}
			onOpenChange={resolvedOnOpenChange}
			className={className}
			trigger={normalizedTrigger}
			placement={placement}
			menu={{ items }}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
		>
            <div onClick={(e) => e.preventDefault()}>
                <Space>{resolvedTriggerButton}</Space>
            </div>
		</Dropdown>
	);
});

PrimaryDropdown.displayName = 'PrimaryDropdown';

PrimaryDropdown.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			label: PropTypes.node,
			disabled: PropTypes.bool,
		})
	),
	triggerButton: PropTypes.node,
	children: PropTypes.node,
	overlayStyle: PropTypes.object,
	placement: PropTypes.oneOf([
		'top',
		'topLeft',
		'topRight',
		'bottom',
		'bottomLeft',
		'bottomRight',
	]),
	trigger: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.oneOf(['click', 'hover', 'contextMenu'])),
		PropTypes.oneOf(['click', 'hover', 'contextMenu']),
	]),
	className: PropTypes.string,
	overlayClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	classNames: PropTypes.object,
	styles: PropTypes.object,
	disabled: PropTypes.bool,
	onOpenChange: PropTypes.func,
	onToggle: PropTypes.func,
};

export default PrimaryDropdown;
