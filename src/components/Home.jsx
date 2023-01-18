import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import car from "../images/car.png";
import thr from "../images/thr.png";
import thr1 from "../images/thr1.png";
import thr2 from "../images/thr2.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import tes from "../images/tes.jpg";
import tes1 from "../images/tes1.jpg";

export default class Home extends Component {
   componentDidMount() {
      document.title = "Home"; 
   }
   render() {
      return (
         <>
            <section className="banner_main">
               <div id="banner1" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#banner1" data-slide-to="0" className="active"></li>
                     <li data-target="#banner1" data-slide-to="1"></li>
                     <li data-target="#banner1" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container-fluid">
                           <div className="carousel-caption">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="text-bg">
                                       <h1>Welcome</h1>
                                       <span>car repair services</span>
                                       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                       <a href="#">More Info </a> <Link to="/about">About Us</Link>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="text_img">
                                       <figure><img src={car} alt="#" /></figure>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container-fluid">
                           <div className="carousel-caption">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="text-bg">
                                       <h1>Welcome</h1>
                                       <span>car repair services</span>
                                       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                       <a href="#">More Info </a> <Link to="/about">About Us</Link>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="text_img">
                                       <figure><img src={car} alt="#" /></figure>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container-fluid">
                           <div className="carousel-caption">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="text-bg">
                                       <h1>Welcome</h1>
                                       <span>car repair services</span>
                                       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                       <a href="#">More Info </a> <a href="#">Contact Us</a>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="text_img">
                                       <figure><img src={car} alt="#" /></figure>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                     <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>
                  <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
                     <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
               </div>
            </section>
            <div className="three_box">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                        <div className="box_text">
                           <h3>AUTO DIAGNOSE</h3>
                           <i><img src={thr} alt="#" /></i>
                           <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="box_text">
                           <h3>AUTO DIAGNOSE</h3>
                           <i><img src={thr1} alt="#" /></i>
                           <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="box_text">
                           <h3>AUTO DIAGNOSE</h3>
                           <i><img src={thr2} alt="#" /></i>
                           <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="about">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>About Our Car Service </h2>
                        </div>
                     </div>
                  </div>
                  <div className="container">
                     <div className="row">
                        <div className="col-md-10 offset-md-1">
                           <div className="about_img">
                              <div className="about_box">
                                 <h3>Dolor sit amet, consectetur adipiscing elit,  </h3>
                                 <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                 <a className="read_more">Read More</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="wedo ">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>What We Do</h2>
                           <p>It is a long established fact that a reader will be distracted by the </p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <div className="row">
                           <div className="col-md-6 margin_bottom">
                              <div className="work">
                                 <figure><img src={img1} alt="#" /></figure>
                              </div>
                              <div className="work_text">
                                 <h3>Quick repair<br /><span className="blu">Total Service</span></h3>
                              </div>
                           </div>
                           <div className="col-md-6 margin_bottom">
                              <div className="work">
                                 <figure><img src={img2} alt="#" /></figure>
                              </div>
                              <div className="work_text">
                                 <h3>Quick repair<br /><span className="blu">Total Service</span></h3>
                              </div>
                           </div>
                           <div className="col-md-6 margin_bottom">
                              <div className="work">
                                 <figure><img src={img3} alt="#" /></figure>
                              </div>
                              <div className="work_text">
                                 <h3>Quick repair<br /> <span className="blu">Total Service</span></h3>
                              </div>
                           </div>
                           <div className="col-md-6 margin_bottom">
                              <div className="work">
                                 <figure><img src={img4} alt="#" /></figure>
                              </div>
                              <div className="work_text">
                                 <h3>Quick repair<br /><span className="blu">Total Service</span></h3>
                              </div>
                           </div>
                        </div>
                        <a className="read_more" href="#">See More</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="testimonial">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="titlepage">
                           <h2>Testimonial</h2>
                           <p>It is a long established fact that a reader will be distracted by the </p>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide testimonial_Carousel " data-ride="carousel">
                           <ol className="carousel-indicators">
                              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                              <li data-target="#myCarousel" data-slide-to="1"></li>
                              <li data-target="#myCarousel" data-slide-to="2"></li>
                           </ol>
                           <div className="carousel-inner">
                              <div className="carousel-item active">
                                 <div className="container">
                                    <div className="carousel-caption ">
                                       <div className="row">
                                          <div className="col-md-6 margin_boot">
                                             <div className="test_box">
                                                <i><img src="images/tes.jpg" alt="#" /></i>
                                                <h4>JCKOLO</h4>
                                                <span>(It is a long )</span>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                                             </div>
                                          </div>
                                          <div className="col-md-6 margin_boot">
                                             <div className="test_box">
                                                <i><img src="images/tes1.jpg" alt="#" /></i>
                                                <h4>ROCOYO</h4>
                                                <span>(It is a long )</span>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-item">
                                 <div className="container">
                                    <div className="carousel-caption">
                                       <div className="row">
                                          <div className="col-md-6 margin_boot">
                                             <div className="test_box">
                                                <i><img src="images/tes.jpg" alt="#" /></i>
                                                <h4>JCKOLO</h4>
                                                <span>(It is a long )</span>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                                             </div>
                                          </div>
                                          <div className="col-md-6 margin_boot">
                                             <div className="test_box">
                                                <i><img src="images/tes1.jpg" alt="#" /></i>
                                                <h4>ROCOYO</h4>
                                                <span>(It is a long )</span>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-item">
                                 <div className="container">
                                    <div className="carousel-caption">
                                       <div className="row">
                                          <div className="col-md-6 margin_boot">
                                             <div className="test_box">
                                                <i><img src={tes} alt="#" /></i>
                                                <h4>JCKOLO</h4>
                                                <span>(It is a long )</span>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                                             </div>
                                          </div>
                                          <div className="col-md-6 margin_boot">
                                             <div className="test_box">
                                                <i><img src={tes1} alt="#" /></i>
                                                <h4>ROCOYO</h4>
                                                <span>(It is a long )</span>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                           </a>
                           <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
