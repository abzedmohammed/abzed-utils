import { Input } from "antd";

export const OTPInput = ({
    setotp,
    length = 4,
    className = "flex items-center justify-center",
    otpClassName,
}) => {
    const onChange = (text) => {
        setotp(text);
    };

    const sharedProps = {
        onChange,
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
