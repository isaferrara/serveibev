import React from 'react'
import Footer from '../../Components/Footer.js'
import LayoutServibev from '../../Components/LayoutServibev'
import { BlogHeader } from '../../Components/BlogHeader.js'

const Practicas = () => {
    return (
        <div style={{backgroundColor:'#f1f2f5'}}>
        <LayoutServibev>
        <BlogHeader/>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%' }}>
            <article style={{display:'flex', alignItems:'center', width:'70%', height:'140vh', marginTop:'40px', backgroundColor:'white', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.09)'}}>
                <div style={{width:'100%', textAlign:'center', marginTop:'70px'}}>
                    <h1> Las mejores prácticas para comedores industriales</h1>     
                    <img src='../../mantenimiento.jpeg' style={{width:'450px', bottom:'0px', right:'30px', borderRadius:'10px', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)',}}/>      
                    <p style={{margin:'40px 70px 40px 70px', textAlign:'left'}}>
                    Mantenerse a la vanguardia en el rubro de la alimentación industrial es el día de hoy un desafio para quienes administran este tipo de negocio.          
                    A continuación te proporcionamos algunos tips para hacer crecer tu comedor industrial sin realizar costosas inversiones                    <br/>
                        <p style={{marginTop:'20px'}}>
                        La razón principal de ser de un comedor industrial es proporcionar alimentos de calidad y que estos representen  una dieta sana para los comensales. El tratar de optimizar los recursos financieros con materias primas de baja o mediana calidad es uno de los errores recurrentes en este tipo de negocios.
                        Aumentar la rentabilidad,  va de la mano con la calidad de los alimentos que se ofrecen en tu comedor industrial.
                        Una de las mejores prácticas a nivel mundial, es la selección  y certificación de proveedores de materias primas e insumos.
                        La manera más efectiva de realizar esta actividad, es informar a tus proveedores que realizarás un proceso de certificación de calidad de las materias primas e insumos que te ofrecen. Realiza  una visita a las instalaciones, centros de producción, hortalizas y cultivos de tus proveedores para conocer si sus procesos cumplen con los requerimientos de calidad que deseas para tu negocio.
                        </p>
                        <p style={{marginTop:'20px'}}>
                        Una vez que hayas verificado que tus proveedores cumplen con tus expectativas de calidad, extiende un certificado que avala que verdaderamente se trata de un proveedor confiable para tu negocio.

                        Realiza esta actividad por lo menos una vez al año. De esta manera tus proveedores buscarán permanecer siempre en el nivel de calidad que esperas.

                        En Servibev siempre buscamos proporcionar a nuestros clientes la mejor calidad en cada uno de nuestros productos. Es por ello que contamos con diversas certificaciones ISO que avalan nuestro compromiso con la calidad y servicio.
                        </p>
                    <br/>

                    </p>
      
                </div>
            </article>
        </div>
        </LayoutServibev>
        <Footer/>
    </div>
    )
}
export default Practicas