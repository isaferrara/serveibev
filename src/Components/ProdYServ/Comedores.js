import React from 'react'

const Comedores = () => {
    return (
        <div>
            <div style={{  padding:'5% 0 30% 0', width:'100%', height:'600px', display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <div>
                <div style={{ width:'1000px', height:'400px',  top:'40%',  borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white' }}>
                    <div style={{  position:'relative',padding:'5vh ', width:'50%', height:'300px', display:'flex', flexDirection:'column', textAlign:'center', top:'5%' }}>
                    <h3 style={{ fontSize:'18px', fontWeight:'500', color:'black', margin:'0', lineHeight:'16px'}}>¿Quiénes son nuestros clientes?</h3>
                    <h2 style={{ fontSize:'25px', fontWeight:'700', color:'black'}}>Comedores industriales</h2>
                        <p> El sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales. Su facilidad de uso y bajo costo de mantenimiento permite generar rentabilidad para los negocios del ramo de alimentos y bebidas.
Este sistema es adecuado para los negocios que sirven a grandes cantidades de refrescos y bebidas que requieren de rapidez.</p>
                    </div>
                    <img src='../../postmix.png' style={{width:'450px', position:'relative', bottom:'250px', left:'60%', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>
                </div>
            </div>
            </div>   
        </div>
    )
}
export default Comedores