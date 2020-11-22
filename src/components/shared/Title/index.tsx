import React from 'react';

import { StyledTitle } from './styles';

interface IProps {
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  color?: string;
}

const Title: React.FC<IProps> = (props) => <StyledTitle {...props} />;

export default Title;
