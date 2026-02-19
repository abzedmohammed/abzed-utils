import { Form, InputNumber } from "antd";
import PropTypes from "prop-types";

export const FormInputNumber = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName,
    required = true,
    readOnly,
    prefix,
    suffix,
    formatter,
    parser,
    extraRules = [],
    min,
    max,
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
            <InputNumber
                min={min}
                max={max}
                formatter={formatter}
                parser={parser}
                prefix={prefix}
                suffix={suffix}
                className={inputClassName}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </Form.Item>
    );
};

FormInputNumber.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    formatter: PropTypes.func,
    parser: PropTypes.func,
    extraRules: PropTypes.arrayOf(PropTypes.object),
    min: PropTypes.number,
    max: PropTypes.number,
};
