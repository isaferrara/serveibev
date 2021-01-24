import React from 'react'
import {
    DashboardFilled,
  } from '@ant-design/icons';
import styled from 'styled-components'


const DataContainer=styled.div`
    margin-top: 220px;
    height: 220px;
    padding:15vh 10vh 1vh 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #d8d8d8;
    box-shadow:1px 21px 42px 2px rgba(0,0,0,0, 0.34)
    `

const DataContainerSingle=styled.div`
    display: flex;
    width: 170px;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin-bottom: 35px;
    text-align: center;
` 
const DataServibev= styled.h3`
    margin-top: 15px ;
    color: white ;
    font-size: 18px ;
    font-weight: 200 ;
    line-height: 17px;
`

export const Data = () => {

    return (
        <DataContainer>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <DataServibev> Más de 20 años de experiencia</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>

        </DataContainer>
    )
}
export default Data