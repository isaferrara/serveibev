import React from 'react'
import { Link } from 'react-router-dom'


const Servicios = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around', margin:'auto', flexWrap:'wrap', backgroundColor:'white', width:'800px'}}>
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

    )
}
export default Servicios