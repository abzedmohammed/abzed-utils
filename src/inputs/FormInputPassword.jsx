import { Form, Input } from "antd";
import PropTypes from "prop-types";

export const FormInputPassword = ({
    label,
    inputName,
    placeholder,
    required = true,
    className,
    inputClassName,
    readOnly,
    prefix,
    suffix,
    iconRenderShow,
    iconRenderHide,
    showIconRender,
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
            <Input.Password
                className={inputClassName}
                variant="borderless"
                placeholder={placeholder}
                readOnly={readOnly}
                prefix={prefix}
                suffix={suffix}
                {...(showIconRender && {
                    iconRender: (visible) =>
                        visible ? iconRenderHide : iconRenderShow,
                })}
            />
        </Form.Item>
    );
};

FormInputPassword.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    readOnly: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    iconRenderShow: PropTypes.node,
    iconRenderHide: PropTypes.node,
    showIconRender: PropTypes.bool,
    extraRules: PropTypes.arrayOf(PropTypes.object),
};
