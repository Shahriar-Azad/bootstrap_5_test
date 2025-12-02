/* src/MegaDemo.jsx
   A single-file React-Bootstrap mega showcase (Option A)
   - Copy/paste into your project
   - Requires: react, react-dom, react-bootstrap, bootstrap CSS imported in index.js
*/

import React, { useState, useRef } from "react";
import {
  Alert,
  Accordion,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  ButtonToolbar,
  CloseButton,
  Card,
  Carousel,
  Col,
  Collapse,
  Container,
  Dropdown,
  DropdownButton,
  Figure,
  Form,
  FloatingLabel,
  Image,
  InputGroup,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  OverlayTrigger,
  Pagination,
  Placeholder,
  Popover,
  ProgressBar,
  Ratio,
  Row,
  Spinner,
  Stack,
  SplitButton,
  Table,
  Tabs,
  Tab,
  Toast,
  ToastContainer,
  Tooltip,
} from "react-bootstrap";

function MegaDemo() {
  // state for various components
  const [showAlert, setShowAlert] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [progress, setProgress] = useState(10);
  const [validated, setValidated] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [paginationActive, setPaginationActive] = useState(2);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const fileInputRef = useRef(null);

  // simple handlers
  const handleFormSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(true);
    alert("Form is valid! Value: " + formValue);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover</Popover.Header>
      <Popover.Body>
        Hey — this is a popover. You can place pretty much any JSX here.
      </Popover.Body>
    </Popover>
  );

  const tooltip = (props) => <Tooltip id="tooltip" {...props}>Tooltip text</Tooltip>;

  return (
    <Container fluid className="p-4" style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <h1 className="mb-4">AtlasAiDev — Mega Demo</h1>

      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 rounded">
        <Container fluid>
          <Navbar.Brand href="#">MegaDemo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-demo" />
          <Navbar.Collapse id="navbar-demo">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#components">Components</Nav.Link>
              <NavDropdown title="More" id="nav-dropdown-demo">
                <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Header</NavDropdown.Header>
                <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link onClick={() => setOffcanvasShow(true)}>Open Offcanvas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* GRID: Row / Col */}
      <Row className="gy-4">
        <Col lg={8}>
          {/* ALERTS & BADGE */}
          <section id="alerts">
            <h2>Alerts & Badges</h2>
            {showAlert ? (
              <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Heads up!</Alert.Heading>
                <p>This is an example warning alert — it can be dismissed.</p>
              </Alert>
            ) : (
              <Button size="sm" className="mb-2" onClick={() => setShowAlert(true)}>Show Alert</Button>
            )}

            <p>
              Notification <Badge bg="primary">4</Badge>{" "}
              <Badge pill bg="success">New</Badge>
            </p>
          </section>

          <hr />

          {/* CARDS */}
          <section id="cards">
            <h2>Cards</h2>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Simple card</Card.Title>
                <Card.Text>Cards are flexible content containers.</Card.Text>
                <Button>Go</Button>
              </Card.Body>
            </Card>

            <Card bg="light" text="dark" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Header Card</Card.Title>
                <Card.Text>Card with header and footer.</Card.Text>
              </Card.Body>
              <Card.Footer>Footer</Card.Footer>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://picsum.photos/400/200?random=10" />
              <Card.Body>
                <Card.Title>Card with Image</Card.Title>
                <Card.Text>Images integrate easily.</Card.Text>
                <Button variant="outline-primary">Action</Button>
              </Card.Body>
            </Card>
          </section>

          <hr />

          {/* FORMS: many parts */}
          <section id="forms">
            <h2>Forms (Validation, Range, Checks, Select)</h2>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              <Row className="g-3 align-items-center">
                <Col md>
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control required type="email" placeholder="name@example.com" />
                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col md>
                  <Form.Group controlId="formSelect" className="mb-3">
                    <Form.Label>Select</Form.Label>
                    <Form.Select aria-label="Example select" required>
                      <option value="">Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Select an option.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formRange" className="mb-3">
                <Form.Label>Volume: {progress}%</Form.Label>
                <Form.Range value={progress} onChange={(e) => setProgress(Number(e.target.value))} />
              </Form.Group>

              <Form.Group controlId="formTextarea" className="mb-3">
                <Form.Label>Example text</Form.Label>
                <Form.Control as="textarea" rows={2} />
                <Form.Text className="text-muted">Helpful hint text below the control.</Form.Text>
              </Form.Group>

              <Form.Check type="checkbox" id="check1" label="Accept terms" className="mb-2" required />
              <Form.Check type="switch" id="switch1" label="Toggle this switch" className="mb-3" />

              <InputGroup className="mb-3">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control placeholder="Username" aria-label="Username" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <InputGroup.Text>.com</InputGroup.Text>
              </InputGroup>

              <div className="d-flex gap-2">
                <Button type="submit" variant="primary">Submit</Button>
                <Button variant="secondary" onClick={() => { setValidated(false); setFormValue(""); }}>Reset</Button>
              </div>
            </Form>
          </section>

          <hr />

          {/* LISTGROUP & FIGURE & IMAGE */}
          <section id="lists">
            <h2>ListGroup, Figure, Image</h2>

            <Row>
              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item active>Active Item</ListGroup.Item>
                  <ListGroup.Item>Item Two</ListGroup.Item>
                  <ListGroup.Item disabled>Disabled</ListGroup.Item>
                  <ListGroup.Item action href="#link1">Clickable link</ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={6}>
                <Figure>
                  <Figure.Image width={160} height={120} alt="171x180" src="https://picsum.photos/200/140?random=5" />
                  <Figure.Caption>
                    A simple <strong>Figure</strong> caption below an image.
                  </Figure.Caption>
                </Figure>

                <div className="mt-2">
                  <Image src="https://picsum.photos/320/120?random=12" fluid rounded />
                </div>
              </Col>
            </Row>
          </section>

          <hr />

          {/* CAROUSEL */}
          <section id="carousel">
            <h2>Carousel</h2>
            <Carousel activeIndex={carouselIndex} onSelect={(i) => setCarouselIndex(i)} className="mb-3">
              <Carousel.Item>
                <img className="d-block w-100" src="https://picsum.photos/800/300?1" alt="slide1" />
                <Carousel.Caption><h3>Slide 1</h3><p>Caption for slide 1.</p></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://picsum.photos/800/300?2" alt="slide2" />
                <Carousel.Caption><h3>Slide 2</h3><p>Caption for slide 2.</p></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <hr />

          {/* TABLES */}
          <section id="tables">
            <h2>Table</h2>
            <Table responsive striped bordered hover>
              <thead>
                <tr><th>#</th><th>Name</th><th>Role</th><th>Email</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Azad</td><td>Dev</td><td>azad@example.com</td></tr>
                <tr><td>2</td><td>Shahriar</td><td>Designer</td><td>shahriar@example.com</td></tr>
              </tbody>
            </Table>
          </section>

          <hr />

          {/* TABS + ACCORDION */}
          <section id="tabs-accordion">
            <Row>
              <Col md={6}>
                <h2>Tabs</h2>
                <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
                  <Tab eventKey="home" title="Home">
                    <p>Home tab content</p>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    <p>Profile tab content</p>
                  </Tab>
                  <Tab eventKey="contact" title="Contact" disabled>
                    Disabled
                  </Tab>
                </Tabs>
              </Col>

              <Col md={6}>
                <h2>Accordion</h2>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>This is the accordion body for item 1.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>This is the accordion body for item 2.</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </section>

          <hr />

          {/* OVERLAYS: Tooltip & Popover */}
          <section id="overlays">
            <h2>Tooltip & Popover</h2>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <Button variant="outline-dark" className="me-2">Hover for tooltip</Button>
            </OverlayTrigger>

            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="outline-secondary">Click for popover</Button>
            </OverlayTrigger>
          </section>

          <hr />

          {/* PROGRESS, SPINNER, PLACEHOLDER */}
          <section id="feedback">
            <h2>Progress, Spinner, Placeholder</h2>
            <ProgressBar now={progress} label={`${progress}%`} className="mb-2" />
            <div className="mb-2">
              <ProgressBar striped variant="info" now={60} />
            </div>

            <Spinner animation="border" role="status" className="me-2"><span className="visually-hidden">Loading...</span></Spinner>
            <Spinner animation="grow" variant="success" />

            <div className="mt-3">
              <Placeholder as="p" animation="glow">
                <Placeholder xs={6} /> <Placeholder xs={4} /> <Placeholder xs={8} />
              </Placeholder>
            </div>
          </section>

          <hr />

          {/* FOOTER */}
          <section className="mt-4">
            <h3 className="text-center">End of Left Column — continue exploring right column</h3>
          </section>
        </Col>

        {/* RIGHT COLUMN: Controls, Buttons, Dropdowns, Pagination, Modal, Offcanvas, Toasts */}
        <Col lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Buttons & Button Groups</Card.Title>

              <div className="mb-2">
                <Button variant="primary" className="me-2">Primary</Button>
                <Button variant="outline-primary" className="me-2">Outline</Button>
                <Button variant="danger">Danger</Button>
              </div>

              <ButtonGroup className="mb-2">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>

              <div className="mb-2">
                <ButtonToolbar>
                  <ButtonGroup className="me-2">
                    <Button variant="secondary">1</Button>
                    <Button variant="secondary">2</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline-secondary">A</Button>
                    <Button variant="outline-secondary">B</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>

              <div className="mb-2">
                <SplitButton id="split-basic" title="Split Action" variant="success" className="me-2">
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                </SplitButton>

                <DropdownButton id="dropdown-basic-button" title="Dropdown">
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                </DropdownButton>
              </div>

              <div className="mt-3">
                <CloseButton aria-label="Close example" />
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Modal & Offcanvas</Card.Title>
              <div className="d-flex gap-2">
                <Button variant="primary" onClick={() => setModalShow(true)}>Open Modal</Button>
                <Button variant="info" onClick={() => setOffcanvasShow(true)}>Open Offcanvas</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Pagination & Breadcrumb</Card.Title>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>

              <Pagination className="mt-2">
                <Pagination.Prev onClick={() => setPaginationActive((p) => Math.max(1, p - 1))} />
                <Pagination.Item active={paginationActive === 1} onClick={() => setPaginationActive(1)}>1</Pagination.Item>
                <Pagination.Item active={paginationActive === 2} onClick={() => setPaginationActive(2)}>2</Pagination.Item>
                <Pagination.Item active={paginationActive === 3} onClick={() => setPaginationActive(3)}>3</Pagination.Item>
                <Pagination.Next onClick={() => setPaginationActive((p) => Math.min(3, p + 1))} />
              </Pagination>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Toast</Card.Title>
              <Button onClick={() => setToastShow(true)}>Show Toast</Button>
              <ToastContainer position="top-end" className="p-3">
                <Toast bg="light" onClose={() => setToastShow(false)} show={toastShow} delay={2500} autohide>
                  <Toast.Header>
                    <strong className="me-auto">Megademo</strong>
                    <small>now</small>
                  </Toast.Header>
                  <Toast.Body>Simple toast message</Toast.Body>
                </Toast>
              </ToastContainer>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Collapse</Card.Title>
              <Button
                onClick={() => setCollapseOpen(!collapseOpen)}
                aria-controls="collapse-text"
                aria-expanded={collapseOpen}
              >
                Toggle Collapse
              </Button>

              <Collapse in={collapseOpen} className="mt-2">
                <div id="collapse-text">
                  <Card body>This content is collapsed</Card>
                </div>
              </Collapse>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Upload & File</Card.Title>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Example file input</Form.Label>
                <Form.Control type="file" ref={fileInputRef} />
              </Form.Group>
              <Button onClick={() => fileInputRef.current && fileInputRef.current.click()}>Open file dialog</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal implementation */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Example Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a modal body demonstrating React-Bootstrap modal usage.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Offcanvas */}
      <Offcanvas show={offcanvasShow} onHide={() => setOffcanvasShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Use Offcanvas for side panels and mobile menus.</p>
          <ListGroup>
            <ListGroup.Item action>Profile</ListGroup.Item>
            <ListGroup.Item action>Settings</ListGroup.Item>
            <ListGroup.Item action>Logout</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Footer Cards: Ratio, Stack */}
      <section className="mt-4">
        <Row>
          <Col md={6}>
            <h4>Ratio (16:9)</h4>
            <Ratio aspectRatio="16x9">
              <iframe title="demo" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
            </Ratio>
          </Col>
          <Col md={6}>
            <h4>Stack</h4>
            <Stack gap={2}>
              <div className="bg-white p-2 border">First item</div>
              <div className="bg-white p-2 border">Second item</div>
              <div className="bg-white p-2 border">Third item</div>
            </Stack>
          </Col>
        </Row>
      </section>

      <hr />

      <footer className="text-center small text-muted mt-3">AtlasAiDev</footer>
    </Container>
  );
}

export default MegaDemo;
