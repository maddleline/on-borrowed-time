import { Col, Container, Row } from 'react-grid-system';

import React from 'react';
import { useScreenClass } from 'react-grid-system';

const Home = () => {
  const screenClass = useScreenClass();

  // Set the date we're counting down to
  let countDownDate = new Date('Jul 1, 2047 00:00:00').getTime();

  function makeMeTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  // Update the count down every 1 second
  let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById('demo').innerHTML =
      days +
      ' days ' +
      makeMeTwoDigits(hours) +
      ':' +
      makeMeTwoDigits(minutes) +
      ':' +
      makeMeTwoDigits(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('demo').innerHTML = 'EXPIRED';
    }
  }, 1000);

  return (
    <div className="h-screen bg-black">
      <Container className="grid__container">
        <Row
          className="grid__row"
          style={{
            margin: ['lg', 'xl', 'xxl'].includes(screenClass)
              ? '0 -74px' // lg, xl, xxl
              : ['md'].includes(screenClass)
              ? '0 -64px' // md
              : '0 -26px' // sm, xs
          }}
        >
          <div className="h-screen w-full flex flex-col justify-between py-5">
            {/* top container */}
            <div>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="flex justify-between items-center mb-2.5">
                  <h3 className="small-headline text-white">
                    A Borrowed Place, On Borrowed Time
                  </h3>
                  {/* hide below md breakpoint */}
                  <h3 className="small-headline-characters text-white sm:block hidden">
                    暫借的地方，暫借的時間
                  </h3>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                {/* show below md breakpoint */}
                <h3 className="small-headline-characters text-white sm:hidden block pt-1 mb-5">
                  暫借的地方，暫借的時間
                </h3>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h3 className="small-body text-white">Project coming soon</h3>
              </Col>
            </div>

            {/* bottom container */}
            <div>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h3 className="small-body text-white opacity-50">
                  The Handover — <span id="demo" />
                </h3>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
