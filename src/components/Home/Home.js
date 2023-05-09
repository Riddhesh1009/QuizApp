import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import TestCard from "../Test Card/TestCard";
import "./Home.css";

function Home() {
  const testCardData = [
    {
      title: "FULL STACK WEB DEVELOPER",
      variant: "secondary",
      img: "/card1.png",
      testLink: "/test/fullStackWebDev",
    },
    {
      title: "PRODUCT BASED COMPANY MOCK TEST",
      variant: "info",
      img: "/card2.png",
      testLink: "/test/prodBased",
    },
    {
      title: "SERVICE BASED COMPANY MOCK TEST",
      variant: "primary",
      img: "/card3.png",
      testLink: "/test/serviceBased",
    },
    {
      title: "GENERAL AWARENESS TEST 2021",
      variant: "warning",
      img: "/card4.png",
      testLink: "/test/generalAwareness",
    },
  ];

  let testsRef = useRef(null);
  const executeScroll = () => testsRef.current.scrollIntoView();

  return (
    <>
      <div>
        <div className="master-head-container align-items-center mb-4 flex-column-reverse flex-lg-row">
          <div className="master-head-text-container">
            <div className="master-head-text-headers">
              <h2>Differentiate yourself &#38;</h2>
              <p style={{ color: "#424242", fontSize: "30px" }}>
                stand out from the crowd.
              </p>
            </div>
            <p>Evaluate yourself &#38; Improve, Take test now</p>
            <Button
              onClick={executeScroll}
              variant="outline-transparent"
              className="w-75"
            >
              Take Test
            </Button>
          </div>
          <div className="master-head-image-container">
            <img
              alt=""
              className="master-head-image"
              src="/home1.png"
            />
          </div>
        </div>
        <div className="home-test-main-container">
          <div className="home-test-info flex-column flex-lg-row">
            <div className="home-test-info-img-conatianer">
              <img
                alt=""
                src="/home2.png"
                className="home-test-info-img"
              />
            </div>
            <div className="home-test-info-text">
              <h3 className="home-test-info-header"></h3>
              <p className="home-test-info-para" style={{fontSize:"20px"}}>
                -A test is not a punishment; it's an opportunity to demonstrate
                what you know.<br/><br/>
                -Tests are not meant to make you feel bad; they're meant to help you learn.<br/><br/>
                -Tests are not a measure of intelligence, but a measure of perseverance.
              </p>
            </div>
          </div>
          <Container
            ref={testsRef}
            className="test-banner-container justify-content-between align-items-center flex-column flex-lg-row"
            fluid
          >
            {testCardData.map((item, index) => (
              <TestCard key={index} card={item} />
            ))}
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
