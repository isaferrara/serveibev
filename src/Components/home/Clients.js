import React from 'react'
import {
    DashboardFilled,
  } from '@ant-design/icons';
import styled from 'styled-components'

const ContainerClients= styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 5% auto 40px auto;
`
const TitleClients= styled.h2`
    font-size: 40px ;
    font-weight: 300 ;
    text-align: center;
    padding-top: 20px;
`
const ContainerLogoss= styled.div`
    width: 800px ;
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

export const Clients = () => {
    const logo={
        fontSize:'80px',
        margin:'10px 20px 20px 20px',
        color:'black',
    }
    return (
        <ContainerClients >
        <TitleClients> Nuestros clientes</TitleClients>
        <ContainerLogoss>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
        </ContainerLogoss>  
        </ContainerClients>
    )
}
export default Clients