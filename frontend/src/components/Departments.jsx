// eslint-disable-next-line no-unused-vars
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.avif",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/artho.avif",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpeg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.png",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true} // means to render carousel on server-side.
        infinite={true} // Enable infinite scrolling
        autoPlay={true} // Enable auto-play
        autoPlaySpeed={3000} // Auto-play speed in milliseconds
        keyBoardControl={true} // Enable keyboard control
        customTransition="transform 10s linear" // Smooth transition
        transitionDuration={100} // Duration of transition in ms
        containerClass="carousel-container" // Container class for styling
        itemClass="carousel-item-padding-40-px" // Class for item padding
        // swipeable={true} // Enable swipe to scroll
        // draggable={true} // Enable dragging to scroll
        showDots={false} // Hide dots navigation
      >
        {departmentsArray.map((depart, index) => (
          <div key={index} className="card-slider slide">
            <div className="depart-name">{depart.name}</div>
            <img src={depart.imageUrl} alt="Department" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Departments;