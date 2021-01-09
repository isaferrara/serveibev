import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer.js'
import LayoutServibev from '../../Components/LayoutServibev'
import { BlogHeader } from '../../Components/BlogHeader.js'

const Blog = () => {
    return (
        <div>
        <LayoutServibev>
        <BlogHeader/>

        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', paddingTop:'75px', backgroundColor:'white'}}>
        <div class="blog-card spring-fever">
        <div class="title-content">
            <h3><Link to="/blog/practicas">Buenas prácticas</Link></h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
            <Link to="/blog/practicas">Read Article<span class="licon icon-arr icon-black"></span></Link>
        </div>
        <div class="utility-info">
            <ul class="utility-list">
            <li><span class="licon icon-dat"></span>03 jun 2017</li>
            </ul>
        </div>4
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        <div class="blog-card spring-fever">
        <div class="title-content">
        <h3><Link to="/blog/post-mix">Beneficios de Post-Mix</Link></h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
            <Link to="/blog/post-mix">Read Article<span class="licon icon-arr icon-black"></span></Link>
        </div>
        <div class="utility-info">
            <ul class="utility-list">
            <li><span class="licon icon-dat"></span>03 jun 2017</li>
            </ul>
        </div>4
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        <div class="blog-card spring-fever">
        <div class="title-content">
            <h3><Link to="/blog/calidad">Calidad</Link></h3>
        </div>
        <div class="card-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
            <Link to="/blog/calidad">Read Article<span class="licon icon-arr icon-black"></span></Link>
        </div>
        <div class="utility-info">
            <ul class="utility-list">
            <li><span class="licon icon-dat"></span>03 jun 2017</li>
            </ul>
        </div>4
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        </div>
        </LayoutServibev>
        <Footer/>
        </div>
    )
}
export default Blog