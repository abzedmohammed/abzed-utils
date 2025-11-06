import { Modal } from "antd";

export const PrimaryModal = ({
    hideHeader = false,
    body = "MODAL BODY CONTENT",
    open,
    handleCancel,
    width,
    className,
	modalHeader,
}) => {
    return (
        <>
            <Modal
                footer={null}
                closeIcon={false}
                onCancel={handleCancel}
                className={className}
                centered
                width={width ?? "29rem"}
                open={open}
            >
                {hideHeader ? null : (
                    modalHeader
                )}
                {body}
            </Modal>
        </>
    );
}
