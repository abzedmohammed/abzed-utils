import { PrimaryModal } from "./PrimaryModal";
import PropTypes from "prop-types";

export const ActionModal = ({
    open,
    onClose,
    icon,
    header,
    actions,
    mainClass,
    width = "28rem",
}) => {
    return (
        <PrimaryModal
            open={open}
            onClose={onClose}
            hideHeader
            width={width}
        >
            <div className={mainClass}>
                {icon}
                {header}
                {actions}
            </div>
        </PrimaryModal>
    );
};

ActionModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    icon: PropTypes.node,
    header: PropTypes.node,
    actions: PropTypes.node,
    mainClass: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
