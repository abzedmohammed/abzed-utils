import { Form, Radio } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const FormInputRadioGroup = ({
    label,
    inputName,
    className,
    radioValue,
    options=[],
    onRadioChange = null,
    onValueChange,
    required = true,
    inputClassName,
    disabled,
    extraRules = [],
}) => {
    const [value, setvalue] = useState(radioValue);

    const resolvedOnChange = onValueChange ?? onRadioChange;

    const handleChange = (e) => {
        setvalue(e.target.value);
        if (resolvedOnChange !== null) {
            resolvedOnChange(e.target.value);
        }
    };

    useEffect(() => {
        setvalue(radioValue);
    }, [radioValue]);

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
            <Radio.Group
                disabled={disabled}
                className={inputClassName}
                onChange={handleChange}
                value={value}
                options={options}
            />
        </Form.Item>
    );
};

FormInputRadioGroup.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    className: PropTypes.string,
    radioValue: PropTypes.any,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.any,
            disabled: PropTypes.bool,
        })
    ),
    onRadioChange: PropTypes.func,
    onValueChange: PropTypes.func,
    required: PropTypes.bool,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    extraRules: PropTypes.arrayOf(PropTypes.object),
};
