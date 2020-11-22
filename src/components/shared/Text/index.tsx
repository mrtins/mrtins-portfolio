import React from 'react';

import { StyledText } from './styles';

interface IProps {
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  color?: string;
  width?: string;
}

const Text: React.FC<IProps> = (props) => <StyledText {...props} />;

export default Text;
