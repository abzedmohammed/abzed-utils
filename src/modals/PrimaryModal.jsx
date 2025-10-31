import { Modal } from 'antd';
import ModalHeader from './ModalHeader';

export default function PrimaryModal({
	header,
	hideHeader=false,
	body = 'MODAL BODY CONTENT',
	open,
	handleCancel,
	width,
}) {
	return (
		<>
			<Modal
				footer={null}
				closeIcon={false}
				onCancel={handleCancel}
				className='primary_modal'
				centered
				width={width ?? '29rem'}
				open={open}>
				{hideHeader ? null : <ModalHeader handleClick={handleCancel} text={header} />}
				{body}
			</Modal>
		</>
	);
}
