import { Checkbox, Form } from "antd";
import PropTypes from "prop-types";

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
};

FormInputCheckbox.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    className: PropTypes.string,
    checkboxClass: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    extraRules: PropTypes.arrayOf(PropTypes.object),
};
