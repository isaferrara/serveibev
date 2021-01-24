import React from 'react'
import { Card} from 'antd'
import { Link } from 'react-router-dom'

import {
    AlertOutlined
} from '@ant-design/icons';
import styled from 'styled-components'

const ContainerServicios= styled.div`
    margin: 1% auto 7% auto;

    width: 90%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    background-color: white;
`
const TitleServicios= styled.h2`
    text-align: left;
    font-size: 40px;
    font-weight: 300;
    margin: auto auto 0px 10%;
`

const CardServicios= styled.div`
        margin: 5px;
        width: 30%;
        height: 30%;
        display: flex;
        align-content: space-between;
        flex-direction: column;
        border-radius: 10px;
        background-color: white;
` 

const SubtitleServicios= styled.h2`
    color: #1f2933;
    font-size: 22px;
    margin: 10px 0;
    text-align: center;

`
const ParServicios= styled.p`
    font-size: 18px;
    text-align: left;
    margin: auto auto 5% 10%;

`

const ContainerCards= styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const BtnServ= styled.button`
    position: relative;
    margin: 3% auto 2% auto;
    width: 250px;
    font-size: 16px;
    background-color: transparent;
    width: 250px;
    font-size: 16px;
    color: orange;
    box-shadow: none;
    border: 1px solid orange;
    &:hover {
    width: 250px;
    font-size: 16px;
  }

`

export const Servicios = () => {
    
    return (
        <ContainerServicios>
                <TitleServicios>Nuestros servicios</TitleServicios>
                <ParServicios >Al consumir nuestros productos, usted recibirá de manera completamente <b>gratuita</b>:</ParServicios>
            <ContainerCards>
                <CardServicios >
                    <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                    <SubtitleServicios> Instalación</SubtitleServicios>
                </CardServicios>

                <CardServicios  >
                    <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                    <SubtitleServicios> Asistencia Técnica</SubtitleServicios>
                </CardServicios>
                
                <CardServicios  >
                    <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                    <SubtitleServicios> Mantenimiento </SubtitleServicios>
                </CardServicios>
            </ContainerCards>
            <BtnServ className= "btnGen" to="/nosotros" style={{padding:'10px 60px'}}>Más información</BtnServ>

    </ContainerServicios>
    )
}
export default Servicios