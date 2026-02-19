import { Input } from "antd";
import PropTypes from "prop-types";

export const OTPInput = ({
    setotp,
    onChange,
    length = 4,
    className = "flex items-center justify-center",
    otpClassName,
}) => {
    const handleChange = (text) => {
        onChange?.(text);
        setotp?.(text);
    };

    const sharedProps = {
        onChange: handleChange,
    };

    return (
        <>
            <div className={className}>
                <Input.OTP
                    className={otpClassName}
                    length={length}
                    formatter={(str) => str.toUpperCase()}
                    {...sharedProps}
                />
            </div>
        </>
    );
};

OTPInput.propTypes = {
    setotp: PropTypes.func,
    onChange: PropTypes.func,
    length: PropTypes.number,
    className: PropTypes.string,
    otpClassName: PropTypes.string,
};
