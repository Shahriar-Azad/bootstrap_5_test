import React, { useState, useRef, useEffect } from "react";
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
  Overlay,
  Fade,
  Collapse as RB_Collapse,
} from "react-bootstrap";

function AtlasAiDev() {
  // General UI state
  const [showAlert, setShowAlert] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [offcanvasPlacement, setOffcanvasPlacement] = useState("end");
  const [toastStack, setToastStack] = useState([]);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tooltipText, setTooltipText] = useState("Tooltip text");
  const [activeTab, setActiveTab] = useState("home");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [progress, setProgress] = useState(45);
  const [validated, setValidated] = useState(false);
  const [paginationActive, setPaginationActive] = useState(2);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayTargetRef = useRef(null);
  const fileInputRef = useRef(null);
  const [placeholderLoading, setPlaceholderLoading] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState("0");

  // NEW FORM STATES
  const [isSwitched, setIsSwitched] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [rangeValue, setRangeValue] = useState(50);

  // Programmatic modal example
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  // Toast helpers
  const pushToast = (title, body) => {
    const id = Date.now();
    setToastStack((t) => [...t, { id, title, body, createdAt: new Date() }]);
    // auto-remove after 4s
    setTimeout(() => setToastStack((t) => t.filter((x) => x.id !== id)), 4200);
  };

  // Simulate loading skeleton
  useEffect(() => {
    const t = setTimeout(() => setPlaceholderLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(true);
    pushToast("Form", "Submitted successfully");
  };

  // Popover component
  const examplePopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover title</Popover.Header>
      <Popover.Body>
        And here's some **amazing** content. It's very engaging.
      </Popover.Body>
    </Popover>
  );

  const exampleTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );

  // More advanced pagination logic (example)
  const totalPages = 7;
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === paginationActive} onClick={() => setPaginationActive(number)}>
        {number}
      </Pagination.Item>
    );
  }

  // Nested accordion data example
  const nestedAccordion = (
    <Accordion alwaysOpen activeKey={accordionOpen} onSelect={(k) => setAccordionOpen(k)}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Parent Item 1</Accordion.Header>
        <Accordion.Body>
          Parent content here. child accordion below.
          <Accordion>
            <Accordion.Item eventKey="0-0">
              <Accordion.Header>Child A</Accordion.Header>
              <Accordion.Body>Child A content</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0-1">
              <Accordion.Header>Child B</Accordion.Header>
              <Accordion.Body>Child B content</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Parent Item 2</Accordion.Header>
        <Accordion.Body>This is another parent item body.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );

  return (
    <Container fluid className="p-4" style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <h1 className="mb-4">AtlasAiDev — Mega Demo (Expanded)</h1>

      {/* NAVBAR with Navs & Pills + Search */}
      <Navbar bg="light" expand="lg" className="mb-4 rounded">
        <Container fluid>
          <Navbar.Brand href="#home">MegaDemo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-expanded" />
          <Navbar.Collapse id="navbar-expanded">
            <Nav className="me-auto" variant="pills">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Resources" id="nav-dropdown-resources">
                <NavDropdown.Item href="#docs">Docs</NavDropdown.Item>
                <NavDropdown.Item href="#examples">Examples</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex" style={{ gap: 8 }}>
              <Form.Control type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="gy-4">
        <Col lg={8}>
          {/* Alerts & Badges */}
          <section id="alerts">
            <h2>Alerts & Badges</h2>
            {showAlert ? (
              <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Heads up — expanded!</Alert.Heading>
                <p>Now this demo includes a lot more components and usage patterns.</p>
              </Alert>
            ) : (
              <Button size="sm" onClick={() => setShowAlert(true)} className="mb-2">Show Alert</Button>
            )}

            <p>
              Messages <Badge bg="danger">9</Badge> <Badge pill bg="secondary">Beta</Badge>
            </p>
          </section>

          <hr />

          {/* Advanced Cards + Figures + Media */}
          <section id="cards">
            <h2>Cards, Figures & Media</h2>
            <Row>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Img variant="top" src="https://picsum.photos/640/240?random=1" />
                  <Card.Body>
                    <Card.Title>Photo Card</Card.Title>
                    <Card.Text>Use images, lists, and actions inside cards.</Card.Text>
                    <Button variant="outline-primary" onClick={() => pushToast("Card", "Clicked card action")}>Action</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Figure>
                  <Figure.Image width={260} height={140} alt="random" src="https://picsum.photos/320/180?random=2" />
                  <Figure.Caption>Responsive figure caption with <Badge bg="info">Info</Badge>.</Figure.Caption>
                </Figure>

                <div className="mt-2 d-flex gap-2">
                  <Image src="https://picsum.photos/200/80?random=3" rounded fluid />
                  <Image src="https://picsum.photos/200/80?random=4" rounded fluid />
                </div>
              </Col>
            </Row>
          </section>

          <hr />

          {/* Forms: Floating Labels, InputGroup combos, Validation + NEW CONTROLS */}
          <section id="forms">
            <h2>Forms (Floating Labels, Checks, InputGroups)</h2>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              <Row className="g-3 align-items-center">
                <Col md>
                  <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                    <Form.Control required type="email" placeholder="name@example.com" />
                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>

                <Col md>
                  <FloatingLabel controlId="floatingSelect" label="Plan" className="mb-3">
                    <Form.Select aria-label="Plan select" required>
                      <option value="">Choose plan...</option>
                      <option value="free">Free</option>
                      <option value="pro">Pro</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Select a plan.</Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>

              {/* NEW: Checkbox/Radio/Switch */}
              <Row className="g-3 mb-3">
                <Col md={6}>
                  <Form.Group controlId="formGroupCheck">
                    <Form.Check
                      type="checkbox"
                      label="Agree to terms"
                      checked={checkboxState}
                      onChange={(e) => setCheckboxState(e.target.checked)}
                      required
                    />
                    <Form.Text className="text-muted">
                      You must agree to proceed.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={isSwitched ? "Enabled" : "Disabled"}
                    checked={isSwitched}
                    onChange={(e) => setIsSwitched(e.target.checked)}
                  />
                </Col>
              </Row>
              
              {/* NEW: Inline Radio Group */}
              <div className="mb-3">
                <Form.Label>Choose Option:</Form.Label>
                <div className="d-flex gap-3">
                  {["1", "2", "3"].map((val) => (
                    <Form.Check
                      inline
                      key={`radio-inline-${val}`}
                      label={`Option ${val}`}
                      name="radioGroup"
                      type="radio"
                      id={`radio-inline-${val}`}
                      value={val}
                      checked={radioValue === val}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                  ))}
                </div>
              </div>


              <InputGroup className="mb-3">
                <DropdownButton variant="outline-secondary" title="@" id="input-group-dropdown-1">
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another</Dropdown.Item>
                </DropdownButton>
                <Form.Control placeholder="Username" aria-label="Username" />
                <Button variant="secondary">Check</Button>
              </InputGroup>

              <Form.Group controlId="formRange" className="mb-3">
                <Form.Label>Progress: {progress}%</Form.Label>
                <Form.Range value={progress} onChange={(e) => setProgress(Number(e.target.value))} />
              </Form.Group>

              {/* NEW: Range Input with value display */}
              <Form.Group controlId="formCustomRange" className="mb-3">
                <Form.Label>Custom Range Value: <Badge bg="primary">{rangeValue}</Badge></Form.Label>
                <Form.Range 
                  min="0" max="100" step="5"
                  value={rangeValue}
                  onChange={(e) => setRangeValue(Number(e.target.value))}
                />
              </Form.Group>

              <div className="d-flex gap-2">
                <Button type="submit">Submit</Button>
                <Button variant="outline-secondary" onClick={() => { setValidated(false); pushToast("Form", "Reset"); }}>Reset</Button>
              </div>
            </Form>
          </section>

          <hr />

          {/* Carousel: advanced usage */}
          <section id="carousel">
            <h2>Carousels</h2>
            <Carousel activeIndex={carouselIndex} onSelect={(i) => setCarouselIndex(i)} className="mb-3">
              <Carousel.Item>
                <img className="d-block w-100" src="https://picsum.photos/900/300?random=10" alt="slide1" />
                <Carousel.Caption><h3>Slide 1</h3><p>Beautiful scenery.</p></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://picsum.photos/900/300?random=11" alt="slide2" />
                <Carousel.Caption><h3>Slide 2</h3><p>Another caption text.</p></Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <Card className="p-3">
              <Row>
                <Col sm={4}><Image src="https://picsum.photos/120/80?random=6" thumbnail /></Col>
                <Col sm={8}><p>Thumbnail carousel preview — clickable thumbnails would change slides (demo).</p></Col>
              </Row>
            </Card>
          </section>

          <hr />

          {/* Tables & ListGroup */}
          <section id="tables">
            <h2>Table & ListGroup</h2>
            <Table responsive bordered hover size="sm">
              <thead>
                <tr><th>#</th><th>Name</th><th>Role</th><th>Actions</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Azad</td>
                  <td><Badge bg="success">Dev</Badge></td>
                  <td><Button size="sm" onClick={() => pushToast("Row", "Clicked Azad")}>Notify</Button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shahriar</td>
                  <td><Badge bg="info">Designer</Badge></td>
                  <td><Button size="sm" variant="outline-primary">Edit</Button></td>
                </tr>
              </tbody>
            </Table>

            <ListGroup horizontal className="mt-3">
              <ListGroup.Item action href="#">Home</ListGroup.Item>
              <ListGroup.Item>Profile</ListGroup.Item>
              <ListGroup.Item disabled>Disabled</ListGroup.Item>
            </ListGroup>
          </section>

          <hr />

          {/* Tabs & Accordion */}
          <section id="tabs-accordion">
            <h2>Tabs & Accordion</h2>
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3" mountOnEnter>
              <Tab eventKey="home" title="Home"><p>Home content — light and fast.</p></Tab>
              <Tab eventKey="profile" title="Profile"><p>Profile content — edit and save.</p></Tab>
              <Tab eventKey="settings" title="Settings"><p>Settings content.</p></Tab>
            </Tabs>

            <h4>Nested Accordion</h4>
            {nestedAccordion}
          </section>

          <hr />

          {/* Overlays: Tooltip, Popover, Overlay API */}
          <section id="overlays">
            <h2>Tooltips, Popovers & Overlay</h2>
            <div className="mb-2">
              <OverlayTrigger placement="top" overlay={exampleTooltip}>
                <Button variant="outline-dark" className="me-2">Hover tooltip</Button>
              </OverlayTrigger>

              <OverlayTrigger trigger="click" placement="right" overlay={examplePopover} rootClose>
                <Button variant="outline-secondary">Click popover</Button>
              </OverlayTrigger>
            </div>

            <div className="mt-3">
              <Button ref={overlayTargetRef} onClick={() => setShowOverlay((s) => !s)} className="me-2">Toggle Overlay</Button>
              <Overlay target={overlayTargetRef.current} show={showOverlay} placement="bottom">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                  <div {...props} style={{ background: "white", padding: 12, border: "1px solid #ddd", borderRadius: 6 }}>
                    <strong>Overlay content</strong>
                    <div className="text-muted">Useful for custom popups</div>
                  </div>
                )}
              </Overlay>
            </div>
          </section>

          <hr />

          {/* Feedback: Progress, Spinners, Placeholders */}
          <section id="feedback">
            <h2>Progress, Spinners & Placeholders</h2>
            <ProgressBar now={progress} label={`${progress}%`} className="mb-2" />

            <div className="mb-2">
              <Spinner animation="border" role="status" className="me-2"><span className="visually-hidden">Loading...</span></Spinner>
              <Spinner animation="grow" />
            </div>

            <div className="mt-3">
              <Placeholder as="p" animation={placeholderLoading ? "glow" : null}>
                <Placeholder xs={6} /> <Placeholder xs={4} /> <Placeholder xs={8} />
              </Placeholder>
            </div>
          </section>

          <hr />

          {/* Footer of left column */}
          <section className="mt-4">
            <h5>That's a large set — keep exploring the right column for controls</h5>
          </section>
        </Col>

        {/* RIGHT COLUMN: Controls, Buttons, Dropdowns, Pagination, Modal, Offcanvas, Toasts, Ratio, Stack */}
        <Col lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Buttons & Groups</Card.Title>
              <div className="mb-2 d-flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="outline-primary">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="link">Link</Button>
              </div>

              <ButtonGroup vertical className="mb-2 w-100">
                <Button>Vertical 1</Button>
                <Button>Vertical 2</Button>
              </ButtonGroup>

              <SplitButton title="Split action" id="split-1" variant="success" className="mb-2">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
              </SplitButton>

              <DropdownButton id="dropdown-basic-button" title="Dropdown">
                <Dropdown.Item>One</Dropdown.Item>
                <Dropdown.Item>Two</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated</Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Modal & Offcanvas</Card.Title>
              <div className="d-flex gap-2 mb-2">
                <Button onClick={openModal}>Open Modal</Button>
                <Button onClick={() => { setOffcanvasPlacement("start"); setOffcanvasShow(true); }}>Offcanvas Left</Button>
              </div>

              <div className="d-flex gap-2">
                <Button onClick={() => { setOffcanvasPlacement("end"); setOffcanvasShow(true); }}>Offcanvas Right</Button>
                <Button onClick={() => { setOffcanvasPlacement("top"); setOffcanvasShow(true); }}>Offcanvas Top</Button>
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

              <Pagination className="mt-2">{paginationItems}</Pagination>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Toasts</Card.Title>
              <div className="d-flex gap-2 mb-2">
                <Button onClick={() => pushToast("Info", "A toast was pushed")}>Push Toast</Button>
                <Button variant="outline-secondary" onClick={() => setToastStack([])}>Clear</Button>
              </div>

              <ToastContainer position="top-end" className="p-3">
                {toastStack.map((t) => (
                  <Toast key={t.id} onClose={() => setToastStack((s) => s.filter((x) => x.id !== t.id))} show>
                    <Toast.Header>
                      <strong className="me-auto">{t.title}</strong>
                      <small>now</small>
                    </Toast.Header>
                    <Toast.Body>{t.body}</Toast.Body>
                  </Toast>
                ))}
              </ToastContainer>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Collapse & File</Card.Title>
              <Collapse in={true} className="mb-2">
                <div>
                  <Card body>Always visible collapse example</Card>
                </div>
              </Collapse>

              {/* NEW: File Input with custom style */}
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Custom File Input (Large)</Form.Label>
                <Form.Control type="file" ref={fileInputRef} size="lg" />
              </Form.Group>
              <Button onClick={() => fileInputRef.current && fileInputRef.current.click()}>Open file dialog</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Ratio & Stack</Card.Title>
              <Ratio aspectRatio="16x9" className="mb-2">
                <iframe title="demo" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
              </Ratio>

              <Stack gap={2}>
                <div className="bg-white p-2 border">First item</div>
                <div className="bg-white p-2 border">Second item</div>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Programmatic Modal */}
      <Modal show={modalShow} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Programmatic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This modal was opened from a programmatic handler.</p>
          <Button onClick={() => { pushToast("Modal", "Saved changes"); closeModal(); }}>Save</Button>
        </Modal.Body>
      </Modal>

      {/* Offcanvas with variable placement */}
      <Offcanvas show={offcanvasShow} onHide={() => setOffcanvasShow(false)} placement={offcanvasPlacement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas — {offcanvasPlacement}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Offcanvas can be placed at start, end, top or bottom.</p>
          <ListGroup>
            <ListGroup.Item action>Profile</ListGroup.Item>
            <ListGroup.Item action>Settings</ListGroup.Item>
            <ListGroup.Item action>Logout</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Footer */}
      <hr />
      <footer className="text-center small text-muted mt-3">AtlasAiDev</footer>
    </Container>
  );
}

export default AtlasAiDev;