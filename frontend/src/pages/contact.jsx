
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Great experience with this product. It has exceeded my expectations!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'I love how easy it is to use. It has made my life so much better.',
    },
    
        {
          id: 3,
          name: 'John Doe',
          text: 'Great experience with this product. It has exceeded my expectations!',
        },
        {
          id: 4,
          name: 'Jane Smith',
          text: 'I love how easy it is to use. It has made my life so much better.',
        },
        // Add more testimonials as needed
  ];
export default function Contactus(){
    return(
      <>
     {/* <div className="container my-5">
      <h2 className="text-center mb-4">Testimonials</h2>
      <Carousel>
        {testimonialsData.map(testimonial => (
          <Carousel.Item key={testimonial.id}>
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">{testimonial.text}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{testimonial.name}</small>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>  */}
        <div className="container my-5">
      <h2 className="text-center mb-4">Testimonials</h2>
      <Carousel>
      <div className="row">
     
        {testimonialsData.map(testimonial => (
          <Carousel.Item key={testimonial.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow mb-4" >
              <div className="card-body">
                <p className="card-text">{testimonial.text}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{testimonial.name}</small>
              </div>
            </div>
            </Carousel.Item>
         
     

        ))}
     
      </div>
      </Carousel>
    </div>
            
                   
    
        </>   
    );
}