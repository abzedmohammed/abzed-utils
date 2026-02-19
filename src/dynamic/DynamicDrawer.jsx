import { Drawer } from "antd";
import PropTypes from "prop-types";

export const DynamicDrawer = ({
    handleClose,
    onClose,
    open,
    drawerTitle,
    title,
    drawerBody,
    children,
    size = "22.5rem",
    width,
    placement = "right",
    className = "primary_drawer",
    ...drawerProps
}) => {
    const resolvedSize = width ?? size;
    const resolvedOnClose = onClose ?? handleClose;
    const resolvedTitle = title ?? drawerTitle;
    const resolvedBody = children ?? drawerBody;

    return (
        <Drawer
            rootClassName={className}
            placement={placement}
            size={resolvedSize}
            onClose={resolvedOnClose}
            open={open}
            {...drawerProps}
        >
            {resolvedTitle}
            {resolvedBody}
        </Drawer>
    );
};

DynamicDrawer.propTypes = {
    handleClose: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    drawerTitle: PropTypes.node,
    title: PropTypes.node,
    drawerBody: PropTypes.node,
    children: PropTypes.node,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placement: PropTypes.oneOf(["left", "right", "top", "bottom"]),
    className: PropTypes.string,
};
