import React from 'react'

const Comedores = () => {
    return (
        <div >
            <div style={{  position:'relative', padding:'10% 0 30% 0', width:'100%', height:'600px', display:'flex', flexDirection:'row', justifyContent:'center',  zIndex:'1'}}>
            <div>
                <div style={{ width:'1000px', height:'400px',  top:'40%',  borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white' }}>
                    <div style={{  position:'relative',padding:'5vh ', width:'50%', height:'300px', display:'flex', flexDirection:'column', textAlign:'center', top:'5%' }}>
                    <h3 style={{ fontSize:'18px', fontWeight:'500', color:'black', margin:'0', lineHeight:'16px'}}>¿Quiénes son nuestros clientes?</h3>
                    <h2 style={{ fontSize:'40px', fontWeight:'300', color:'black'}}>Comedores industriales</h2>
                        <p> El sistema Post Mix es utilizado en todo el mundo para facilitar el dispensado de bebidas en restaurantes, bares y comedores industriales. Su facilidad de uso y bajo costo de mantenimiento permite generar rentabilidad para los negocios del ramo de alimentos y bebidas.
Este sistema es adecuado para los negocios que sirven a grandes cantidades de refrescos y bebidas que requieren de rapidez.</p>
                </div>
                    <div  style={{width:'450px', height:'300px', position:'relative', bottom:'250px', left:'50%', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundImage:'url(https://kokomexico.com/wp-content/uploads/2017/09/COMEDORES-770x510.jpg)', backgroundSize:'110%'}}/>  </div>
                </div>
            </div>
        </div>   
    )
}
export default Comedores