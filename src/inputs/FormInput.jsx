import { Form, Input } from "antd";

export const FormInput = ({
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
            <Input
                prefix={prefix}
                suffix={suffix}
                autoComplete="off"
                readOnly={readOnly}
                className={inputClassName}
                placeholder={placeholder}
            />
        </Form.Item>
    );
};
