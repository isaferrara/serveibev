import React from 'react'
import styled from 'styled-components'

const GeneralContainer= styled.div`
    padding: 5% 0 5% 0;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    z-index: 1;
`
const OuterContainer= styled.div`
    width: 1000px;
    height: 400px;
    top: 40%;
    border-radius: 10px;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.10);
    background-color: white;
`
const InnerContainer= styled.div`
    position: relative;
    padding: 5vh;
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    left: 50%;
`
const TitlePost= styled.h2`
    font-size:40px;
    font-weight: 300;
    color: black;
`

const PostImg= styled.img`
    width: 450px;
    position: absolute;
    bottom: 0px;
    top: 110px;
    left: 270px;
    border-radius: 10px;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.14);
`
const Postmix = () => {
    return (
        <div>
            <GeneralContainer>
            <div>
                <OuterContainer>
                    <InnerContainer>
                    <TitlePost>Post-mix</TitlePost>
                        <p> El sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales. Su facilidad de uso y bajo costo de mantenimiento permite generar rentabilidad para los negocios del ramo de alimentos y bebidas.
Este sistema es adecuado para los negocios que sirven a grandes cantidades de refrescos y bebidas que requieren de rapidez.</p>

                    </InnerContainer>

                    <PostImg src='../../postmix.png'/>
               
                </OuterContainer>
            </div>
            </GeneralContainer>  
        </div>
    )
}

export default Postmix