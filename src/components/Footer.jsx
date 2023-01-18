import React, { Component } from 'react'
import map from "../images/map.jpg";

export default class Footer extends Component {
    render() {
        return (
            <footer id="contact">
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="titlepage">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <ul className="location_icon">
                                    <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a> Locatins</li>
                                    <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></a> +71 9087654321</li>
                                    <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>demo@gmail.com</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <form id="request" className="main_form">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <input className="contactus" placeholder="Full Name" type="type" name="Full Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Email" type="type" name="Email" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="textarea" placeholder="Message" type="type" name="message"></textarea>
                                        </div>
                                        <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <button className="send_btn">Send</button>
                                        </div>
                                        <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <ul className="social_icon">
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="map">
                                    <figure><img src={map} alt="#" /></figure>
                                </div>
                                <form className="bottom_form">
                                    <h3>Newsletter</h3>
                                    <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                                        <button className="sub_btn">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Copyright 2019 All Right Reserved By <a href="https://html.design/"> Free  html Templates</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
