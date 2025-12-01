import { Form, Input } from "antd";

export const FormInputEmail = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName,
    required = true,
    readOnly,
    prefix,
    suffix,
    extraRules = [],
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
            className={className}
            name={inputName}
            label={label}
        >
            <Input
                prefix={prefix}
                suffix={suffix}
                readOnly={readOnly}
                className={inputClassName}
                type="email"
                placeholder={placeholder}
            />
        </Form.Item>
    );
}
