import React from 'react'

const Postmix = () => {
    return (
        <div>
            <div style={{  padding:'5% 0 5% 0', width:'100%', height:'400px', display:'flex', flexDirection:'row', justifyContent:'center', position:'absolute', zIndex:'1'}}>
            <div>
                <div style={{ width:'1000px', height:'400px',  top:'40%',  borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.10)', backgroundColor:'white' }}>
                    <div style={{  position:'relative',padding:'5vh ', width:'50%', height:'300px', display:'flex', flexDirection:'column', textAlign:'center', left:'50%', }}>
                    <h2 style={{ fontSize:'40px', fontWeight:'300', color:'black'}}>Post-mix</h2>
                        <p> El sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales. Su facilidad de uso y bajo costo de mantenimiento permite generar rentabilidad para los negocios del ramo de alimentos y bebidas.
Este sistema es adecuado para los negocios que sirven a grandes cantidades de refrescos y bebidas que requieren de rapidez.</p>

                    </div>

                    <img src='../../postmix.png' style={{width:'450px', position:'absolute', bottom:'0px', top:'110px', left:'270px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>
               
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Postmix