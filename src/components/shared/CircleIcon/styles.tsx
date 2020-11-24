import styled, { css } from 'styled-components';

export const StyledCircle = styled.span`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #3282b8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${(props: any) =>
    props.hover &&
    css`
      &:hover {
        cursor: pointer;
        background-color: #007bff;
        transition: 0.5s;
      }
    `}
`;
