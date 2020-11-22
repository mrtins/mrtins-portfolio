import React, { ReactNode } from 'react';

import { StyledButton } from './styles';

interface IProps {
  type?: 'pill' | 'square' | 'round';
  outlined?: boolean;
  style?: Record<string, unknown>;
  children?: ReactNode;
  handleClick?: any;
}

const Button: React.FC<IProps> = ({ children, handleClick, ...props }) => (
  <StyledButton onClick={handleClick} {...props}>
    {children}
  </StyledButton>
);

export default Button;
