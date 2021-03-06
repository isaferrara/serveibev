import React from 'react'
import LayoutServibev from '../Components/LayoutServibev.js'
import Header from '../Components/ProdYServ/Header.js'
import Postmix from '../Components/ProdYServ/Postmix.js'
import Sabores from '../Components/ProdYServ/Sabores.js'
import Comedores from '../Components/ProdYServ/Comedores.js'
import Equipos from '../Components/ProdYServ/Equipos.js'
import Servicios from '../Components/ProdYServ/Servicios.js'

import Footer from '../Components/Footer.js'

const ProdServ = () => {
    return (
        <LayoutServibev>
            <Header/>
            <Postmix/>
            <Sabores/>
            <Comedores/>        
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
            <Equipos style={{boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}/>
            <h2 style={{position:'absolute', right:'20%', width:'17%', height:'400px', backgroundColor:'#EF325A', display:'flex',  alignItems:'center', justifyContent:'center',fontSize:'40px', fontWeight:'300', color:'white', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}> Equipos</h2>
            </div> 
            <Servicios/>
            <Footer/>
        </LayoutServibev>
    )
}

export default ProdServ