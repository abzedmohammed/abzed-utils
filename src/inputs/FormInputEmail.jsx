import { Form, Input } from "antd";
import PropTypes from "prop-types";

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
};

FormInputEmail.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    extraRules: PropTypes.arrayOf(PropTypes.object),
};
