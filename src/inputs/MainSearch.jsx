import { Input } from "antd";
import PropTypes from "prop-types";

export const MainSearch = ({
    value,
    onSearchChange,
    placeholder,
    suffix,
    prefix,
    className = "max-w-full w-full lg:w-91",
}) => {
    return (
        <div className={className}>
            <Input
                value={value}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="main_search_input"
                placeholder={placeholder}
                suffix={suffix}
                prefix={prefix}
            />
        </div>
    );
};

MainSearch.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSearchChange: PropTypes.func,
    placeholder: PropTypes.string,
    suffix: PropTypes.node,
    prefix: PropTypes.node,
    className: PropTypes.string,
};
