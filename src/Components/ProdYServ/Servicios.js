import React from 'react'
import { Link } from 'react-router-dom'


const Servicios = () => {
    return (
        <div style={{width:'100%', backgroundColor:'white', textAlign:'center', padding:'50px'}}>
        <h2>Servicios</h2>
        <p>dfadf</p>
        <div style={{display:'flex', justifyContent:'space-around', margin:'auto', flexWrap:'nowrap',  width:'900px', paddingTop:'20px'}}>
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
        </div>
        </div>
    )
}
export default Servicios