import { Form, Input } from "antd";

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
}
