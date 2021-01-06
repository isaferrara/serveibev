import React from 'react'
import {
    DashboardFilled,
  } from '@ant-design/icons';

export const Data = () => {
    const data={
        display:'flex',
        flexDirection:'column', 
        justifyContent:'center', 
        color:'white'

    }
    return (
        <div style={{padding:'15vh 10vh 10vh 10vh', width:'100%',marginTop:'220px', height:'200px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#e4e7eb'}}>
            <div style={data}>
                <DashboardFilled />
                <h3  style={{color:'white'}}> Hola</h3>
            </div>
            <div  style={data}>
                <DashboardFilled />
                <h3 style={{color:'white'}}> Hola</h3>
            </div>
            <div  style={data}>
                <DashboardFilled />
                <h3 style={{color:'white'}}> Hola</h3>
            </div>
            <div  style={data}>
                <DashboardFilled />
                <h3 style={{color:'white'}}> Hola</h3>
            </div>
            <div  style={data}>
                <DashboardFilled />
                <h3 style={{color:'white'}}> Hola</h3>
            </div>

        </div>
    )
}
export default Data