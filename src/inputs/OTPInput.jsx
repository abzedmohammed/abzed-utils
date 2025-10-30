import { Input } from "antd";

export const OTPInput = ({ setotp }) => {
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
                    length={4}
                    formatter={(str) => str.toUpperCase()}
                    {...sharedProps}
                />
            </div>
        </>
    );
}
