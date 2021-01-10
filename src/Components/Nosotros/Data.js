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
        marginBottom:'35px',
        textAlign:'center',


    }
    return (
        <div style={{padding:'15vh 10vh 10vh 10vh', width:'100%',marginTop:'220px', height:'200px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#d8d8d8', boxShadow:'2px 0px 26px 4px rgba(0,0,0,0.31)'}}>
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