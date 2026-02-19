import { Input } from "antd";
import PropTypes from "prop-types";

export const MainSearch = ({
    value,
    handleSearchChange,
    onSearchChange,
    placeholder,
    suffix,
    prefix,
    className = "max-w-full w-full lg:w-91",
}) => {
    const resolvedOnSearchChange = onSearchChange ?? handleSearchChange;

    return (
        <div className={className}>
            <Input
                value={value}
                onChange={(e) => resolvedOnSearchChange?.(e.target.value)}
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
    handleSearchChange: PropTypes.func,
    onSearchChange: PropTypes.func,
    placeholder: PropTypes.string,
    suffix: PropTypes.node,
    prefix: PropTypes.node,
    className: PropTypes.string,
};
