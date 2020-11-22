import styled from 'styled-components';

export const StyledText = styled.p`
  font-family: ${(props: { fontFamily: string }) => `${props.fontFamily || 'Lato'}`};
  font-weight: ${(props: { fontWeigth: string }) => `${props.fontWeigth || 300}`};
  font-size: ${(props: { fontSize: string }) => `${props.fontSize || '1.2rem'}`};
  color: ${(props: { color: string }) => `${props.color || '#fff'}`};
  width: ${(props: { width: string }) => `${props.width || '40'}%`};
  margin: 0 auto;
`;
