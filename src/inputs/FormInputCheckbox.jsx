import { Checkbox, Form } from "antd";

export const FormInputCheckbox = ({
    label,
    inputName,
    className,
    checkboxClass,
    required = true,
    disabled,
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
            valuePropName="checked"
        >
            <Checkbox disabled={disabled} className={checkboxClass}>
                {label}
            </Checkbox>
        </Form.Item>
    );
}
