import { Button } from 'antd'
import React from 'react'

export const PostMix = () => {
    return (
        <div style={{  padding:'10% 0 30% 0', width:'100%', height:'200px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'white'}}>
            <div>
            <h2 style={{ marginLeft:'490px', fontSize:'30px', fontWeight:'800', color:'black'}}>Post-mix</h2>
                <div style={{  position:'relative', width:'700px', height:'300px',  top:'40%', left:'70px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'#f8f8f8' }}>
                    <div style={{  position:'relative',padding:'3vh ', width:'40%', height:'100px', display:'flex', flexDirection:'column', textAlign:'center', left:'50%', }}>
                     
                        <p> dfasfasdf</p>
                        <Button>Conoce más</Button>
                    </div>
                    <img src='../../postmix.png' style={{width:'450px', position:'absolute', bottom:'40px', right:'400px', borderRadius:'10px'}}/>
                </div>
            </div>
        </div>
    )
}
export default PostMix