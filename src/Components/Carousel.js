import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import CarouselData from "../static/CarouselData";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar} from "swiper";
import CarouselItem from "./CarouselItem";
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


const SlideSection = styled.section`
    width: 100%;
    height: 650px;
    /* margin: 50px 0; */
    background-color: #fffef0;

    .swiper-container {
        background-color: #fffef0;
    }
    .swiper-wrapper {
        background-color: #fffef0;
    }
    .swiper-slide{
        background-color: #fffef0;
    }
    .swiper-slide{
        background-color: #fffef0;
    }
    .swiper-slide-active{
        background-color: #fffef0;
    }
  .swiper-button-next {
    right:0px !important;
  }
  
  .swiper-button-prev {
    left:0px !important;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    width:80px !important;
    height: 80px !important;
    background-color: black !important;
    color: white !important;
      
    &::after {
      font-size: 15px !important;
    }
  }
    
  .swiper-button-disabled {
    opacity: 0 !important;
    cursor: auto !important;
    pointer-events: none !important;
  }
  
  .swiper-scrollbar {
    position: absolute;
    left: 80px !important;
    width: 91.5% !important;
    height:2px !important;
  
    .swiper-scrollbar-drag {
      height:2px !important;
    }
  }
`

const StyledSwiper = styled(Swiper)`
    background-color: #fffef0;
`
const StyledSwiperSlide = styled(SwiperSlide)`
    background-color: #fffef0;
`

// const CarouselWrapper = styled.div`
//         position :relative;
//         padding: 150px 0;
//         overflow: hidden;
//     `

    const NavButton = styled.button`
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: grey;
        color:white;
        font-size :16px;
        text-align:center;
    `

    const itemWrapper = styled.div`
        display:flex;
        margin: 0 100px 50px;
    `

const Carousel = ({CarouselData}) => {

    
    SwiperCore.use([Navigation, Pagination, Scrollbar]);
    
    const swiperStyle= {
        backgroundcolor: "#fffef0"
    }

    return (
        <SlideSection>
            <StyledSwiper
                slidesPerView={4}
                // sliderpergroup={1}
                navigation
                scrollbar
                autoplay
                delay={3000}
                type="progressbar"
                // spacebetween={50}
                // pagination={{clickable:true}}
                >

                {CarouselData && CarouselData.map ( item => {
                    return(
                        <SwiperSlide key={item.id}>
                        {<CarouselItem
                            id={item.id}
                            desc={item.desc}
                            title={item.title}
                            alt={item.alt}
                            src={item.src}
                        />}
                        </SwiperSlide>
                        )
                    }
                )
            }

            </StyledSwiper>
        </SlideSection>
    );

}

export default Carousel;
