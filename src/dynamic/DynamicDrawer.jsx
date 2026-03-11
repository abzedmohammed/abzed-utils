import { Drawer } from "antd";
import PropTypes from "prop-types";

export const DynamicDrawer = ({
    onClose,
    open,
    title,
    drawerBody,
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
            {drawerBody}
        </Drawer>
    );
};

DynamicDrawer.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.node,
    drawerBody: PropTypes.node.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placement: PropTypes.oneOf(["left", "right", "top", "bottom"]),
    className: PropTypes.string,
};
