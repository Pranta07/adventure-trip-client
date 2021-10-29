import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
    const { user, handleSignOut } = useFirebase();
    // console.log(user);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="warning"
            variant="dark"
            className="navbar"
        >
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        alt=""
                        src="https://i.ibb.co/WFshhXh/adventure-vintage-logo-vector-21209180.jpg"
                        className="align-top d-inline-block"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>
                        {user.email && (
                            <Nav.Link as={NavLink} to="/myPlans">
                                My Plans
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Nav.Link as={NavLink} to="/manageAll">
                                Manage All Plans
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Nav.Link as={NavLink} to="/manageAll">
                                Add Tour Place
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Navbar.Text>
                                <span className="text-white">
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
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        ) : (
                            <button
                                onClick={handleSignOut}
                                className="m-0 btn btn-danger"
                            >
                                Logout
                            </button>
                        )}

                        {!user.email && (
                            <Nav.Link as={NavLink} to="/register">
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
