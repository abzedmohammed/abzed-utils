import React from 'react';
import { DynamicBtn } from '../dynamic';
import { CloseSvg } from '../../svgs';

export default function ModalHeader({ text = 'Modal Header', handleClick }) {
	return (
		<div className='modal_header'>
			<span>{text}</span>
			<DynamicBtn
				handleClick={handleClick}
				className={'plain_btn'}
				icon={<CloseSvg />}
			/>
		</div>
	);
}
