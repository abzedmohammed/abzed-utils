import { Modal } from "antd";
import PropTypes from "prop-types";

export const PrimaryModal = ({
    hideHeader = false,
    children,
    open,
    onClose,
    width,
    className,
    header,
}) => {
    return (
        <>
            <Modal
                footer={null}
                closeIcon={false}
                onCancel={onClose}
                className={className}
                centered
                width={width ?? "29rem"}
                open={open}
            >
                {hideHeader ? null : (
                    header
                )}
                {children}
            </Modal>
        </>
    );
};

PrimaryModal.propTypes = {
    hideHeader: PropTypes.bool,
    children: PropTypes.node,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    header: PropTypes.node,
};
