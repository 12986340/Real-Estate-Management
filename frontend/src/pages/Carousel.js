import slide1 from './images/house1.jpg';
import slide2 from './images/room1.jpg';
import slide3 from './images/carousel3.jpg';
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import 'D:\Cdac_Project\frontend\node_modules\bootstrap\dist\css\bootstrap-utilities.min.css';
export default function Carouselslide() {
 // const navigate = useNavigate()
 // const state = useSelector((state) => state);
 
  return (
    
    <div className='mt-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
             src={slide1} 
           // src="https://your-space-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/04/22100349/tips-to-keep-your-pg-room-clean.jpg"
            height={600} width={1600}
            alt="First slide"
          />
          { <Carousel.Caption>
            {/* {state.loggedin.IsLoggedIn ? "" : (
              <ButtonGroup size="lg" className="mb-2">
                <Button onClick={e => navigate('/login')} variant="info gradient me-2">Login</Button>
                <Button variant="success gradient" onClick={e => { navigate('/cregister') }}>Signup</Button>
              </ButtonGroup>
            )} */}
            <div class="carousel-caption" >
         <h1>Your Property Is Our Priority</h1>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
       </div>
          </Carousel.Caption> }
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-98"
            src={slide2}  height={600} width={1600}
            alt="Second slide"
          />

          {
            <Carousel.Caption>
           <div class="carousel-caption d-none d-md-block">
        <h1>Modern House Make Better Life</h1>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
          </Carousel.Caption>
           }
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-99 "
            src={slide3}  height={600} width={1600}
            alt="Third slide"
          />
     { 
          <Carousel.Caption>
            <div class="carousel-caption d-none d-md-block">
         <h1>Everyone Deserves the Opportunity of the Home</h1>
         {/* <p>Some representative placeholder content for the third slide.</p> */}
       </div>
          </Carousel.Caption>
     }
        </Carousel.Item>
      </Carousel>
     
    </div>
    
  );
    }

