import React from 'react'
import styled from 'styled-components'

const ComedroesContainer= styled.div`
    position: relative;
    padding: 10% 0 30% 0;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
`

const ContainerOuter= styled.div`
    width: 1000px;
    height: 400px;
    top:40%;
    border-radius: 10px;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.14);
    background-color: white;
`
const ContainerInner= styled.div`
    position: relative;
    padding: 5vh;
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    top: 5%;
`
const TextWho= styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin: 0; 
    line-height: 16px;
`
const TextCliente= styled.h2`
    font-size: 35px;
    font-weight: 300;
    color: black;

`
const ContainerExtra= styled.div`
    position: relative;
    width: 45%;
    height: 300px;
    bottom: 250px;
    left: 50%;
    border-radius: 10px;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.14);
    background-image: url(https://kokomexico.com/wp-content/uploads/2017/09/COMEDORES-770x510.jpg);
    background-size: 110%;
`
const Comedores = () => {
    return (
        <div >
            <ComedroesContainer>
            <div>
                <ContainerOuter>
                    <ContainerInner>
                    <TextWho>¿Quiénes son nuestros clientes?</TextWho>
                    <TextCliente>Comedores industriales</TextCliente>
                        <p> El sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales. Su facilidad de uso y bajo costo de mantenimiento permite generar rentabilidad para los negocios del ramo de alimentos y bebidas.
Este sistema es adecuado para los negocios que sirven a grandes cantidades de refrescos y bebidas que requieren de rapidez.</p>
                </ContainerInner>
                    <ContainerExtra/>
                </ContainerOuter>
                </div>
            </ComedroesContainer>
        </div>   
    )
}
export default Comedores