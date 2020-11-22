import styled from 'styled-components';

export const StyledDivider = styled.hr`
  border-top: 1px solid #3282b8;
  margin: 10px auto;
  width: ${(props: { width: string }) => `${props.width}vw`};
`;
