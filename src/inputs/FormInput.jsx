import { Form, Input } from "antd";
import PropTypes from "prop-types";

export const FormInput = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName,
    required = true,
    disabled = false,
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
            name={inputName}
            className={className}
            label={label}
        >
            <Input
                prefix={prefix}
                suffix={suffix}
                autoComplete="off"
                readOnly={readOnly}
                disabled={disabled}
                className={inputClassName}
                placeholder={placeholder}
            />
        </Form.Item>
    );
};

FormInput.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    extraRules: PropTypes.arrayOf(PropTypes.object),
};
