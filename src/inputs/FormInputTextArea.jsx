import { Form } from "antd";
import PropTypes from "prop-types";
import TextArea from "antd/es/input/TextArea";

export const FormInputTextArea = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName = "primary_input_textarea",
    required = true,
    rows = 3,
    readOnly,
    disabled,
    extraRules = [],
    cols
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
            <TextArea
                disabled={disabled}
                readOnly={readOnly}
                rows={rows}
                cols={cols}
                className={inputClassName}
                placeholder={placeholder}
            />
        </Form.Item>
    );
};

FormInputTextArea.propTypes = {
    label: PropTypes.node,
    inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.number,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    extraRules: PropTypes.arrayOf(PropTypes.object),
    cols: PropTypes.number,
};
