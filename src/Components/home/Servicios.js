import React from 'react'
import { Button , Card} from 'antd'
import {
    AlertOutlined
} from '@ant-design/icons';

export const Servicios = () => {
    const cardsService={
        margin:'5px',
        width:'250px', 
        height:'300px', 
        display:'flex', 
        textAlign:'center',
        alignItems:'center',  
        flexDirection:'column',
        borderRadius:'10px',
        boxShadow:'1px 10px 10px 1px rgba(0,0,0,0.1)',
        backgroundColor:'white'
    }
    
    return (
        <div style={{padding:'27% 7% 20% 15% ',  width:'100%', display:'flex',  textAlign:'center', flexDirection:'row', justifyContent:'space-between', backgroundColor:'#FAFAFA'}}>
            <div >
         
                <h2 style={{ textAlign:'center', fontSize:'40px', marginTop:'40%'}}>Nuestros servicios</h2>
                <p></p>
                >
                <Button> Más información</Button>
            </div>

            <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', width:'65%', height:'400px' }}>
             
                <Card hoverable style={cardsService}>
                <AlertOutlined />
                    <h2 style={{ color:'#424242', margin:'auto', fontSize:'22px'}}> Instalación</h2>
                    <p>hola</p>
                </Card>

                <Card hoverable style={cardsService}>
                <AlertOutlined />
                    <h2 style={{ color:'#424242', margin:'auto', fontSize:'22px'}}> Instalación</h2>
                    <p>hola</p>
                </Card>
                <Card hoverable style={cardsService}>

                <AlertOutlined />
                    <h2 style={{ color:'#424242', margin:'auto', fontSize:'22px'}}> Instalación</h2>
                    <p>hola</p>
                </Card>

                <Card hoverable style={cardsService}>
                <AlertOutlined />
                    <h2 style={{ color:'#424242', margin:'auto', fontSize:'22px'}}> Instalación</h2>
                    <p>hola</p>
                </Card>
            </div>
    </div>
    )
}
export default Servicios