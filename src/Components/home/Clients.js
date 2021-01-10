import React from 'react'
import {
    DashboardFilled,
  } from '@ant-design/icons';

export const Clients = () => {
    const logo={
        fontSize:'100px',
        margin:'25px',
        color:'white',
    }
    return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginTop:'40px'}} >
        <h2 style={{fontSize:'40px', fontWeight:'300', textAlign:'center'}}> Nuestros clientes</h2>
        <div style={{width:'800px', display:'flex', justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>
            <DashboardFilled style={logo}/>


        </div>  
        </div>
    )
}
export default Clients