import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerNosotros= styled.div`
    height: 300px;
    background-color: #1F2933;
    margin-top: 60px;
    display: flex ;
    flex-direction: row ;
    justify-content: space-around;
`
const ContainerTextNosotros= styled.div`
        margin: 40px 0px 20px 90px;
        width: 250px;
`

const ContainerContactoFooter= styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        line-height: 30px;
        margin-left: 50px;

`
const ContainerBlog= styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        line-height: 40px;

`
const ContainerContacto= styled(ContainerBlog)`
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        line-height: 40px;
        width:300px;

`

const TitleFooter= styled.h3`
        color: white;
`
const ParagraphNos= styled.p`
        color: white;
        line-height: 19px;
        font-size: 13px;
`
const SmallFooter= styled.small`
        color: white;
        margin-left: 150px;
        margin-right: 150px;

`

const ParagraphContacto= styled(ParagraphNos)`
        line-height: 19px;
`
const ImageFooter= styled.img`
        margin-right: 100px;
        margin-top: 30px;
        width: 200px;
        height: 160px;
`

const Footer = () => {
    return (
        <footer>
        <ContainerNosotros>
            <ContainerTextNosotros>
                <TitleFooter>Nosotros</TitleFooter>
                <ParagraphNos>Dolor enim tempor ea in magna. Nisi qui laborum ullamco sit sit ut culpa
                    voluptate quis eiusmod laborum. Anim nostrud dolor amet tempor laborum eiusmod non quis fugiat.</ParagraphNos>
            </ContainerTextNosotros>
            
        <ContainerContactoFooter>
            <TitleFooter>Sitio</TitleFooter>
            <Link to='/'>Home</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/productos'>Productos y servicios</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contacto'>Contacto</Link>
        </ContainerContactoFooter>

        <ContainerBlog >
            <TitleFooter>Blog</TitleFooter>
            <Link to='/calidad'>Calidad de bebidas</Link>
            <Link to='/postmix'>Beneficios de Post-Mix</Link>
            <Link to='/practicas'>Buenas prácticas</Link>
        </ContainerBlog>
        <ContainerContacto >
            <TitleFooter>Contacto</TitleFooter>
            <ParagraphContacto><b>Horario:</b><br/>Lunes a Viernes 9:00 am a 19:00hrs.</ParagraphContacto>
            <ParagraphContacto><b>Dirección:</b><br/>Calle 12 No. 10, Col. Tlalnepantla Centro Tlalnepantla, Edo. de México, 54000</ParagraphContacto>
            <ParagraphContacto><b>Teléfono:</b><br/>015553696000</ParagraphContacto>
            <ParagraphContacto><b>Email:</b><br/>contacto@servibev.com.mx</ParagraphContacto>

        </ContainerContacto>
        <ImageFooter  alt='servibev logo' src='../../servibev.png'/>
        </ContainerNosotros>

        <Divider style={{ margin:'0px',color:'white'}} ></Divider>
            <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#1F2933', padding:'10px'}}>
                <SmallFooter > Servibev 2020</SmallFooter>
                <SmallFooter > Created by Isabel Ferrara</SmallFooter>
            </div>
        </footer>
    )
}
export default Footer