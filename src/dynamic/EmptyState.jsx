import { Empty } from 'antd';
import PropTypes from 'prop-types';

export const EmptyState = ({ className = 'w-full h-full', description, image }) => {
	return (
		<div className={className}>
			<Empty description={description} image={image} />
		</div>
	);
};

EmptyState.propTypes = {
	className: PropTypes.string,
	description: PropTypes.node,
	image: PropTypes.node,
};
