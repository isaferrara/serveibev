import React from 'react'
import Header from '../Components/Nosotros/Header.js'
import LayoutServibev from '../Components/LayoutServibev.js'
import Valores from '../Components/Nosotros/Valores.js'
import Ubicacion from '../Components/Nosotros/Ubicacion.js'
import Cultura from '../Components/Nosotros/Cultura.js'
import Equipo from '../Components/Nosotros/Equipo.js'
import Instalaciones from '../Components/Nosotros/Instalaciones.js'
import Footer from '../Components/Footer.js'
import Forms from '../Components/Nosotros/Forms.js'
import Map from '../Components/Map.js'

 const Nosotros = () => {
    return (
        <LayoutServibev>
            <div style={{backgroundColor:'white'}}>
            <Header/>
            <Valores/>
            <Cultura/>
            <Ubicacion/>
            <Equipo/>
            <Instalaciones/>
            <div style={{margin:'30px',paddingTop:'20px',  borderRadius:'10px', backgroundColor:'#1f2933', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Forms/>
            <Map/>
            </div>
            <Footer/>
            </div>
        </LayoutServibev>
    )
}
export default Nosotros