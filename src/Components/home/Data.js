import React from 'react'
import {
    DashboardFilled,
  } from '@ant-design/icons';
import styled from 'styled-components'

const DataServibev= styled.h3`
    margin-top: 15px ;
    color: black ;
    font-size: 18px ;
    font-weight: 200 ;
    line-height: 17px;
    
`

const DataContainer=styled.div`
    margin: 15px auto 2px auto;
    position:relative;
    border-radius:5px;
    z-index: 0;
    padding: 1vh 0vh 1vh 0vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f7f7f7;     
`

const DataContainerSingle=styled.div`
    display: flex;
    width: 12%;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin-top: 15px;
    margin-bottom: 35px;
    text-align: center;
    position:relative;

`

export const Data = () => {
    return (
        <div style={{backgroundColor:'white'}}>
        <DataContainer>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px', color: 'gray'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px', color: 'gray'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px', color: 'gray'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
            <DataContainerSingle>
                <DashboardFilled style={{fontSize:'38px', color: 'gray'}}/>
                <DataServibev> Más de 100 clientes en México</DataServibev>
            </DataContainerSingle>
        </DataContainer>
        </div>
    )
}
export default Data