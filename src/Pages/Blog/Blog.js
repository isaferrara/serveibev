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
        <div class="blog-card spring-fever" style={{backgroundImage:'url(../../instalacion.jpeg)', backgroundSize: '160%', backgroundPosition: '30% 20%'}}>
        <div class="title-content">
            <h3><Link to="/blog/practicas">Las mejores prácticas para comedores industriales</Link></h3>
        </div>
        <div class="card-info">
        <Link to="/blog/practicas" style={{marginTop:'270px'}}>Read Article</Link>
        </div>
        <div class="utility-info">
            <ul class="utility-list">
            <li><span class="licon icon-dat"></span>01 enero 2020</li>
            </ul>
        </div>4
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        <div class="blog-card spring-fever" style={{backgroundImage:'url(https://servibev.com/wp-content/uploads/2013/09/ventajas-post-mix-300x200.png)', backgroundSize: '150%', backgroundPosition: '30% 20%'}}>
        <div class="title-content">
        <h3><Link to="/blog/post-mix">Conoce las ventajas del sistema Post-Mix</Link></h3>
        </div>
        <div class="card-info">
            <Link to="/blog/post-mix" style={{marginTop:'270px'}}>Read Article</Link>
        </div>
        <div class="utility-info">
            <ul class="utility-list">
            <li><span class="licon icon-dat"></span>01 enero 2020</li>
            </ul>
        </div>4
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
        </div>
        <div class="blog-card spring-fever" style={{backgroundImage:'url(../../mantenimiento.jpeg)', backgroundSize: '150%', backgroundPosition: '30% 20%'}}>
        <div class="title-content">
            <h3><Link to="/blog/calidad">Beneficios del sistema Bag-in-box</Link></h3>
        </div>
        <div class="card-info">
            <Link to="/blog/calidad" style={{marginTop:'270px'}}>Read Article</Link>
        </div>
        <div class="utility-info">
            <ul class="utility-list">
            <li><span class="licon icon-dat"></span>01 enero 2020</li>
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