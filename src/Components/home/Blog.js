import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerGeneral= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6%;
`
const AlDía= styled.h2`
    font-size: 40px;
    font-weight: 300;
`

const ContainerOuterRow= styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`
const ContainerCard= styled.div`
    width: 300px;
    height: 230px;
    padding: 20px;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
`
const Category= styled.div`
    width: 120px;
    height: 25px;
    margin: 15px;
    background-color: gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #faa61b;
    color: white;
`
const TitleBlog= styled.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin-left: 5%;
`
const TextBlog= styled.h2`
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    margin-left: 5%;
`
const LeerMas= styled(Link)`
    font-size: 18px;
    font-weight: 200;
    text-align: left;
    margin-left: 5%;
    color: #faa61b;

`
const Blog = () => {
    return (
        <ContainerGeneral>
            <AlDía> Al día</AlDía>
            <ContainerOuterRow>
                <ContainerCard>
                    <Category> Post-mix</Category>
                    <TitleBlog> Beneficios de postmix</TitleBlog>
                    <TextBlog> Beneficios de postmix hola como estas yo muy bien</TextBlog>
                    <LeerMas to='/blog'>Leer más > </LeerMas>
                </ContainerCard>
                
                <ContainerCard>
                    <Category> Post-mix</Category>
                    <TitleBlog> Beneficios de postmix</TitleBlog>
                    <TextBlog> Beneficios de postmix hola como estas yo muy bien</TextBlog>
                    <LeerMas to='/blog'>Leer más > </LeerMas>
                 </ContainerCard>

                <ContainerCard>
                <Category> Post-mix</Category>
                    <TitleBlog> Beneficios de postmix</TitleBlog>
                    <TextBlog> Beneficios de postmix hola como estas yo muy bien</TextBlog>
                    <LeerMas to='/blog'>Leer más > </LeerMas>
                </ContainerCard>
            </ContainerOuterRow>
        </ContainerGeneral>
    )
}
export default Blog