import React from 'react'
import {
    DashboardFilled,
  } from '@ant-design/icons';

export const Data = () => {
    const data={
        display:'flex',
        width:'170px',
        flexDirection:'column', 
        justifyContent:'center', 
        color:'white',
        marginTop:'35px',
        marginBottom:'35px',
        textAlign:'center'
    }
    return (
        <div style={{margin:'auto', position:'relative', bottom: '40px', borderRadius:'5px', zIndex:'0', padding:'30vh 10vh 1vh 10vh', width:'100%',  display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#1f2933',  boxShadow:'1px 21px 42px 2px rgba(31, 41, 51, 0.34)'
    }}>
            <div style={data}>
                <DashboardFilled style={{fontSize:'38px'}}/>
               <h3  style={{marginTop:'15px',color:'white', fontSize:'18px', fontWeight:'200', lineHeight:'17px'}}> Más de 20 años de experiencia</h3>
            </div>
            <div  style={data}>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <h3 style={{marginTop:'15px',color:'white', fontSize:'18px', fontWeight:'200',  lineHeight:'17px'}}> Más de 100 clientes en México</h3>
            </div>
            <div  style={data}>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <h3 style={{marginTop:'15px',color:'white', fontSize:'18px', fontWeight:'200',  lineHeight:'17px'}}> Más de 100 clientes en México</h3>
            </div>
            <div  style={data}>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <h3 style={{marginTop:'15px',color:'white', fontSize:'18px', fontWeight:'200',  lineHeight:'17px'}}> Más de 100 clientes en México</h3>
            </div>
            <div  style={data}>
                <DashboardFilled style={{fontSize:'38px'}}/>
                <h3 style={{marginTop:'15px',color:'white', fontSize:'18px', fontWeight:'200',  lineHeight:'17px'}}> Más de 100 clientes en México</h3>
            </div>

        </div>
    )
}
export default Data