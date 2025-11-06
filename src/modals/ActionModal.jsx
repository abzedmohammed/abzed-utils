import { DynamicBtn } from "../dynamic";
import { PrimaryModal } from "./PrimaryModal";

export const ActionModal = ({
    open,
    handleCloseModal,
    confirmText,
    confirmHeaderText = "Confrim Action",
    confirmFn,
    isProcessing,
    infoSvg,
    mainClass,
    iconCLass,
    headerClass,
    textHeaderClass,
    textClass,
    mainBtnClass,
    cancelBtnClass,
    proceedBtnClass,
    width = "28rem",
}) => {
    const textHeader = (
        <span className={textHeaderClass}>{confirmHeaderText}</span>
    );

    const text = <span className={textClass}>{confirmText}</span>;

    return (
        <PrimaryModal
            open={open}
            handleCancel={handleCloseModal}
            hideHeader
            body={
                <div className={mainClass}>
                    <div className={iconCLass}>{infoSvg}</div>

                    <div className={headerClass}>
                        {textHeader}
                        {text}
                    </div>

                    <div className={mainBtnClass}>
                        <DynamicBtn
                            className={cancelBtnClass}
                            disabled={isProcessing}
                            handleClick={handleCloseModal}
                            text="Cancel"
                            width={"11.25rem"}
                        />

                        <DynamicBtn
                            width={"11.25rem"}
                            handleClick={confirmFn}
                            isProcessing={isProcessing}
                            text="Proceed"
                            className={proceedBtnClass}
                        />
                    </div>
                </div>
            }
            width={width}
        />
    );
};
