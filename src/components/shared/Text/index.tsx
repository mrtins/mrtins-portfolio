import React from 'react';

import { StyledText } from './styles';

interface IProps {
  style?: Record<string, unknown>;
}

const Text: React.FC<IProps> = (props) => <StyledText {...props} />;

export default Text;
