import { Input } from "antd";
import PropTypes from "prop-types";
import { defaultInputStyle } from "../utils";

export const NormalInput = ({
    label,
    value,
    inputName,
    recordKey,
    placeholder,
    inputClassName,
    onValueChange,
    readOnly,
    onBlur = null,
    prefix = null,
    width = "100%",
    gap = ".5rem",
    disabled = false,
}) => {
    return (
        <div style={defaultInputStyle({ width, gap })}>
            {label && <label>{label}</label>}
            <Input
                prefix={prefix}
                readOnly={readOnly}
                value={value}
                onChange={(e) => onValueChange?.(e.target.value, inputName, recordKey)}
                className={inputClassName}
                placeholder={placeholder}
                onBlur={onBlur}
                disabled={disabled}
            />
        </div>
    );
};

NormalInput.propTypes = {
    label: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inputName: PropTypes.string,
    recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    inputClassName: PropTypes.string,
    onValueChange: PropTypes.func,
    readOnly: PropTypes.bool,
    onBlur: PropTypes.func,
    prefix: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
};
