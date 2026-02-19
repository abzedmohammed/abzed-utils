import { InputNumber } from "antd";
import PropTypes from "prop-types";
import { defaultInputStyle } from "../utils";

export const NormalInputNumber = ({
    label,
    value,
    inputName,
    recordKey,
    placeholder,
    inputClassName,
    onChange,
    onValueChange,
    onBlur = null,
    readOnly,
    prefix = null,
    width = "100%",
    gap = ".5rem",
    formatter,
    parser,
    min,
    max,
    disabled = false,
}) => {
    const resolvedOnChange = onValueChange ?? onChange;

    return (
        <div style={defaultInputStyle({ width, gap })}>
            {label && <label>{label}</label>}
            <InputNumber
                min={min}
                max={max}
                formatter={formatter}
                parser={parser}
                prefix={prefix}
                readOnly={readOnly}
                value={value}
                onChange={(val) => resolvedOnChange?.(val, inputName, recordKey)}
                className={inputClassName}
                placeholder={placeholder}
                onBlur={onBlur}
                disabled={disabled}
            />
        </div>
    );
};

NormalInputNumber.propTypes = {
    label: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inputName: PropTypes.string,
    recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    onValueChange: PropTypes.func,
    onBlur: PropTypes.func,
    readOnly: PropTypes.bool,
    prefix: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    formatter: PropTypes.func,
    parser: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
};
