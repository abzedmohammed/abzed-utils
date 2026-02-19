import { Drawer } from "antd";

export const DynamicDrawer = ({
    handleClose,
    open,
    drawerTitle,
    drawerBody,
    width = "22.5rem",
    placement = "right",
}) => {
    return (
        <Drawer
            className="primary_drawer"
            placement={placement}
            width={width}
            onClose={handleClose}
            open={open}
        >
            {drawerTitle}
            {drawerBody}
        </Drawer>
    );
};
