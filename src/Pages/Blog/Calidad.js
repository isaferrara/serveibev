import React from 'react'
import Footer from '../../Components/Footer.js'
import LayoutServibev from '../../Components/LayoutServibev'
import { BlogHeader } from '../../Components/BlogHeader.js'

 const Calidad = () => {
    return (
        <div style={{backgroundColor:'#f1f2f5'}}>
            <LayoutServibev>
            <BlogHeader/>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%' }}>
                <article style={{display:'flex', alignItems:'center', width:'70%', height:'140vh', marginTop:'40px', backgroundColor:'white', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.09)'}}>
                    <div style={{width:'100%', textAlign:'center', marginTop:'70px'}}>
                        <h1> Conoce las ventajas del sistema Post Mix</h1>     
                        <img src='../../postmix.png' style={{width:'450px', bottom:'0px', right:'30px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>      
                        <p style={{margin:'40px 70px 40px 70px', textAlign:'left'}}>
                        Si aún no estas familiarizado con las ventajas que ofrece el sistema Post Mix para tu negocio, tenemos para ti la siguiente información que esperamos sea de utilidad.
                        El sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales.
                        Su facilidad de uso y bajo costo de mantenimiento permite generar rentablidad para los negocios del ramo de alimentos y bebidas.
                        <br/>
                            <p style={{marginTop:'20px'}}>
                            El sistema consiste en un dispensador Postmix en el que se realiza la mezcla de un jarabe saborizado y concentrado que generalmente se proporciona en un tanque retornable o en un recipiente de bolsa en caja desechable ( Bag in Box).

                            En el punto de venta o de servicio,  la bebida se mezcla a través del sistema, usando agua enfriada y purificada con dióxido de carbono, proveniente de un cilindro que contiene el gas.

                            La bebida mezclada se dispensa a través una pistola o de las válvulas del dispensador.

                            Este sistema es adecuado para los negocios que sirven a grandes cantidades derefrescos y bebidas que requieren de rapidéz, como: comedores industriales, restaurantes, hoteles, bares, clubes deportivos, etc.

                            En Servibev contamos con los siguientes equipos y sistemas Postmix y accesorios que lograrán la rentabilidad que buscas para tu negocio:

                            </p>
                        <br/>
                        <ul>
                        <li>Dispensador post pix de 8 válvulas</li>
                        <li>Dispensador post mix de 6 válvulas</li>
                        <li>Pistola para mixers</li>
                        <li>Dispensador de granitas (frappé)</li>
                        <li>Licuadoras para frappé</li>  
                        </ul>
                        </p>
          
                    </div>
                </article>
            </div>
            </LayoutServibev>
            <Footer/>
        </div>
    )
}

export default Calidad