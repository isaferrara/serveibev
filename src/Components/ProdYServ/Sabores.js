import React from 'react'

const Sabores = () => {
    const sabores={
        width:'150px', 
        height:'150px',
        boxShadow:'1px 10px 10px 1px rgba(0,0,0,0.1)',

    }
    return (
        <div style={{width:'100%',height:'600px', backgroundColor:'white'}}>
        <div  style={{display:'flex', alignContent:'center', flexDirection:'row', width:'60%', height:'500px', margin:'auto', paddingTop:'30px', backgroundColor:'white'}}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'30%', height:'500px', backgroundColor:'#FAB033', boxShadow:'1px 10px 10px 1px rgba(0,0,0,0.1)'}}>
            <h2 style={{fontSize:'50px', color:'white'}}> Sabores</h2>
        </div>
            <div style={{ width:'80%', height:'500px', display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', flexDirection:'row'}}>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>
                <img alt='sabor' style={sabores} src='../../servibev.png'/>

            </div>
        </div>
        </div>
    )
}
export default Sabores