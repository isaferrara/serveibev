import React, { useState } from 'react'
import {PlayCircleOutlined,} from '@ant-design/icons';
import styled from 'styled-components'

const GeneralContent= styled.div`
    display: flex; 
    width: 100%; 
    flex-direction: column;
    align-items: center; 
    margin: 5% auto 5% auto; 

`
const TitleServibev= styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: black;
    text-align: center;
`
const TextServibev= styled.p`
    width: 70%;
    font-size: 17px;
    font-weight: 300;
    color: black;
    text-align: center;

`

 const Servibev = () => {

    return (
        <GeneralContent>
        <TitleServibev>Soluciones de calidad</TitleServibev>
            <TextServibev>
            Rassini es el productor más grande de componentes para suspensión de vehículos comerciales ligeros en el mundo y el único productor en América de discos para freno verticalmente integrado.
                <br/>
                <br/>
                Desarrollamos soluciones de movilidad a partir del uso de datos, inteligencia artificial, digitalización generalizada e innovación en materiales y procesos. Proporcionamos soluciones a fabricantes de automóviles en 10 países, suministrando componentes a más de ocho millones de automóviles cada año.
            </TextServibev>
        </GeneralContent>
    )
}
export default Servibev
