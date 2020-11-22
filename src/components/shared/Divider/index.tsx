import React from 'react';

import { StyledDivider } from './styles';

interface IProps {
  width: number;
}

const Divider: React.FC<IProps> = ({ width }) => <StyledDivider width={width} />;

export default Divider;
