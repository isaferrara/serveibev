import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'
import ProdServ from './Pages/ProdServ'
import Contacto from './Pages/Contacto'
import NotFound from './Pages/NotFound'
import Practicas from './Pages/Blog/Practicas'
import Calidad from './Pages/Blog/Calidad'
import PostMix from './Pages/Blog/PostMix'
import Blog from './Pages/Blog/Blog'


const Router = () => {
    return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/productos" component={ProdServ} />
        <Route exact path="/contacto" component={Contacto} />
 
        {/* blog */}
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/practicas" component={Practicas} />
        <Route exact path="/blog/post-mix" component={PostMix} />
        <Route exact path="/blog/calidad" component={Calidad} />
        <Route component={NotFound} />

      </Switch>
    </BrowserRouter>
    )
}

export default Router