import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledCircle } from './styles';

interface IProps {
  icon?: any;
  containerSytle?: Record<string, unknown>;
  iconStyle?: Record<string, unknown>;
  color?: string;
  children?: React.ReactNode;
}

const CircleIcon: React.FC<IProps> = ({ icon, iconStyle, containerSytle, color }) => (
  <StyledCircle containerStyle={containerSytle}>
    <FontAwesomeIcon icon={icon} style={iconStyle} color={color} />
  </StyledCircle>
);

export default CircleIcon;
