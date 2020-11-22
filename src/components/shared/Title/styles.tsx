import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-family: ${(props: { fontFamily: string }) => `${props.fontFamily || 'Raleway'}`};
  font-weight: ${(props: { fontWeigth: string }) => `${props.fontWeigth || 300}`};
  font-size: ${(props: { fontSize: string }) => `${props.fontSize || '2.5rem'}`};
  color: ${(props: { color: string }) => `${props.color || '#fff'}`};
  margin: 0 auto;
`;
