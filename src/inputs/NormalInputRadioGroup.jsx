import { Radio } from "antd";
import PropTypes from "prop-types";
import { defaultInputStyle } from "../utils";

export const NormalInputRadioGroup = ({
    label,
    value,
    inputName,
    recordKey,
    onValueChange,
    options = [],
    disabled,
    className,
    width = "100%",
    gap = ".5rem",
}) => {
    return (
        <div style={defaultInputStyle({ width, gap })}>
            {label && <label>{label}</label>}
            <Radio.Group
                className={className}
                disabled={disabled}
                onChange={(e) => onValueChange?.(e.target.value, inputName, recordKey)}
                value={value}
                options={options}
            />
        </div>
    );
};

NormalInputRadioGroup.propTypes = {
    label: PropTypes.node,
    value: PropTypes.any,
    inputName: PropTypes.string,
    recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onValueChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.any,
            disabled: PropTypes.bool,
        })
    ),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
