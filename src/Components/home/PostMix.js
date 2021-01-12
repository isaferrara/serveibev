import React from 'react'
import { Link } from 'react-router-dom'

export const PostMix = () => {
    return (
        <div>
            <div style={{  padding:'0% 0 30% 0', width:'100%', height:'500px', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <h2 style={{ position:'absolute', fontSize:'40px', fontWeight:'300', borderBottom: '20px solid #FAB033', color:'black', left:'15%', marginTop:'200px'}}> Productos</h2>
            <div>
                <div style={{  position:'relative', width:'700px', height:'400px',  top:'40%', left:'35%',  borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white' }}>
                    <div style={{  position:'relative',padding:'3vh ', width:'45%', height:'300px', display:'flex', flexDirection:'column', textAlign:'center', left:'53%', top:'20px'}}>
                    <h2 style={{ fontSize:'25px', fontWeight:'700', color:'black'}}>Post-mix</h2>
                        <p> Gracias a su facilidad de uso y bajo costo de mantenimiento, el sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales.</p>
                        <Link to="/nosotros" className='btnGen'>Más información</Link>
                    </div>
                    <img src='../../postmix.png' style={{width:'450px', position:'absolute', bottom:'40px', right:'350px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>
                </div>
            </div>
            </div>   
        </div>
    )
}
export default PostMix