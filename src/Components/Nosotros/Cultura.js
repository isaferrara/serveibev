import React, { useState } from 'react'
import styled from 'styled-components'
import {
    DashboardFilled,
  } from '@ant-design/icons';


const GeneralContent= styled.div`
    display: flex; 
    width: 100%; 
    flex-direction: column;
    align-items: center; 
    padding: 30px;

`
const OuterGeneralContent= styled.div`
    display: flex; 
    width: 80%; 
    background: #f7f7f7;
    flex-direction: column;
    align-items: center; 
    border-radius: 5px;
    margin: 3% auto 3% auto;


`
const TitleServibev= styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: black;
    text-align: center;
`
const TextServibev= styled.p`
    width: 60%;
    font-size: 16px;
    font-weight: 300;
    color: black;
    text-align: center;

`
const ContainerLogoss= styled.div`
    width: 80% ;
    display: flex ;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`
const ContainerLogos= styled.svg`
    font-size: 80px;
    margin: 10px 20px 20px 20px;
    color: white,  
`
const ContainerValues= styled.div`
    font-size: 80px;
    margin: 30px 10% 20px 10%;
    color: white,  
`
const Values= styled.h3`
    line-height: 20px;
    font-size: 30px;
    color: black,  
`

 const Cultura = () => {
    const logo={
        fontSize:'80px',
        color:'black',
        lineHeight: '20px',

    }

    return (
    <OuterGeneralContent>
        <GeneralContent>
        <TitleServibev>Nuestra cultura</TitleServibev>
            <TextServibev>
            Rassini es el productor más grande de componentes para suspensión de vehículos comerciales ligeros en el mundo y el único productor en América de discos para freno verticalmente integrado.
                <br/>
                <br/>
                Desarrollamos soluciones de movilidad a partir del uso de datos, inteligencia artificial, digitalización generalizada e innovación en materiales y procesos. Proporcionamos soluciones a fabricantes de automóviles en 10 países.
            </TextServibev>
            <ContainerLogoss>
                <ContainerValues>
                <DashboardFilled style={logo}/>
                <Values> Amor</Values>
            </ContainerValues>

            <ContainerValues>
                <DashboardFilled style={logo}/>
                <Values> Amor</Values>
            </ContainerValues>
            
            <ContainerValues>
                <DashboardFilled style={logo}/>
                <Values> Amor</Values>
            </ContainerValues>

            <ContainerValues>
                <DashboardFilled style={logo}/>
                <Values> Amor</Values>
            </ContainerValues>

            <ContainerValues>
                <DashboardFilled style={logo}/>
                <Values> Amor</Values>
            </ContainerValues>

        </ContainerLogoss> 
        </GeneralContent>

    </OuterGeneralContent>
    )
}
export default Cultura
