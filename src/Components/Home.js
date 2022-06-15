import React, {useState, useEffect} from 'react';
import styled from "styled-components"
// import homeBgImg from "/assets/homeBgImg.png"
// import homeBgImgTablet from "../assets/hoemBgImg_Tablet_1536x1230px.jpeg"
// import homeBgImgDeskTop from "../assets/homeBgImg_Desktop_XL_5120x1856px.jpeg"
// import homeBgImgMobile from "../assets/homeBgImg_Mobile_640x640px.jpeg"
// import homeBgImgPrimary from "../assets/homeBgImg_Primary_Full_Bleed_Desktop_L_2880x1044px.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const HomeWrapper = styled.section`
  display:flex;
  width: 100%;
  height: 610px;
  color:white;
`

const HomeImgSrc = styled.img`
    width: 10;
    height: 10;
    object-fit: cover;
`
const HomeImg = styled.figure`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const MainHeader = styled.section`
  display:flex;
  width: 100%;
  height: 610px;
  color:white;
`


const MainLeftWrapper = styled.div`
    /* position:relative; */
    display:flex;
    width: 100%;
    height: inherit;
    background-color: black;
    background-image: url("/assets/homeBgImg_Desktop_XL_5120x1856px.jpeg");
    background-repeat: no-repeat;
    background-size : cover;
`

const Picture = styled.picture`
    object-fit : cover;
    position : absolute;
    width :50%;
    height: inherit;
`

const MainLeftLogo = styled.span`
      padding-top: 200px;
      margin-left: 40px;
      cursor: pointer;
      font-size: 30px;
`

const MainLeftInnerWrapper = styled.div`
      width:30%;
      height: inherit;
      padding: 200px 0px 115px;
      margin: 0 200px 0 30px;

      h2{
        padding-bottom: 20px;
        font-size: 14px;
      }

      h1{

        padding-bottom: 30px;
        font-size: 30px;
      }
`
const MainLeftInnerContent = styled.div`
        p {
          padding-bottom: 30px;
          line-height:25px;
        }
`

const MainLeftInnerButton = styled.div`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 300px;
          height: 60px;
          padding:0 20px;
          border:1px solid #fffef2;
          font-size:14px;
`

const Home = () => {
    return(
        <MainHeader>
            <MainLeftWrapper>
                {/* <Picture>
                    <source media="(min-width: 1920px)" srcSet = {homeBgImgPrimary}/>
                    <source media="(min-width: 1025px)" srcSet = {homeBgImgDeskTop}/>
                    <source media="(min-width: 640px)" srcSet = {homeBgImgTablet}/>
                    <source media="(min-width: 0px)" srcSet = {homeBgImgMobile}/>
                    <img loading="lazy" alt="Full range screen" src = {homeBgImgMobile}/>
                </Picture> */}
                <MainLeftLogo>Besop</MainLeftLogo>
                <MainLeftInnerWrapper>
                    <header>
                        <h2>오 드 퍼퓸</h2>
                        <h1>향기로운 포옹</h1>
                    </header>
                    <MainLeftInnerContent>
                        <p>우드 향부터 상쾌한 시트러스 향까지, 다양한 Besop 향수는 추억과 신화, 매혹적인 성분으로 일상을 감싸줍니다. 아래에 기재된 설명과 서사를 살펴보면서 선호하는 향을 찾아보세요</p>
                    </MainLeftInnerContent>
                    <MainLeftInnerButton>
                        <span>향수 보기</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </MainLeftInnerButton>
                </MainLeftInnerWrapper>
            </MainLeftWrapper>
        </MainHeader>


        
    )

}

export default Home