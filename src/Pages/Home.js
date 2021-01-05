import React from 'react'
import LayoutServibev from '../Components/LayoutServibev.js'
import Calidad from '../Components/home/Calidad.js'
import Clients from '../Components/home/Clients.js'
import Data from '../Components/home/Data.js'
import Header from '../Components/home/Header.js'
import PostMix from '../Components/home/PostMix.js'
import Servicios from '../Components/home/Servicios.js'
import Testimonials from '../Components/home/Testimonials.js'


const Home = () => {
    return (
        <LayoutServibev>
            <Header/>
            <Data/>
            <PostMix/>
            <Servicios/>
            <Calidad/>
            <Clients/>
            <Testimonials/>
        </LayoutServibev>
    )
}
export default Home