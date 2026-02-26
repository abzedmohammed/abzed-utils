import { Drawer } from "antd";
import PropTypes from "prop-types";

export const DynamicDrawer = ({
    onClose,
    open,
    title,
    children,
    size = "22.5rem",
    placement = "right",
    className = "primary_drawer",
    ...drawerProps
}) => {
    return (
        <Drawer
            rootClassName={className}
            placement={placement}
            onClose={onClose}
            open={open}
            size={size}
            {...drawerProps}
        >
            {title}
            {children}
        </Drawer>
    );
};

DynamicDrawer.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.node,
    children: PropTypes.node,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placement: PropTypes.oneOf(["left", "right", "top", "bottom"]),
    className: PropTypes.string,
};
