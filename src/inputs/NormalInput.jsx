import { Input } from "antd";
import { defaultInputStyle } from "../utils";

export const NormalInput = ({
    label,
    value,
    inputName,
    recordKey,
    placeholder,
    inputClassName,
    onChange,
    readOnly,
    onBlur = null,
    prefix = null,
    width = "100%",
    gap = ".5rem",
}) => {
    return (
        <div style={defaultInputStyle({ width, gap })}>
            {label && <label>{label}</label>}
            <Input
                prefix={prefix}
                readOnly={readOnly}
                value={value}
                onChange={(e) => onChange(e.target.value, inputName, recordKey)}
                className={inputClassName}
                placeholder={placeholder}
                onBlur={onBlur}
            />
        </div>
    );
}
