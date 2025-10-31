import { InfoSvg } from '../../svgs';
import { DynamicBtn } from '../dynamic';
import { PrimaryModal } from './';

export default function ConfirmModal({
    open,
    handleCloseModal,
    confirmText,
    confirmHeaderText = 'Confrim Action',
    confirmFn,
    isProcessing,
}) {
    const textHeader = (
        <span className='txt_9375_medium text-[#111827] text-center'>
            {confirmHeaderText}
        </span>
    );

    const text = (
        <span className='txt_875 text-[#4B5563] text-center'>{confirmText}</span>
    );

    return (
        <PrimaryModal
            open={open}
            handleCancel={handleCloseModal}
            hideHeader
            body={
                <div className='w-full fx_col_center px-[1.5rem] py-[1.88rem] gap-[.94rem]'>
                    <div className="confirm_icon_card">
                        <InfoSvg width={24} height={24} color='#FFB600' />
                    </div>

                    <div className='fx_col_center px-[1.25rem] gap-[.75rem] '>
                        {textHeader}
                        {text}
                    </div>

                    <div className='fx_item_center flex-wrap mt-[1.25rem] gap-[.62rem]'>
                        <DynamicBtn
                            className={'cancel_btn'}
                            disabled={isProcessing}
                            handleClick={handleCloseModal}
                            text='Cancel'
                            width={'11.25rem'}
                        />

                        <DynamicBtn
                            width={'11.25rem'}
                            handleClick={confirmFn}
                            isProcessing={isProcessing}
                            text='Proceed'
                            className='secondary_btn'
                        />
                    </div>
                </div>
            }
            width={'28rem'}
        />
    );
}
