import { Input } from "antd";

export const MainSearch = ({
    value,
    handleSearchChange,
    placeholder,
    suffix,
    prefix,
    className = "max-w-full w-full lg:w-91",
}) => {
    return (
        <div className={className}>
            <Input
                value={value}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="main_search_input"
                placeholder={placeholder}
                suffix={suffix}
                prefix={prefix}
            />
        </div>
    );
};
