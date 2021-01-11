import React from 'react'
import LayoutServibev from '../Components/LayoutServibev.js'
import Calidad from '../Components/home/Calidad.js'
import Clients from '../Components/home/Clients.js'
import Forms from '../Components/home/Forms.js'
import Data from '../Components/home/Data.js'
import Header from '../Components/home/Header.js'
import PostMix from '../Components/home/PostMix.js'
import Servicios from '../Components/home/Servicios.js'
import Testimonials from '../Components/home/Testimonials.js'
import Footer from '../Components/Footer.js'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const Home = () => {
    return (
        <LayoutServibev>
            <Forms/>
            <Header/>
            <Data/>
            <PostMix/>
            <Servicios/>
            <Calidad/>
            <Testimonials/>
            <Clients/>
            <Footer/>
            <WhatsAppWidget phoneNumber='525539393631' message='¿Cómo te podemos ayudar?' textReplyTime='Responderemos lo más pronto posible' companyName='Atención a cliente' sendButton='Enviar'/>
        </LayoutServibev>
    )
}
export default Home