import { Col, Container, Row } from 'react-grid-system';

import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div className="Home h-auto bg-gray-100">
      <Container
        className="grid__container sticky top-0"
        style={{ borderLeft: '1px solid #8D8D8D' }}
      >
        <Row className="grid__row pt-5">
          <Col md={3} className="medium-caption">
            <Link to="/">On Borrowed Time</Link>
          </Col>
          <Col md={8} className="medium-caption">
            <Link>Theme</Link>
          </Col>
          <Col md={1} className="medium-caption">
            <Link to="/index">Index</Link>
          </Col>
        </Row>
      </Container>

      <Container
        className="grid__container"
        style={{ borderLeft: '1px solid #8D8D8D' }}
      >
        <Row className="grid__row pt-64 pb-24">
          <Col md={1} />
          <Col
            md={11}
            className="large-headline"
            style={{ textIndent: `calc(200%/11)` }} // indent 2/11 columns
          >
            Praesent eget magna purus. Aliquam imperdiet tincidunt enim, ac
            molestie dolor elementum ac. Duis eget velit quis magna suscipit
            commodo id vel odio. Sed placerat feugiat est et mattis.
            <br />
            <br />
          </Col>
          <Col md={1} />
          <Col
            md={11}
            className="large-headline"
            style={{ textIndent: `calc(200%/11)` }} // indent 2/11 columns
          >
            Pellentesque vel sollicitudin nunc, sit amet porta turpis. In eget
            fringilla nunc. Nullam vel mauris at nibh interdum fringilla. Sed
            convallis, ipsum non semper interdum, lacus dui gravida tellus, sed
            aliquam tellus ipsum ac est.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
