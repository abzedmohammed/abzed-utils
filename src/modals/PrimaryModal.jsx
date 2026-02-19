import { Modal } from "antd";
import PropTypes from "prop-types";

export const PrimaryModal = ({
    hideHeader = false,
    body = "MODAL BODY CONTENT",
    children,
    open,
    handleCancel,
    onCancel,
    onClose,
    width,
    className,
	modalHeader,
    header,
}) => {
    const resolvedOnClose = onClose ?? onCancel ?? handleCancel;
    const resolvedHeader = header ?? modalHeader;
    const resolvedBody = children ?? body;

    return (
        <>
            <Modal
                footer={null}
                closeIcon={false}
                onCancel={resolvedOnClose}
                className={className}
                centered
                width={width ?? "29rem"}
                open={open}
            >
                {hideHeader ? null : (
                    resolvedHeader
                )}
                {resolvedBody}
            </Modal>
        </>
    );
};

PrimaryModal.propTypes = {
    hideHeader: PropTypes.bool,
    body: PropTypes.node,
    children: PropTypes.node,
    open: PropTypes.bool,
    handleCancel: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    modalHeader: PropTypes.node,
    header: PropTypes.node,
};
