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
}) => {
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
            <InputNumber
                prefix={prefix}
                suffix={suffix}
                className={inputClassName}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </Form.Item>
    );
}
