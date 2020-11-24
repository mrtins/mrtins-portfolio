import React, { ReactNode } from 'react';

import { Center } from './styles';

interface IProps {
  children: ReactNode;
  style?: Record<string, unknown>;
}

const CenterComponent: React.FC<IProps> = ({ children, ...props }) => (
  <Center {...props}>{children}</Center>
);

export default CenterComponent;
