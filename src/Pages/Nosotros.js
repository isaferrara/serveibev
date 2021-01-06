import React from 'react'
import Header from '../Components/Nosotros/Header.js'
import LayoutServibev from '../Components/LayoutServibev.js'
import Valores from '../Components/Nosotros/Valores.js'
import Historia from '../Components/Nosotros/Historia.js'
import Data from '../Components/Nosotros/Data.js'
import Equipo from '../Components/Nosotros/Equipo.js'
import Instalaciones from '../Components/Nosotros/Instalaciones.js'
import Footer from '../Components/Footer.js'


 const Nosotros = () => {
    return (
        <LayoutServibev>
            <Header/>
            <Valores/>
            <Historia/>
            <Data/>         
            <Equipo/>
            <Instalaciones/>
            <Footer/>
        </LayoutServibev>
    )
}
export default Nosotros