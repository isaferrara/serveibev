import React from 'react'
import styled from 'styled-components'

const SaboresImg= styled.img`
        width: 150px;
        height: 150px;
        box-shadow: 1px 10px 10px 1px rgba(0,0,0,0.1);
`
const GeneralContainer= styled.div`
        position: relative;
        width: 75%;
        height: 1050px;
        background-color: white;
        margin: auto;
        top: 50px;
        z-index: 0;
`


const OuterContainer= styled.div`
        display: flex;
        align-content: center;
        flex-direction: row;
        justify-content: center;
        width: 80%;
        height: 500px;
        margin: auto;
        padding-top: 90px;
`
const InnerContainer= styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 485px;
        margin: 400px auto auto auto;
        background-color: #FAB033;
        box-shadow: 1px 10px 10px 1px rgba(0,0,0,0.1)
`
const SaboresContainer= styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        height: 500px;
        flex-direction: row;
        margin: 400px auto 200px auto;
`
const SaboresTitle= styled.h2`
        font-size: 50px;
        color: white;
`

const Sabores = () => {
    return (
        <GeneralContainer>
        <OuterContainer>
        <InnerContainer>
            <SaboresTitle> Sabores</SaboresTitle>
        </InnerContainer>
            <SaboresContainer>
                <SaboresImg alt='sabor' src='../../frutas/horchatas.png'/>
                <SaboresImg alt='sabor' src='../../frutas/jamaica.png'/>
                <SaboresImg alt='sabor' src='../../frutas/limonada.png'/>
                <SaboresImg alt='sabor' src='../../frutas/mandarina.png'/>
                <SaboresImg alt='sabor' src='../../frutas/mango.png'/>
                <SaboresImg alt='sabor' src='../../frutas/manzana.png'/>
                <SaboresImg alt='sabor' src='../../frutas/melon.png'/>
                <SaboresImg alt='sabor' src='../../frutas/naranja.png'/>
                <SaboresImg alt='sabor' src='../../frutas/piña-colada.png'/>
                <SaboresImg alt='sabor' src='../../frutas/tamarindo.png'/>
                <SaboresImg alt='sabor' src='../../frutas/te-helado.png'/>
                <SaboresImg alt='sabor' src='../../frutas/uva.png'/>

            </SaboresContainer>
        </OuterContainer>
        </GeneralContainer>
    )
}
export default Sabores