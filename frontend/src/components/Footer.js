import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";
//import slide1 from '../pages/images/blackwall.jpg';

export default function Footer() {
  return (
    <footer className="Footer stick-bottom  text-center text-white mx-auto " style={{ background: "black",width:"100%",margin:0 }} >

      {
      /* <div className="container-fluid p-1"  >

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/login.php" type="button" target="_blank"
        ><i className="fa fa-facebook-f"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://twitter.com/login/" type="button" target="_blank"
        ><i className="fa fa-twitter"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://myaccount.google.com/" Type="button" target="_blank"
        ><i className="fa fa-google"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/" type="button" target="_blank"
        ><i className="fa fa-instagram"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/uas/login" type="button" target="_blank"
        ><i className="fa fa-linkedin"></i
        ></a>


        <a className="btn btn-outline-light btn-floating m-2" href="https://github.com/login" type="button" target="_blank"
        ><i className="fa fa-github"></i
        ></a>


      </div> */}
      <div >
        <h2>Property_Pulse</h2>
        <p>Explore the website for much more Amazing experience !
        </p>
        <p>Contact No: +919999999999    &ensp; &ensp; &ensp;    Gmail: Propertypulse@gmail.com</p>

      </div>


      <div className="text-center p-1" >
        © 2023 Copyright by Team-0000 .
        
      </div>
      <br />
    </footer>
  );
}
