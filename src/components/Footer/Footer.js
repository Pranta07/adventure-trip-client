import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container text-center text-dark">
                <div className="pt-5 mx-auto row row-cols-1 row-cols-md-4 row-cols-lg-4">
                    <div className="col">
                        <img
                            src="https://i.ibb.co/W0nRh69/Tarteeb-Travel-Favicon.png"
                            alt=""
                            width="30"
                            height="30"
                        />
                        <span className="fw-bold"> Adventure Trip</span>
                        <p className="mt-2">
                            <small>
                                Kamperen is equipped with everythig required for
                                an amazing campground business website. Set up
                                camp now.
                            </small>
                        </p>
                    </div>
                    <div className="col">
                        <span className="fw-bold">Contact</span>
                        <ul className="mt-2 list">
                            <li>Email: palpranta@gmail.com</li>
                            <li>Phone: +8801857527123</li>
                            <li>Address: Chittagong</li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="fw-bold">Links</span>
                        <ul className="mt-2 list">
                            <li>About Us</li>
                            <li>Booking</li>
                            <li>Contact Us</li>
                            <li>Help</li>
                            <li>Tour guide</li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="fw-bold">Newsletter</span>
                        <p>
                            Sign up for our newsletter and get updated about our
                            latest promotions
                        </p>
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="form-control border border-0 bg-light border-outline-0 rounded p-2"
                        />
                    </div>
                </div>
                <div>
                    <h5>Follow us on</h5>
                    <div>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </div>
                    <p className="mb-0 text-center">
                        <small>
                            All rights reserved ©AdventureTrip, 2021 | Pranta
                            Pal
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
