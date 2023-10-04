import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import homeSlide from "../../../img/home-slide.png";

const SlideHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="slideHome">
      <div className="container">
        <div className="slideHome">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="slideHome__img"
          >
            <SwiperSlide key="slide1">
              <img src={homeSlide} alt="Slide 1" />
              <div className="slideText">
                <h1>Text on Slide 1</h1>
                <p>Additional information...</p>
                <button>СМОТРЕТЬ КАТАЛОГ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide key="slide2">
              <img src={homeSlide} alt="Slide 2" />
              <div className="slideText">
                <h1>Text on Slide 2</h1>
                <p>Additional information...</p>
                <button>СМОТРЕТЬ КАТАЛОГ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide key="slide3">
              <img src={homeSlide} alt="Slide 3" />
              <div className="slideText">
                <h1>loft мебель</h1>
                <p>Современная и удобная мебель в Анапе</p>
                <button>СМОТРЕТЬ КАТАЛОГ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide key="slide4">
              <img src={homeSlide} alt="Slide 4" />
              <div className="slideText">
                <h1>Text on Slide 4</h1>
                <p>Additional information...</p>
                <button>СМОТРЕТЬ КАТАЛОГ</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlideHome;
