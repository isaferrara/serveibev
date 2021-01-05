import React from 'react'

export const Clients = () => {
    const logo={
        width:'120px',
        height:'90px',
        margin:'15px'
    }
    return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginTop:'40px'}} >
        <h2 style={{textAlign:'center'}}> Nuestros clientes</h2>
        <div style={{width:'800px', display:'flex', justifyContent:'space-around', flexDirection:'row', flexWrap:'wrap'}}>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>
            <img alt='testimonial' src='../../postmix.png' style={logo}/>

        </div>  
        </div>
    )
}
export default Clients