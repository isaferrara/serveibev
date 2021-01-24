import React from 'react'
import styled from 'styled-components'

const HeaderProf= styled.div`
        width: 100%;
        height: 50vh;
        background-image: url(../../b3.jpg);
        background-position:  0% 0%;
        background-size:  cover;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
`
const Shadow= styled.div`
    box-shadow: 2px 0px 26px 4px rgba(0,0,0,0.41);
`
const TitleProd= styled.h2`
    font-size: 70px;
    font-weight: 500;
    margin-bottom: 100px;
    font-family: sans-serif;
    letter-spacing: 2px;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.51)
`
const Header = () => {

    return (
        <Shadow>
            <HeaderProf>
                <TitleProd>Productos y servicios</TitleProd>
            </HeaderProf>
        </Shadow>
    )
}
export default Header