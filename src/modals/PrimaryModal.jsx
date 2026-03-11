import { Modal } from "antd";
import PropTypes from "prop-types";

export const PrimaryModal = ({
    hideHeader = false,
    body,
    open,
    onCancel,
    onClose,
    width,
    className,
    header,
}) => {
    const resolvedOnCancel = onCancel ?? onClose;

    return (
        <Modal
            footer={null}
            closeIcon={false}
            onCancel={resolvedOnCancel}
            className={className}
            centered
            width={width ?? "29rem"}
            open={open}
        >
            {hideHeader ? null : header}
            {body}
        </Modal>
    );
};

PrimaryModal.propTypes = {
    hideHeader: PropTypes.bool,
    body: PropTypes.node.isRequired,
    open: PropTypes.bool,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    header: PropTypes.node,
};
