import { PrimaryModal } from "./PrimaryModal";
import PropTypes from "prop-types";

export const ActionModal = ({
    open,
    handleCloseModal,
    onClose,
    iconComponent,
    icon,
    headerComponent,
    header,
    buttonComponent,
    actions,
    mainClass,
    width = "28rem",
}) => {
    const resolvedOnClose = onClose ?? handleCloseModal;
    const resolvedIcon = icon ?? iconComponent;
    const resolvedHeader = header ?? headerComponent;
    const resolvedActions = actions ?? buttonComponent;

    return (
        <PrimaryModal
            open={open}
            onClose={resolvedOnClose}
            hideHeader
            body={
                <div className={mainClass}>
                    {resolvedIcon}
                    {resolvedHeader}
                    {resolvedActions}
                </div>
            }
            width={width}
        />
    );
};

ActionModal.propTypes = {
    open: PropTypes.bool,
    handleCloseModal: PropTypes.func,
    onClose: PropTypes.func,
    iconComponent: PropTypes.node,
    icon: PropTypes.node,
    headerComponent: PropTypes.node,
    header: PropTypes.node,
    buttonComponent: PropTypes.node,
    actions: PropTypes.node,
    mainClass: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
