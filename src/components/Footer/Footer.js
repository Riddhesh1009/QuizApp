import { Container } from "react-bootstrap/";
import { Facebook, Twitter } from "react-bootstrap-icons";
import "./Footer.css";

const Footer = () => {
  const footerItems = ["Service", "Extras", "My Account", "Useful Links"];
  return (
    <div className="footer-container">
      <hr />
      <Container
        className="d-flex flex-column justify-content-between py-4 mx-0"
        // style={{ height: "256px" }}
        fluid
      >
        <Container className="d-flex flex-row justify-content-between align-self-center mx-0">
          <Container className="d-flex flex-column justify-content-between mx-0">
            <h3 className="footer-title">TestME</h3>
            <p className="footer-txt">
              TestMe was founded in 2005 by a group of friends who were
              passionate about trivia and quizzes.
            </p>
          </Container>
          <Container className="d-flex flex-column justify-content-between">
            <h5 className="footer-heading">Follow Us</h5>
            <p className="footer-txt">Follow Us on Facebook and Twitter</p>
            <p>
              <a href="https://www.facebook.com/">
                <Facebook
                  color="#4267B2"
                  size="30"
                  style={{ cursor: "pointer", marginRight: "" }}
                />
              </a>
              <a href="https://twitter.com/">
                <Twitter
                  size="30"
                  style={{ cursor: "pointer" }}
                  color="#1DA1F2"
                />
              </a>
            </p>
          </Container>
          <Container className="d-flex flex-column justify-content-between">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-txt">
              You can contact us via email <br />
              info@testme.com
            </p>
          </Container>
        </Container>
        <hr />
        <p style={{alignSelf:"flex-end",fontWeight:"lighter"}}>Made by Riddhesh Mali & Vedant Sanap</p>
      </Container>
    </div>
  );
};

export default Footer;
