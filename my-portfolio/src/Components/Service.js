import React, { useState } from "react";
import { Tab, Nav, Row, Col, Card } from "react-bootstrap";


const Service = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <Tab.Container id="tabs-example" activeKey={activeTab} onSelect={handleSelect}>
      <Row className="d-flex justify-content-center align-items-center flex">
        <Col xs={12} sm={6} md={4}>
          <Nav variant="pills" className="d-flex justify-content-center align-items-center flex-row flex-sm-column">
            <Nav.Item>
              <Nav.Link eventKey="1" className="custom-nav-link">
                <Card className="mb-2">
                  <Card.Body>
                    <div>
                      <i class="fa-solid fa-house"></i>
                      <h4>WEB DEVELOPMENT</h4>
                    </div>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="custom-nav-link">
                <Card className="mb-2">
                  <Card.Body>
                    <div>
                      <i class="fa-solid fa-house"></i>
                      <h4>WEB DEVELOPMENT</h4>
                    </div>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" className="custom-nav-link">
                <Card className="mb-2">
                  <Card.Body>
                    <div>
                      <i class="fa-solid fa-house"></i>
                      <h4>WEB DEVELOPMENT</h4>
                    </div>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} sm={8} md={8}>
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                odit magnam minima, soluta doloribus reiciendis molestiae placeat
                unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat
                ratione porro voluptate odit minima.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <div>
                <p>
                  Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                  voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias.
                </p>
                <p>
                  Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                  voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias.
                </p>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Service;
