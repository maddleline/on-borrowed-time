import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ label }) => {
  return (
    <span className="absolute w-full top-0 z-10 contrast-text medium-caption">
      <Container className="grid__container border-l lg:border-gray-20 border-black">
        <Row className={`grid__row pt-5`}>
          <Col lg={3} md={4} sm={4} xs={4}>
            <Link to="/" className={`contrast-text`}>
              On Borrowed Time
            </Link>
          </Col>
          <Col lg={8} md={7} sm={7} xs={7}>
            <Link to="/" className="contrast-text">
              {label}
            </Link>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1}>
            <Link to="/index" className="contrast-text">
              Index
            </Link>
          </Col>
        </Row>
      </Container>
    </span>
  );
};

Header.defaultProps = {
  label: ''
};

Header.propTypes = {
  label: PropTypes.string
};

export default Header;
