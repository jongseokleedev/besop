import React, {useState, useEffect} from 'react';
import Home from '../Components/Home'
import Carousel from '../Components/Carousel'
import styled from "styled-components"
import CarouselData from "../static/CarouselData"

const Main = ()=> {
    const [carouselData, setCarouselData] = useState(CarouselData)
    return(
        <div>

        <Home/>
        <Carousel CarouselData={CarouselData}/>
        </div>
        
    )

}

export default Main