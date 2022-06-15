import React from 'react';
import styled from "styled-components";
// import CarouselAssets from "../assets/Carousel"

const ItemList = styled.div`
    min-height :200px;
    margin-top :50px;
    padding-top :80px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    justify-content: center;    
    align-items: center;
    background-color: #fffef0;
`


const Items = styled.div`
    min-width: 200px;
    background-color: #fffef0;
      width: 450px;
      height: 300px;
      margin-bottom:25px;
      padding-bottom: 30px;;
      display: flex;
      flex-direction: column ;
      justify-content:flex-end;
      align-items: center;
      cursor: pointer;

      img {
        background-color: #fffef0;
          width: 100%;
          height: auto;
      }
`

const ItemDesc = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fffef0;
    
    span  {
        font-size:14px;

        &:first-child {
            margin:10px 0px
        }
    }

`

// const baseUrl = "../assets/Carousel/";

const CarouselItem = ({id,title,desc,alt,src}) => {
    return (
        <ItemList>
            <Items>
                <img alt={alt} src={`/assets/Carousel/${src}`}/>
                <ItemDesc>
                    <span>{title}</span>
                    <span>{desc}</span>
                </ItemDesc>
            </Items>
        </ItemList>
    )
}

export default CarouselItem;