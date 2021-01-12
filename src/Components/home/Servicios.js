import React from 'react'
import { Card} from 'antd'
import { Link } from 'react-router-dom'

import {
    AlertOutlined
} from '@ant-design/icons';

export const Servicios = () => {
    const cardsService={
        margin:'5px',
        width:'250px', 
        height:'250px', 
        display:'flex', 
        alignContent:'space-between',  
        flexDirection:'column',
        borderRadius:'10px',
        boxShadow:'1px 10px 10px 1px rgba(0,0,0,0.1)',
        backgroundColor:'white'
    }
    
    return (
        <div style={{padding:'5% 7% 15% 15% ',  width:'100%', display:'flex',  textAlign:'center', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#FAFAFA'}}>
            <div style={{width:'400px'}}>
                <h2 style={{ textAlign:'center', fontSize:'40px', fontWeight:'300', marginTop:'40%',  borderBottom: '15px solid #FAB033'}}>Nuestros servicios</h2>
                <p style={{ marginBottom:'50px'}}>Al consumir nuestros productos, usted recibirá de manera completamente <b>gratuita</b>:</p>
             
                <Link className= "btnGen" to="/nosotros" style={{padding:'10px 60px'}}>Más información</Link>
            </div>

            <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', width:'65%', height:'400px' }}>
             
                <Card hoverable style={cardsService}>
                <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                <h2 style={{ color:'#1f2933', fontSize:'22px', marginTop:'35px'}}> Instalación</h2>
                </Card>

                <Card hoverable style={cardsService}>
                <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                <h2 style={{ color:'#1f2933', fontSize:'22px', marginTop:'35px'}}> Asistencia Técnica</h2>

                </Card>
                <Card hoverable style={cardsService}>

                <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                <h2 style={{ color:'#1f2933', fontSize:'22px', marginTop:'35px'}}> Mantenimiento </h2>

                </Card>

                <Card hoverable style={cardsService}>
                <AlertOutlined style={{fontSize:'100px', color:'#1f2933',marginTop:'20px'}}/>
                <h2 style={{ color:'#1f2933', fontSize:'22px', marginTop:'35px'}}> Atención a cliente</h2>

                </Card>
            </div>
    </div>
    )
}
export default Servicios