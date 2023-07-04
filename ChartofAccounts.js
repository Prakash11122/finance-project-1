import React from 'react'
import { Row, Col, Card, Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { useState } from 'react';

const ChartofAccounts = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Perform search logic here based on the search term
        console.log('Search term:', searchTerm);
    };

    return (
        <div>
            <h1>ChartofAccounts</h1>

            <Card className="blue-card mb-5">
                <Card.Body>
                    <Card.Title>Welcome to the Dashboard</Card.Title>
                    <Card.Text>
                        This is Finance Dashboard.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Form onSubmit={handleSearchSubmit}>
                <Row className="mb-3">
                    <Col md={8}>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Col>
                    <Col md={4}>
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
            <Form>
                <Row className="mb-4">
                    <Col md={3}>
                        <Form.Group controlId="module">
                            <Form.Label>Module </Form.Label>
                            <Dropdown>
                                <Form.Control as="select">
                                    <option value="option1">select</option>
                                    <option value="option2">Option 1</option>
                                    <option value="option3">Option 2</option>
                                </Form.Control>
                            </Dropdown>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="locality">
                            <Form.Label>Locality </Form.Label>
                            <Dropdown>
                                <Form.Control as="select">
                                    <option value="option1">select</option>
                                    <option value="option2">Option 1</option>
                                    <option value="option3">Option 2</option>
                                </Form.Control>
                            </Dropdown>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="status">
                            <Form.Label>status</Form.Label>
                            <Dropdown>
                                <Form.Control as="select">
                                    <option value="option1">select</option>
                                    <option value="option2">Option 1</option>
                                    <option value="option3">Option 2</option>
                                </Form.Control>
                            </Dropdown>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Button type="submit">clear</Button>
                    </Col>
            
                </Row>
            </Form>

            <Row className="mb-5">
            <Col md={4}>
            <Card className="pink-card mb-5">
                <Card.Body>
                    <Card.Title>Welcome to the Dashboard</Card.Title>
                    <Card.Text>
                        This is Finance Dashboard.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className="red-card  mb-5">
                <Card.Body>
                    <Card.Title>Welcome to the Dashboard</Card.Title>
                    <Card.Text>
                        This is Finance Dashboard.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className="gray-card  mb-5">
                <Card.Body>
                    <Card.Title>Welcome to the Dashboard</Card.Title>
                    <Card.Text>
                        This is Finance Dashboard.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
          </Row>

        </div>
    )
}

export default ChartofAccounts
