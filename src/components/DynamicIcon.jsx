//If you need to render icons dynamically, you can store the icon components in an object
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';

const DynamicIcon = ({ iconName, size, color }) => {
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent size={size} color={color} /> : null;
};

DynamicIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
}

export default DynamicIcon;
