import React from 'react'
import { Carousel } from 'antd';
import styled from 'styled-components'

const ContentStyle = styled.div`
    height: 400px;
    width: 600px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: 100% 73%;
`
const  SixValv= styled(ContentStyle)`
    background-image: url(../../valv6.png);
`
const  EightValv= styled(ContentStyle)`
    background-image: url(../../valv8.png);
`
const  Frappe= styled(ContentStyle)`
    background-image: url(../../frape.png);
`
const  CarouselStyle= styled(Carousel)`
    width: 600px;
    position: absolute;
    margin-left: 12%;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.14);
    background-color: white;
`
const ContentGeneral = styled.div`
    position: relative;
    bottom: 500px;
    background-color: white;
    width: 75%;
    height: 400px;
    padding-top: 500px;
    margin: auto;
    z-index: 0;

`
const ContentCarousel = styled.div`
    background-color: white;
    height: 450px;

`
const Equipos = () => {

    return (
        <ContentGeneral>
         <ContentCarousel>
          <CarouselStyle autoplay dotPosition='top' > 
            <SixValv></SixValv>
          <EightValv></EightValv>
          <Frappe></Frappe>   
        </CarouselStyle>
        </ContentCarousel>
      </ContentGeneral>

    )
}
export default Equipos