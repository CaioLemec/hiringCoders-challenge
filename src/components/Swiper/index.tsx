import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from './styles';
import headPhoneImg from '../../assets/images/headPhone.png';
import sneakerImg from '../../assets/images/sneaker.png';
import notebookImg from '../../assets/images/notebook.png';
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  EffectFlip,Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([EffectFlip,Pagination,Navigation]);

export function Carousel() {
  return (
    <Container>
    <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
    
    <SwiperSlide className="swiper-slide" >
        <div>
        <img src={headPhoneImg} alt="phone" />
        <h3>Headphones</h3>
        <span>20% OFF</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide" >
        <div>
        <img src={sneakerImg} alt="red sneakers" />
        <h3>Sneakers</h3>
        <span>30% OFF</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide" >
        <div>
        <img src={notebookImg} alt="notebook" />
        <h3>Notebooks</h3>
        <span>40% OFF</span>
        </div>
        </SwiperSlide>

    </Swiper>
    </Container>
  )
}



// style={
//     { '--swiper-navigation-color': '#FFBA08' }}