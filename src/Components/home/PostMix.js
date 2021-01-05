import { Button } from 'antd'
import React from 'react'

export const PostMix = () => {
    return (
        <div style={{  padding:'10% ', width:'100%', height:'200px', display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'white'}}>
            <div  style={{position:'absolute'}} >
                <div style={{ width:'1100px', height:'400px',  top:'40%', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white' }}>
                    <div style={{  padding:'3vh ', width:'40%', height:'100px', display:'flex', flexDirection:'column', position:'absolute', textAlign:'center', left:'60%', top:'20px'}}>
                        <h2>Post-mix</h2>
                        <p> dfasfasdf</p>
                        <Button>Conoce más</Button>
                    </div>
                    <img src='../../postmix.png' style={{width:'600px', position:'relative', bottom:'50px', left:'50px',borderRadius:'10px'}}/>
                </div>
            </div>
        </div>
    )
}
export default PostMix