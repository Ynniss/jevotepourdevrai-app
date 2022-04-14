
import React from "react";
// reactstrap components
import { 
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">JeVotePourDeVrai</h1>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
