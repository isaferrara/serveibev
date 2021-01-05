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
        <div style={{padding:'30vh 10vh 10vh 10vh', width:'100%', height:'200px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#1f2933'}}>
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