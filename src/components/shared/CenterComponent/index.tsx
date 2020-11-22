import React, { ReactNode } from 'react';

import { Center } from './styles';

interface IProps {
  children: ReactNode;
}

const CenterComponent: React.FC<IProps> = ({ children }) => <Center>{children}</Center>;

export default CenterComponent;
