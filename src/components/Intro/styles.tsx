import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledGatsbyImage = styled(Img)`
  border-radius: 50%;
  display: block;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const StyledTitle = styled.h1`
  font-family: 'Raleway';
  font-weight: 300;
  font-size: 2.5rem;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
