import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imageOne from "../assets/1.jpeg";
import "./style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // One item per slide on desktop (full screen)
    slidesToSlide: 1, // One slide at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, // One item per slide on tablet (full screen)
    slidesToSlide: 1, // One slide at a time
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // One item per slide on mobile (full screen)
    slidesToSlide: 1, // One slide at a time
  },
};

const CustomCarousel: React.FC = () => {
  return (
    <Carousel
      swipeable={true} // Allow swipe on mobile
      draggable={true} // Allow dragging
      showDots={true} // Show dots navigation
      responsive={responsive}
      ssr={true} // Server-side rendering enabled
      infinite={true} // Infinite looping
      autoPlay={true} // Auto play by default
      autoPlaySpeed={3000} // Adjust speed to 3 seconds
      keyBoardControl={true} // Enable keyboard navigation
      customTransition="all .5" // Custom transition
      transitionDuration={500} // 0.5 second transition
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style" // Custom class for dots
      itemClass="carousel-item-padding-40-px" // Custom padding for items
    >
      <div className="carousel-item flex justify-center items-center">
        <img
          src={imageOne}
          alt="Item 1"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src={imageOne}
          alt="Item 2"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src={imageOne}
          alt="Item 3"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="carousel-item flex justify-center items-center">
        <img
          src={imageOne}
          alt="Item 4"
          className="w-screen h-screen object-cover"
        />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
