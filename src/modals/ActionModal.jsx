import { PrimaryModal } from "./PrimaryModal";

export const ActionModal = ({
    open,
    handleCloseModal,
    iconComponent,
    headerComponent,
    buttonComponent,
    mainClass,
    width = "28rem",
}) => {
    return (
        <PrimaryModal
            open={open}
            handleCancel={handleCloseModal}
            hideHeader
            body={
                <div className={mainClass}>
                    {iconComponent}
                    {headerComponent}
                    {buttonComponent}
                </div>
            }
            width={width}
        />
    );
};
