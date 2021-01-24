import React from 'react'
import styled from 'styled-components'

const OrangeContainer= styled.div`
  width:100%;
  padding-bottom: 5%;
  background: #FAA61C;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleMap= styled.h2`
  margin: 40px 30px 0px 30px;  
  color: white;
  font-size: 30px;
  font-weight: 600;
`
const MapContainer= styled.div`
    width:80%; 
    margin: 30px auto auto 17%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`
 const ColumnsContainer= styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
` 
const CityContainer= styled.div`
    text-align: left;
    margin: 10px;  
    display: flex;
    flex-direction: column;
` 
const StateName= styled.li`
    margin: 0;
    padding: 0;
    list-style-image: url('bullet.svg');
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 500;
` 
const CityName= styled.h4`
    text-align: right;
    margin-top: 0;  
    margin-left: 20px;  
    color: white;
    font-size: 17px;
    font-weight: 200;
` 

const ImgContainer= styled.div`
    position: relative;
    padding-bottom: 35%;
    margin: 0 5% 0 5%;
    width: 50%;
    height: 0;
` 
const ImgMap= styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
` 

export const Ubicacion = () => {
    return (
        <OrangeContainer> 
        <TitleMap> Ubicaciones</TitleMap>
        <MapContainer>
          <ColumnsContainer>
            <CityContainer> 
              <StateName>Puebla</StateName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
            </CityContainer>
            <CityContainer> 
              <StateName>Puebla</StateName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
            </CityContainer>        
            <CityContainer> 
              <StateName>Puebla</StateName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
            </CityContainer>  
          </ColumnsContainer>

          <ImgContainer>
            <ImgMap src='/mex-map.png'/>
            </ImgContainer>

          <ColumnsContainer>
          <CityContainer> 

              <StateName> Puebla  </StateName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
            </CityContainer>
            <CityContainer> 
              <StateName>Puebla</StateName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
            </CityContainer>        
            <CityContainer> 
              <StateName>Puebla</StateName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
              <CityName>Zacatlán</CityName>
            </CityContainer>  
          </ColumnsContainer>
          
         </MapContainer>
      </OrangeContainer>
    )
}

export default Ubicacion