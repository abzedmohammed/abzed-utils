import { Form } from "antd";
import PropTypes from "prop-types";
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
    disabled = false,
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
                disabled={disabled}
            />
        </Form.Item>
    );
};

FormInputPhone.propTypes = {
    flags: PropTypes.object,
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    className: PropTypes.string,
    required: PropTypes.bool,
    inputClassName: PropTypes.string,
    defaultCountry: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    extraRules: PropTypes.arrayOf(PropTypes.object),
};
