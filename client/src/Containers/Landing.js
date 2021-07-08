import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Header from "../Components/Header";
import ShortenUrlCard from "../Components/ShortenUrlCard";

const Landing = () => {
  return (
    <>
      <Header />
      <Row className="my-4">
        <Col className="center-content">
          <legend className="text-center">Try it now :</legend>
          <ShortenUrlCard />
          <p className="text-center my-4">
            <a href="/signup">
              <Button variant="primary" size="lg">
                Signup Now
              </Button>
            </a>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Landing;
