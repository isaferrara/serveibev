import React from 'react'
import { Link } from 'react-router-dom'


const Servicios = () => {
    return (
        <div style={{width:'100%', backgroundColor:'#1F2933', textAlign:'center', padding:'50px', boxShadow:'1px 21px 22px 2px rgba(0,0,0,0.24)'}}>
        <h2 style={{fontSize:'40px', fontWeight:'300', color:'white', lineHeight:'16px'}}>Servicios</h2>
        <p style={{color:'white'}}>Los servicios que nuestros clientes reciben de manera gratuita son:</p>
        <div style={{display:'flex', justifyContent:'space-around', margin:'auto', flexWrap:'wrap',  width:'800px',}}>
        <div class="blog-card spring-fever" >
        <div class="title-content">
            <h3>Buenas prácticas</h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        {/* segunda card */}
        <div class="blog-card spring-fever">
        <div class="title-content">
            <h3>Buenas prácticas</h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        {/* tercera card */}
        <div class="blog-card spring-fever">
        <div class="title-content">
            <h3>Buenas prácticas</h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
               {/* 4 card */}
               <div class="blog-card spring-fever">
        <div class="title-content">
            <h3>Buenas prácticas</h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>          
        </div>
        </div>
    )
}
export default Servicios