import { Link } from 'react-router-dom'
import React from 'react'

const Calidad = () => {
    return (
            <div style={{  padding:'0% 0 30% 0', width:'100%', height:'400px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#1F2933', boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.24)'}}>
            <h2 style={{ position:'absolute', fontSize:'40px', fontWeight:'300', borderBottom: '10px solid #FAB033', color:'white', left:'15%', marginTop:'150px'}}> Calidad</h2>
            <div>
                <div style={{  position:'relative', width:'700px', height:'350px', left:'35%',  borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white', marginTop:'40px' }}>
                    <div style={{  position:'relative',padding:'3vh ', width:'45%', height:'300px', display:'flex', flexDirection:'column', textAlign:'center', left:'53%', top:'5%'}}>
                        <p> Gracias a su facilidad de uso y bajo costo de mantenimiento, el sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales.</p>
                        <Link className='btnGen'>Más información</Link>
                    </div>
                    <img src='../../calidad.jpeg' style={{width:'550px', position:'absolute', bottom:'40px', right:'350px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}/>
                </div>
            </div>
            </div>   
    )
}

export default Calidad

