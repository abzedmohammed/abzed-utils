import { Drawer } from "antd";

export const DynamicDrawer = ({
    handleClose,
    open,
    drawerTitle,
    drawerBody,
    width = "22.5rem",
    placement = "right",
    size = "large",
}) => {
    return (
        <Drawer
            width={width}
            className="primary_drawer"
            placement={placement}
            size={size}
            onClose={handleClose}
            open={open}
        >
            {drawerTitle}
            {drawerBody}
        </Drawer>
    );
};
