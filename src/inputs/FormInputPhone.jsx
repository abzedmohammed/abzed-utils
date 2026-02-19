import { Form } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export const FormInputPhone = ({
    flags,
    label,
    inputName,
    className,
    required = true,
    inputClassName,
    defaultCountry = "KE",
    readOnly,
    placeholder = "Enter phone number",
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
            getValueFromEvent={(value) => value}
        >
            <PhoneInput
                readOnly={readOnly}
                className={inputClassName}
                international
                flags={flags}
                defaultCountry={defaultCountry}
                placeholder={placeholder}
            />
        </Form.Item>
    );
};
