import { Form } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

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
    const [value, setValue] = useState("");

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
            <PhoneInput
                readOnly={readOnly}
                className={inputClassName}
                international
                flags={flags}
                defaultCountry={defaultCountry}
                value={value}
                onChange={setValue}
                placeholder={placeholder}
            />
        </Form.Item>
    );
}
