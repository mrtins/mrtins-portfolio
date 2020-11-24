import React from 'react';

import { StyledTitle } from './styles';

interface IProps {
  style?: Record<string, unknown>;
}

const Title: React.FC<IProps> = (props) => <StyledTitle {...props} />;

export default Title;
