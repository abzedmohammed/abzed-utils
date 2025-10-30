import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

export const FormInputTextArea = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName = "primary_input_textarea",
    required = true,
    rows = 3,
    readOnly,
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
            name={inputName}
            className={className}
            label={label}
        >
            <TextArea
                disabled={disabled}
                readOnly={readOnly}
                rows={rows}
                className={inputClassName}
                placeholder={placeholder}
            />
        </Form.Item>
    );
}
