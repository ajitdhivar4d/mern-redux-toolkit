import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className="  ">
      <Slider {...settings} className="w-full opacity-75 ">
        <div>
          <img
            className="w-full h-[43vw]  object-cover"
            src="https://images.unsplash.com/photo-1552604617-eea98aa27234?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[43vw]   object-cover"
            src=" https://images.unsplash.com/photo-1498579485796-98be3abc076e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[43vw]   object-cover"
            src="https://images.unsplash.com/photo-1569917761875-e2897cee7d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[43vw]   object-cover"
            src="https://plus.unsplash.com/premium_photo-1683657860029-05a5415fa618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
