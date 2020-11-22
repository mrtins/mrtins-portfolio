import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledCircle } from './styles';

interface IProps {
  icon?: any;
  containerSytle?: Record<string, unknown>;
  iconStyle?: Record<string, unknown>;
  color?: string;
  children?: React.ReactNode;
  onClick?: any;
}

const CircleIcon: React.FC<IProps> = ({ icon, iconStyle, containerSytle, color, onClick }) => (
  <StyledCircle containerStyle={containerSytle} onClick={onClick}>
    <FontAwesomeIcon icon={icon} style={iconStyle} color={color} />
  </StyledCircle>
);

export default CircleIcon;
