import { ButtonGroup, Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import slide1 from '../components/images/about.jpg';

export default function Aboutus() {

//   {/* This is for feedback button*/}
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//  {/* This is for Help Center button*/}
//   const [view, setView] = useState(false);

//   const handleClosed = () => setView(false);
//   const handleView = () => setView(true);

//    {/* This is for T&C Apply button*/}
//    const [showtc, setShowtc] = useState(false);

//    const handleClosetc = () => setShowtc(false);
//    const handleShowtc = () => setShowtc(true);


  return (
    <>
   <span>
   <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid" src={slide1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4"> Place To Find The Perfect Property</h1>
                        <p className="mb-4"><b>Welcome to our Real Estate Management System your ultimate solution for seamless property buying and selling without the hassle of traditional brokers.</b></p>
                        <p><i className="fa fa-check text-primary me-3"></i> At Property_Pulse, we are dedicated to revolutionizing the way real estate transactions are conducted, putting the power back into the hands of buyers and sellers</p>
                        <p><i className="fa fa-check text-primary me-3"></i>We are a team of passionate real estate enthusiasts and technology experts who recognized the need for a more efficient and transparent way to facilitate property transactions.</p>
                        <p><i className="fa fa-check text-primary me-3"></i> Feel free to explore our website and learn more about our services</p>
                        {/* <a className="btn btn-primary py-3 px-5 mt-3" href="">Explore</a> */}
                    </div>
                </div>
            </div>
        </div>
        <footer>
        <span>&copy; 2023 Real Estate Management System. All rights reserved.</span>
      </footer>
   </span>
  </>
  );
}
