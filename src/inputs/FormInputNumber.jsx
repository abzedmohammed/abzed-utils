import { Form, InputNumber } from "antd";

export const FormInputNumber = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName,
    required = true,
    readOnly,
    prefix,
    suffix,
    formatter,
    parser,
    extraRules = [],
    min,
    max,
}) => {
    return (
        <Form.Item
            rules={[
                {
                    required: required,
                    message: "Field is required",
                },
                ...extraRules,
            ]}
            name={inputName}
            className={className}
            label={label}
        >
            <InputNumber
                min={min}
                max={max}
                formatter={formatter}
                parser={parser}
                prefix={prefix}
                suffix={suffix}
                className={inputClassName}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </Form.Item>
    );
};
