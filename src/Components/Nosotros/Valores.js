import React from 'react'

const Valores = () => {
    return (
        <div  style={{display:'flex',justifyContent:'center', alignItems:'center',backgroundColor:'white', paddingTop:'50px', paddingBottom:'100px'}}>
                <section style={{width:'15%', backgroundColor:'white', padding:'110px 15px 110px 15px', borderRadius:'6px', margin:'5px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}>
                <h1 style={{fontSize:'40px', textAlign:'center', color:'#323f4b'}}>Servibev</h1>
                </section>
            <div style={{display:'flex', flexDirection:'column', width:'800px'}}>
            
                <section style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'99%', backgroundColor:'#FAB033', padding:'15px', borderRadius:'6px', margin:'5px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}>
                    <h2 style={{textAlign:'center', width:'50%', margin:'auto', color:'white'}}> ¿Quiénes somos?</h2>
                    <p style={{textAlign:'left', width:'50%', color:'white'}}>Servibev es  una empresa 100% mexicana, especializada en la producción de concentrados y jarabes de origen natural,  dispensados por sistema post-mix.</p>
                </section>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'5px'}}>
                <section style={{display:'flex', flexDirection:'column', justifyContent:'space-around', width:'49%', backgroundColor:'#94CA55', padding:'15px', borderRadius:'6px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}>
                    <h2 style={{textAlign:'center', color:'white'}}>Visión</h2>
                    <p style={{textAlign:'left', color:'white'}}>Participar en mercados globalizados, con productos de mayor valor agregado a través de la innovación tecnológica y comercial de sus productos y procesos actuales.</p>
                </section>
                <section style={{display:'flex', flexDirection:'column',justifyContent:'space-around', width:'49%', backgroundColor:'#EF325A', padding:'15px', borderRadius:'6px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}}>
                    <h2 style={{textAlign:'center',  color:'white'}}>Misión</h2>
                    <p style={{textAlign:'left', color:'white'}}>Ser líder en la elaboración de jarabes y concentrados a nivel nacional, desarrollar las habilidades y el crecimiento personal de sus empleados y dar a los accionistas la rentabilidad esperada sobre su inversión.</p>
                </section>
                </div>

            </div>
        </div>
    )
}
export default Valores