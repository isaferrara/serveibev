import React from 'react'

const Sabores = () => {
    const sabores={
        width:'150px', 
        height:'150px',
        boxShadow:'1px 10px 10px 1px rgba(0,0,0,0.1)',

    }
    return (
        <div style={{position:'relative', width:'75%',height:'1050px', backgroundColor:'white', margin:'auto', top:'50px', zIndex:'0'}}>
        <div  style={{display:'flex', alignContent:'center', flexDirection:'row', width:'80%', height:'500px', paddingTop:'90px', margin:'auto'}}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'30%', height:'485px', margin:'400px auto auto auto', backgroundColor:'#FAB033', boxShadow:'1px 10px 10px 1px rgba(0,0,0,0.1)'}}>
            <h2 style={{fontSize:'50px', color:'white'}}> Sabores</h2>
        </div>
            <div style={{ width:'100%', height:'500px', display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', margin:'400px auto 200px auto',  flexDirection:'row'}}>
                <img alt='sabor' style={sabores} src='../../frutas/horchatas.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/jamaica.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/limonada.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/mandarina.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/mango.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/manzana.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/melon.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/naranja.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/piña-colada.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/tamarindo.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/te-helado.png'/>
                <img alt='sabor' style={sabores} src='../../frutas/uva.png'/>

            </div>
        </div>
        </div>
    )
}
export default Sabores