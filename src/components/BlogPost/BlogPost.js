import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const BlogPost = () => {
    return (
        <Container>
            <h1 className="text-warning fw-bold fs-1 text-center">
                Blog Posts
            </h1>
            <hr className="w-50 mx-auto" />
            <p className="text-secondary text-center w-75 mx-auto">
                One inspiring story is worth traveling. Discover more about
                local food, tradition and history. Read the stories that make
                you want to travel.
            </p>
            <Row xs={1} md={2} lg={4} className="g-4 mb-5">
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://i.ibb.co/jf8kmnK/blog-post-2-m.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Discover New Oceans By Losing Sight Of The Shore
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>May 5, 2020</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://i.ibb.co/BPvpyN9/blog-post-5-m.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Travel Makes One Modest And Opened To Ideas
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>July 12, 2020</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://i.ibb.co/fM2N69F/blog-post-4-m.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                A Lot Of Traveling Turns You Into A Storyteller
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>January 5, 2020</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://i.ibb.co/sbzDZtd/blog-post-1-m.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Journeys Are Best Measured In New Friends
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>February 1, 2021</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogPost;
