import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerPost= styled.div`
    padding: 0% 0 30% 0;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    background:white;
    z-index: -1;
    margin-top: 3%;

`

const TitlePost= styled.h2`
    text-align: left;
    font-size: 40px;
    font-weight: 300;
    margin: auto auto 0px 13%;
`

const ImgPost= styled.img`
    position: relative;
    width: calc(100%/3);
    height: 350px;
`


export const PostMix = () => {
    return (
            <ContainerPost>
            <div>
                    <TitlePost>Post-mix</TitlePost>
                    <ImgPost src='../../fabrica.jpeg'/>
                    <ImgPost src='../../postmix.png'/>
                    <ImgPost src='../../instalacion.jpeg'/>

            </div>
            </ContainerPost>   
    )
}
export default PostMix