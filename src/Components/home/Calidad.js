import { Button } from 'antd'
import React from 'react'

const Calidad = () => {
    return (
        <div style={{  padding:'5% 0 30% 0', width:'100%', height:'200px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#1f2933'}}>
            <div>
                <div style={{  position:'relative', width:'900px', height:'350px',  top:'40%', left:'70px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'#f8f8f8' }}>
                    <div style={{  position:'relative',padding:'3vh ', width:'40%', height:'100px', display:'flex', flexDirection:'column', textAlign:'center', left:'55%', }}>      
                    <h2 style={{fontSize:'30px', fontWeight:'800', color:'black'}}>Calidad</h2>
                        <p> dfasfasdf</p>
                        <Button>Conoce más</Button>
                    </div>
                    <img src='../../calidad.jpeg' style={{width:'550px', position:'absolute', bottom:'40px', right:'400px', borderRadius:'10px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Calidad