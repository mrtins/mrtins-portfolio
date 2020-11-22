import React, { ReactNode } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

import { StyledFooter, StyledCopyright } from './styles';

import Navbar from '../Navbar';

interface IProps {
  children: ReactNode;
  pageInfo: { pageName: string };
}

const Layout: React.FC<IProps> = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Container fluid className="px-0 main">
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        {/* <Container fluid className="px-0">
          <Row noGutters> */}
        <StyledFooter>
          <StyledCopyright>Vitor Martins ©2020</StyledCopyright>
        </StyledFooter>
        {/* </Row>
        </Container> */}
      </>
    )}
  />
);

export default Layout;
