import React from 'react'
import Header from '../Components/ProdYServ/Header.js'
import Postmix from '../Components/ProdYServ/Postmix.js'
import LayoutServibev from '../Components/LayoutServibev.js'
import Equipos from '../Components/ProdYServ/Equipos.js'
import Sabores from '../Components/ProdYServ/Sabores.js'
import Servicios from '../Components/ProdYServ/Servicios.js'

import Footer from '../Components/Footer.js'

const ProdServ = () => {
    return (
        <LayoutServibev>
            <Header/>
            <Postmix/>
            <Sabores/>        
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
            <Equipos/>
            <h2 style={{width:'17%', height:'360px', backgroundColor:'#EF325A', display:'flex',  alignItems:'center', justifyContent:'center', color:'white'}}> Equipos</h2>
            </div> 
            <Servicios/>
            <Footer/>
        </LayoutServibev>
    )
}

export default ProdServ