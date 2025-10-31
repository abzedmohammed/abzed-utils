import { DeleteModalSvg } from '../../svgs';
import { DynamicBtn } from '../dynamic';
import { PrimaryModal } from './';

export default function DeleteModal({
	open,
	handleCloseModal,
	deleteText,
	deleteHeaderText = 'Confrim Action',
	deleteFn,
	isProcessing,
}) {
	const textHeader = (
		<span className='txt_9375_semi text-[#F14142] text-center'>
			{deleteHeaderText}
		</span>
	);

	const text = (
		<span className='txt_875 text-[#4B5563] text-center'>{deleteText}</span>
	);

	return (
		<PrimaryModal
			open={open}
			handleCancel={handleCloseModal}
			hideHeader
			body={
				<div className='w-full fx_col_center p-[1.25rem] gap-[.94rem]'>
					<DeleteModalSvg />

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
							width={'6.25rem'}
						/>

						<DynamicBtn
							width={'12.0625rem'}
							handleClick={deleteFn}
							isProcessing={isProcessing}
							text='Delete'
							className='delete_main_btn'
						/>
					</div>
				</div>
			}
			width={'25rem'}
		/>
	);
}
