import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
        <div style={{height:'270px',  backgroundColor:'#1F2933', marginTop:'60px', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <div style={{margin:'40px 0px 20px 90px', width:'200px'}}>
                <h3 style={{color:'white'}}>Nosotros</h3>
                <p style={{color:'white'}}>Dolor enim tempor ea in magna. Nisi qui laborum ullamco sit sit ut culpa
                    voluptate quis eiusmod laborum. Anim nostrud dolor amet tempor laborum eiusmod non quis fugiat.</p>
            </div>
        <div style={{display:'flex', flexDirection:'column', marginTop:'30px', lineHeight:'30px', marginLeft:'50px'}}>
            <h3 style={{color:'white'}}>Sitio</h3>
            <Link to='/'>Home</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/productos'>Productos y servicios</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contacto'>Contacto</Link>
        </div>
        <div style={{display:'flex', flexDirection:'column', marginTop:'30px', lineHeight:'40px'}}>
            <h3 style={{color:'white'}}>Blog</h3>
            <Link to='/calidad'>Calidad de bebidas</Link>
            <Link to='/postmix'>Beneficios de Post-Mix</Link>
            <Link to='/practicas'>Buenas prácticas</Link>
        </div>
           
        <img style={{marginRight:'100px', marginTop:'30px', width:'250px', height:'200px'}} alt='servibev logo' src='../../servibev.png'/>
        </div>
        <Divider style={{ margin:'0px',color:'white'}} ></Divider>
            <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#1F2933', padding:'10px'}}>
                <small style={{color:'white', marginLeft:'150px'}}> Servibev 2020</small>
                <small style={{color:'white', marginRight:'150px'}}> Created by Isabel Ferrara</small>
            </div>
        </footer>
    )
}
export default Footer