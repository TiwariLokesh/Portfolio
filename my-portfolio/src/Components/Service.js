import React, { useState } from "react";
import { Tab, Nav, Row, Col, Card, Container } from "react-bootstrap";

const Service = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="pt-5 pb-5">
      <div className="text-center project-heading">
        My <span>Services</span>
      </div>
      <p className="project-para pb-5">Skills and Stacks Expertise Developed .</p>
      <div className="bg-dark">
        <Container className="pt-5 pb-5">
          <Tab.Container id="tabs-example" activeKey={activeTab} onSelect={handleSelect}>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={4}>
                <Nav variant="underline" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="1" className="custom-nav-link">
                      <Card className="mb-2">
                        <Card.Body>
                          <div>
                            <i className="fa-solid fa-house"></i>
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
                            <i className="fa-solid fa-house"></i>
                            <h4>GRAPHIC DESIGNING</h4>
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
                            <i className="fa-solid fa-house"></i>
                            <h4>DIGITAL MARKETING</h4>
                          </div>
                        </Card.Body>
                      </Card>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} md={8}>
                <Tab.Content className="p-5 text-white">
                  <Tab.Pane eventKey="1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam
                      minima, soluta doloribus reiciendis molestiae placeat unde eos molestias.
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                      minima.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <div>
                      <p>
                        Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                        minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                        odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos
                        molestias.
                      </p>
                      <p>
                        Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                        minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                        odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos
                        molestias.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="3">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                      minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit
                      magnam minima, soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
};

export default Service;
