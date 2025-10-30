import { Form, Radio } from "antd";
import { useEffect, useState } from "react";

export const FormInputRadioGroup = ({
    label,
    inputName,
    className,
    radioValue,
    options=[],
    onRadioChange = null,
    required = true,
    inputClassName,
    disabled,
}) => {
    const [value, setvalue] = useState(radioValue);

    const onChange = (e) => {
        setvalue(e.target.value);
        if (onRadioChange !== null) {
            onRadioChange(e.target.value);
        }
    };

    useEffect(() => {
        setvalue(radioValue);
    }, [radioValue]);

    return (
        <Form.Item
            rules={[
                {
                    required: required,
                    message: "Field is required",
                },
            ]}
            name={inputName}
            className={className}
            label={label}
        >
            <Radio.Group
                disabled={disabled}
                className={inputClassName}
                onChange={onChange}
                value={value}
                options={options}
            />
        </Form.Item>
    );
}
