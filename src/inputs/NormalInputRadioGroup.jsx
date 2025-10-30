import { Radio } from "antd";
import { defaultInputStyle } from "../utils";

export const NormalInputRadioGroup = ({
    label,
    value,
    inputName,
    recordKey,
    onChange,
    options = [],
    disabled,
    className,
    width = "100%",
    gap = ".5rem",
}) => {
    return (
        <div style={defaultInputStyle({ width, gap })}>
            <label>{label}</label>
            <Radio.Group
                className={className}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value, inputName, recordKey)}
                value={value}
                options={options}
            />
        </div>
    );
}
