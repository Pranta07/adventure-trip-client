import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
    const { user, handleSignOut } = useAuth();
    // console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        alt=""
                        src="https://i.ibb.co/WFshhXh/adventure-vintage-logo-vector-21209180.jpg"
                        className="align-top d-inline-block"
                        height="80"
                        width="160"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home" className="me-2">
                            Home
                        </Nav.Link>
                        {user.email && (
                            <Nav.Link
                                as={NavLink}
                                to="/myPlans"
                                className="me-2"
                            >
                                My Plans
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Nav.Link
                                as={NavLink}
                                to="/manageAll"
                                className="me-2"
                            >
                                Manage All Plans
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Nav.Link
                                as={NavLink}
                                to="/manageAll"
                                className="me-2"
                            >
                                Add Tour Place
                            </Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        {user.email && (
                            <Navbar.Text>
                                <span className="text-dark">
                                    {user?.displayName}{" "}
                                </span>
                                <img
                                    className="rounded-circle"
                                    src={user.photoURL}
                                    alt=""
                                    width="30"
                                    height="30"
                                />
                            </Navbar.Text>
                        )}

                        {!user.email ? (
                            <Nav.Link as={NavLink} to="/login" className="mx-2">
                                Login
                            </Nav.Link>
                        ) : (
                            <button
                                onClick={handleSignOut}
                                className="ms-2 px-3 btn btn-danger"
                            >
                                Logout
                            </button>
                        )}

                        {!user.email && (
                            <Nav.Link
                                as={NavLink}
                                to="/register"
                                className="mx-2"
                            >
                                Register
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
