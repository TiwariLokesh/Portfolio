import React, { useState } from "react";
import { Tab, Nav, Row, Col, Card, Container } from "react-bootstrap";

const Service = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="pt-3 pb-5">
      <div className="text-center project-heading pt-5">
        My <span>Services</span>
      </div>
      <p className="project-para pb-3">
        Customized Development Solutions Delivered .
      </p>
      <div className="bg-img">
        <div className="overlay">
          <Container className="pt-3 pb-5">
            <Tab.Container
              id="tabs-example"
              activeKey={activeTab}
              onSelect={handleSelect}
            >
              <Row className="justify-content-center align-items-center gx-3">
                <Col xs={12} md={4} className="mb-3">
                  <Nav variant="underline" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="1" className="custom-nav-link">
                        <Card>
                          <Card.Body>
                            <div className="project-heading fs-5 fw-medium">
                              <i
                                className="fa-solid fa-laptop px-3"
                                style={{ color: "#000" }}
                              ></i>
                              Web <span>Development</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2" className="custom-nav-link">
                        <Card>
                          <Card.Body>
                            <div className="project-heading fs-5 fw-medium">
                              <i
                                className="fa-solid fa-paintbrush px-3"
                                style={{ color: "#000" }}
                              ></i>
                              Graphic <span>Designing</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3" className="custom-nav-link">
                        <Card>
                          <Card.Body>
                            <div className="project-heading fs-5 fw-medium">
                              <i
                                class="fa-solid fa-people-group px-3"
                                style={{ color: "#000" }}
                              ></i>
                              Digital <span>Marketing</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col xs={12} md={8} className="mb-3">
                  <Tab.Content className="p-3 text-white rounded-5 bg-dark ">
                    <Tab.Pane eventKey="1">
                      <p>
                        As a seasoned web developer, I specialize in crafting
                        bespoke web solutions that are as unique as your
                        business. With a meticulous attention to detail and a
                        passion for innovation, I bring your ideas to life in
                        the digital realm. Let's collaborate to bring your
                        vision to life and elevate your online presence to new
                        heights. Whether you're a startup, a small business, or
                        a large corporation, I'm here to help you succeed in
                        the digital world.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <div>
                        <p>
                          With a keen eye for aesthetics and a passion for
                          creativity, I specialize in crafting visually stunning
                          designs that leave a lasting impression. From
                          captivating logos and branding materials to
                          eye-catching marketing collateral, I bring your brand
                          to life with innovative graphic solutions.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <p>
                        Elevate your online presence and reach your target
                        audience effectively with strategic digital marketing
                        solutions. From search engine optimization (SEO) and
                        pay-per-click (PPC) advertising to social media
                        marketing and content creation, I offer comprehensive
                        strategies tailored to your business goals.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Service;
