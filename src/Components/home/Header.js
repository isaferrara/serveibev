import React, { useState } from 'react'
import { Modal } from 'antd'
import { Link } from 'react-router-dom'
import {
    PlayCircleOutlined,
  } from '@ant-design/icons';
import styled from 'styled-components'


const ContainerHeader= styled.div`
        height:80vh;
        background-image: url(../../f10.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size:  cover;
        display: flex;
        align-items: center;
        justify-content: center;
 
`
const Servibev= styled.h1`
        position: absolute;
        top: 10%;
        left: 13%;
        font-size: 100px;
        color: black;
        fontFamily: sans-serif;
`
const Description= styled.h2`
        position: absolute;
        top: 25%;
        left: 12%;
        font-size: 30px;
        color: black;
`
const BtnCalidad= styled(Link)`
    position: absolute;
    top:43%;
    left: 17%;
`
const ImgPost= styled.img`
    position: absolute;
    width: 400px;
    left: 10%;
    top: 5%;
`
const Header = () => {

    return (
        <div>
            <ContainerHeader>
              <ImgPost src='../../servibev.png'/>
              <BtnCalidad to='/nosotros' className='btnGen' >Más información</BtnCalidad>
          </ContainerHeader>
        </div>
    )
}
export default Header