import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'react-bootstrap/Container';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import CenterComponent from '../shared/CenterComponent';
import Divider from '../shared/Divider';
import Text from '../shared/Text';
import Button from '../shared/Button';

import { StyledGatsbyImage, StyledTitle, ButtonContainer, IconsContainer } from './styles';
import CircleIcon from '../shared/CircleIcon';

const Intro: React.FC = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "profile_img.jpg" }) {
        id
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const openNewTab = (url: string): any => {
    return window.open(url, '_blank');
  };

  return (
    <Container>
      <CenterComponent>
        <StyledGatsbyImage
          fixed={data.image.childImageSharp.fixed}
          alt="Vitor Martins Profile Photo"
          fadeIn
        />
        <StyledTitle>Vitor Martins</StyledTitle>
        <Divider width={35} />
        <Text>
          Hey I’m Vitor! I’m a Software Engineer specialized in Web and Mobile Development.
        </Text>
        <Divider width={25} />
        <ButtonContainer>
          <Button type="pill" outlined>
            About
          </Button>
          <Button type="pill" outlined>
            Projects
          </Button>
          <Button type="pill" outlined>
            Contact
          </Button>
        </ButtonContainer>
        <IconsContainer>
          <CircleIcon
            onClick={() => openNewTab('https://www.linkedin.com/in/martinsvitor/')}
            icon={faLinkedinIn}
            color="#fff"
          />
          <CircleIcon
            onClick={() => openNewTab('https://github.com/mrtins')}
            icon={faGithub}
            color="#fff"
          />
          <CircleIcon
            onClick={() => openNewTab('https://twitter.com/mrtinsvitor')}
            icon={faTwitter}
            color="#fff"
          />
          <CircleIcon
            onClick={() => openNewTab('mailto:vitorfigmartins@gmail.com')}
            icon={faEnvelope}
            color="#fff"
          />
        </IconsContainer>
      </CenterComponent>
    </Container>
  );
};

export default Intro;
