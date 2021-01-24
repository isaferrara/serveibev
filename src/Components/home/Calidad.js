import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const ContainerCalidad= styled.div`
    width: 100%;
    height: 500px;
    background-image: url(../../calidad.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size:  cover;
    text-align: center;
    display: flex;
    justify-content: center;
`

const TitleMain= styled.div`
    position: absolute;
    margin: auto;
    color: black;
    height: 70px;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    margin-top:12%;
`
const BtnCalidad= styled(Link)`
    position: absolute;
    margin-top:20%;
`

const Calidad = () => {
    return (
            <ContainerCalidad>
                <TitleMain> Calidad</TitleMain>              
                <BtnCalidad to='/nosotros' className='btnGen' >Más información</BtnCalidad>
            </ContainerCalidad>   
    )
}

export default Calidad

