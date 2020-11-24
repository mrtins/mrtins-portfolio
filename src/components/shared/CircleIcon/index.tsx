import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledCircle } from './styles';

interface IProps {
  icon?: any;
  containerStyle?: Record<string, unknown>;
  iconStyle?: Record<string, unknown>;
  color?: string;
  hover?: boolean;
  children?: React.ReactNode;
  onClick?: any;
}

const CircleIcon: React.FC<IProps> = ({
  icon,
  iconStyle,
  containerStyle,
  color,
  onClick,
  hover = true,
}) => (
  <StyledCircle containerStyle={containerStyle} onClick={onClick} hover={hover}>
    <FontAwesomeIcon icon={icon} style={iconStyle} color={color} />
  </StyledCircle>
);

export default CircleIcon;
