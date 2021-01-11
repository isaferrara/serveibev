import React from 'react'
import LayoutServibev from '../Components/LayoutServibev'
import Cont from '../Components/Cont'
import Footer from '../Components/Footer.js'
import Map from '../Components/Map.js'
import ContHeader from '../Components/ContHeader.js'

const Contacto = () => {
    return (
        <LayoutServibev>
        <div style={{backgroundColor:'white'}}>
        <ContHeader/>
        <div style={{margin:'40px', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Cont/>
         <Map/>
        </div>
        <Footer/>
        </div>
        </LayoutServibev>

    )
}
export default Contacto