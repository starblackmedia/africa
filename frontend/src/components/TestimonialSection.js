import React from 'react';
import Slider from 'react-slick'; // Importing slider for carousel
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import profilePic1 from '../assets/addimelody.jpg'; 
import profilePic2 from '../assets/seyishay.png';
import profilePic3 from '../assets/lax.png';

const testimonials = [
    {
      id: 1,
      image: profilePic1,
      name: 'Jane Doe',
      role: 'Artist',
      quote: 'This platform has helped me grow my audience exponentially!',
      rating: 5
    },
    {
      id: 2,
      image: profilePic2,
      name: 'John Smith',
      role: 'Fan',
      quote: 'Amazing fan-artist interaction experience. I feel so connected to my favorite artists!',
      rating: 4
    },
    {
      id: 3,
      image: profilePic3,
      name: 'Alex Johnson',
      role: 'Influencer',
      quote: 'A fantastic tool for influencers and artists alike.',
      rating: 5
    }
  ];
  
  const TestimonialSection = () => {
    // Slick Carousel settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Auto-scroll
      autoplaySpeed: 3000, // Speed of auto-scroll
      pauseOnHover: true, // Pause auto-scroll when the user hovers
      swipeToSlide: true, // Allow manual swipe to navigate
      arrows: true, // Enable navigation arrows if desired
      touchMove: true, // Enable touch navigation for mobile
      responsive: [
        {
          breakpoint: 768, // Mobile breakpoint
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
  
    return (
      <section className="testimonial-section py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Community Is Saying</h2>
        <p className="text-center text-gray-600 mb-12">Hear from artists and fans who are thriving on our platform.</p>
  
        {/* Mobile Slider */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                <p className="text-center text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-gray-700 text-center">"{testimonial.quote}"</p>
                <p className="text-center mt-2 text-yellow-500">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </p>
              </div>
            ))}
          </Slider>
        </div>
  
        {/* Grid for PC */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                  alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
              <p className="text-center text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-4 text-gray-700 text-center">"{testimonial.quote}"</p>
              <p className="text-center mt-2 text-yellow-500">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;