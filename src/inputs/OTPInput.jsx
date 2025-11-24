import { Input } from "antd";

export const OTPInput = ({ setotp, length=4 }) => {
    const onChange = (text) => {
        setotp(text);
    };

    const sharedProps = {
        onChange,
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <Input.OTP
                    length={length}
                    formatter={(str) => str.toUpperCase()}
                    {...sharedProps}
                />
            </div>
        </>
    );
}
