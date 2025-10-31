import { useState } from "react";
import { DatePicker, Form } from "antd";

export const FormInputDatePicker = ({
    label,
    inputName,
    placeholder,
    className,
    inputClassName,
    required = true,
    readOnly = false,
    picker = "date",
    format = "DD/MM/YYYY",
    suffixIcon,
    maxDate,
    minDate
}) => {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (status) => {
        if (status) setOpen(true);
        else if (picker !== "time") setOpen(false);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const isTimePicker = picker === "time";
    const timeFormat = "hh:mm A";

    return (
        <Form.Item
            name={inputName}
            label={label}
            className={className}
            rules={[
                {
                    required: required,
                    message: "Field is required",
                },
            ]}
        >
            <DatePicker
                open={isTimePicker ? open : undefined}
                onOpenChange={handleOpenChange}
                onOk={isTimePicker ? handleOk : undefined}
                showTime={
                    isTimePicker
                        ? {
                              use12Hours: true,
                              format: timeFormat,
                          }
                        : undefined
                }
                format={isTimePicker ? timeFormat : format}
                suffixIcon={suffixIcon}
                readOnly={readOnly}
                placeholder={placeholder}
                className={inputClassName}
                picker={picker}
                maxDate={maxDate}
                minDate={minDate}
            />
        </Form.Item>
    );
}
