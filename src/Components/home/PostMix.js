import { Button } from 'antd'
import React from 'react'

export const PostMix = () => {
    return (
        <div>
            <div style={{  padding:'5% 0 30% 0', width:'100%', height:'600px', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <div>
                <div style={{  position:'relative', width:'800px', height:'400px',  top:'40%', left:'70px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white' }}>
                    <div style={{  position:'relative',padding:'3vh ', width:'40%', height:'300px', display:'flex', flexDirection:'column', textAlign:'center', left:'50%', top:'10%' }}>
                    <h3 style={{ fontSize:'18px', fontWeight:'500', color:'black', margin:'0', lineHeight:'16px'}}>Productos</h3>
                    <h2 style={{ fontSize:'25px', fontWeight:'700', color:'black'}}>Post-mix</h2>
                        <p> dfasfasdf</p>
                        <Button >Conoce más</Button>
                    </div>
                    <img src='../../postmix.png' style={{width:'450px', position:'absolute', bottom:'40px', right:'400px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>
                </div>
            </div>
            </div>   
        </div>
    )
}
export default PostMix