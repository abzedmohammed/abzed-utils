import { Checkbox, Form } from "antd";

export const FormInputCheckbox = ({
    label,
    inputName,
    className,
    checkboxClass,
    required = true,
    disabled,
}) => {
    return (
        <Form.Item
            rules={[
                {
                    required: required,
                    message: "Field is required",
                },
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
