import { InputNumber } from "antd";
import { defaultInputStyle } from "../utils";

export const NormalInputNumber = ({
    label,
    value,
    inputName,
    recordKey,
    placeholder,
    inputClassName,
    onChange,
    onBlur = null,
    readOnly,
    prefix = null,
    width = "100%",
    gap = ".5rem",
    formatter,
    parser,
    min,
    max,
}) => {
    return (
        <div style={defaultInputStyle({ width, gap })}>
            <label>{label}</label>
            <InputNumber
                min={min}
                max={max}
                formatter={formatter}
                parser={parser}
                prefix={prefix}
                readOnly={readOnly}
                value={value}
                onChange={(val) => onChange(val, inputName, recordKey)}
                className={inputClassName}
                placeholder={placeholder}
                onBlur={onBlur}
            />
        </div>
    );
};
