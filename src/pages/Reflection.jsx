import { Col, Container, Row } from 'react-grid-system';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import HeaderSpacer from '../components/HeaderSpacer';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Reflection = ({
  reflection,
  nextParams,
  changingParam,
  next,
  nextBackground,
  isTransitioning,
  setIsTransitioning,
  navigateTo,
  setNextBackground
}) => {
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(isTransitioning);
  }, [isTransitioning]);

  useEffect(() => {
    setIsTransitioning(false);
    setNextBackground(null);
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  }, [reflection]);

  const onFooterClick = () => {
    setIsTransitioning(true);
    setClicked(true);
  };

  return (
    <>
      {/* Backgrounds for page transition */}
      <div
        className={`h-screen bg-${nextBackground} bg-center bg-no-repeat bg-cover absolute top-0 w-full`}
      >
        <div
          className={`h-screen bg-black absolute top-0 w-full ${
            isClicked ? 'screen-shrink' : ''
          }`}
        />
      </div>

      <div className="h-auto bg-black">
        <Container className="grid__container min-h-screen">
          <HeaderSpacer />

          {/* Final Reflection */}
          <div
            id="overflow-container"
            className={`${isClicked ? 'fade-out' : 'foreground-fade-in'}`}
          >
            <Row className="grid__row pt-64 pb-40">
              {reflection.paragraphs.map((paragraph, index) => {
                if (index === 0) {
                  return (
                    <span key={`paragraph-${index}`} className="contents">
                      <Col lg={1} />
                      <Col lg={11} md={12}>
                        <p className={`medium-headline text-white pb-16`}>
                          {ReactHtmlParser(paragraph)}
                        </p>
                      </Col>
                    </span>
                  );
                } else {
                  return (
                    <span key={`paragraph-${index}`} className="contents">
                      <Col lg={3} />
                      <Col lg={6} md={12}>
                        <p className={`medium-body text-white`}>
                          {ReactHtmlParser(paragraph)}
                          <br />
                          <br />
                        </p>
                      </Col>
                      <Col lg={3} />
                    </span>
                  );
                }
              })}
            </Row>

            {next && (
              <Footer
                nextParams={nextParams}
                next={next}
                changingParam={changingParam}
                setClicked={onFooterClick}
                navigateTo={navigateTo}
                setIsTransitioning={setIsTransitioning}
                theme={{
                  background: 'black',
                  text: 'gray-40',
                  border: 'gray-80'
                }}
              />
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

Reflection.defaultProps = {
  nextBackground: 'gray-30'
};

Reflection.propTypes = {
  reflection: PropTypes.shape(),
  next: PropTypes.shape(),
  nextParams: PropTypes.shape(),
  changingParam: PropTypes.string,
  nextBackground: PropTypes.string,
  isTransitioning: PropTypes.bool,
  setIsTransitioning: PropTypes.string,
  navigateTo: PropTypes.func,
  setNextBackground: PropTypes.func
};

export default Reflection;
