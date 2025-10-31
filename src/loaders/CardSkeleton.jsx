import { Skeleton } from 'antd';

export const CardSkeleton = ({ width, height }) => {
	return (
		<>
			<div className='w-full'>
            <Skeleton.Node active style={{ height: height, width: width }} />
			</div>
		</>
	);
}
