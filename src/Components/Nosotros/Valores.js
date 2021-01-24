import React from 'react'
import styled from 'styled-components'

const GeneralContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-bottom: 100px;
    margin-top: 50px;

`

const SectionServibev = styled.section`
    width: 15%;
    background-color: white;
    padding: 145px 15px 145px 15px;
    border-radius: 6px;
    margin: 5px;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.14);
`
 

const TitleServibev = styled.h1`
    font-size: 40px;
    font-weight: 300;
    text-align: center;
    color: #323f4b;
    font-family: sans-serif;
`

const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width:800px;
`
const QuienesSection = styled.section`
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    width:99%;
    background-color: #FAB033;
    padding: 15px;
    border-radius: 6px;
    margin: 5px;
    boxShadow: 1px 21px 42px 2px rgba(0,0,0,0.14);   
`
const TitleQuienes = styled.h2`
    font-size: 30px;
    font-weight: 300;
    width:50%;
    margin:auto;
    text-align: center;
    color: white;
    font-family: sans-serif;
` 
const TextVal = styled.p`
    textAlign: left;
    width: 50%;
    color: white;
` 
const TextmYV = styled.p`
    textAlign: left;
    color: white;
`

const ContainerMyV = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    margin: 5px;

`
const VisionSection = styled.section`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    width:49%;
    background-color: #94CA55;
    padding: 15px;
    border-radius: 6px;
    boxShadow: 1px 21px 42px 2px rgba(0,0,0,0.14);   
`
const MisionSection = styled(VisionSection)`
    background-color: #EF325A;
  
`


const Valores = () => {
    return (
        <GeneralContainer>
                <SectionServibev>
                <TitleServibev>Servibev</TitleServibev>
                </SectionServibev>

            <ValuesContainer>           
                <QuienesSection>
                    <TitleQuienes> ¿Quiénes somos?</TitleQuienes>
                    <TextVal>Servibev es  una empresa 100% mexicana, especializada en la producción de concentrados y jarabes de origen natural,  dispensados por sistema post-mix.</TextVal>
                </QuienesSection>

                <ContainerMyV>
                <VisionSection>
                    <TitleQuienes>Visión</TitleQuienes>
                    <TextmYV>Participar en mercados globalizados, con productos de mayor valor agregado a través de la innovación tecnológica y comercial de sus productos y procesos actuales.</TextmYV>
                </VisionSection>
                <MisionSection>
                    <TitleQuienes>Misión</TitleQuienes>
                    <TextmYV>Ser líder en la elaboración de jarabes y concentrados a nivel nacional, desarrollar las habilidades y el crecimiento personal de sus empleados y dar a los accionistas la rentabilidad esperada sobre su inversión.</TextmYV>
                </MisionSection>
                </ContainerMyV>

            </ValuesContainer>
        </GeneralContainer>
    )
}
export default Valores