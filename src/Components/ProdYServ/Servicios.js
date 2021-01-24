import React from 'react'


const Servicios = () => {
    return (
            <div style={{height:'400px' }}> 
            <h2 style={{position:'absolute', marginTop:'150px', marginLeft:'1160px', fontSize:'40px', textAlign:'center', color:'white'}}>Nuestros <br/>servicios</h2>
            <section id="timeline">
    
            <div className="tl-item">
            
            <div className="tl-bg" style= {{backgroundImage: 'url(https://placeimg.com/801/801/nature)'}} ></div>
            
            <div className="tl-year">
                <p >2011</p>
            </div>
        
            <div className="tl-content">
                <h1>Lorem ipsum dolor sit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
        
            </div>
        
            <div className="tl-item">
            
            <div className="tl-bg" style= {{backgroundImage: 'url(https://placeimg.com/801/801/nature)'}}></div>
            
            <div className="tl-year">
                <p className="f2 heading--sanSerif">2013</p>
            </div>
        
            <div className="tl-content">
                <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
                <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
            </div>
        
            </div>
        
            <div className="tl-item">
            
            <div className="tl-bg" style= {{backgroundImage: 'url(https://placeimg.com/801/801/nature)'}}></div>
            
            <div className="tl-year">
                <p className="f2 heading--sanSerif">2014</p>
            </div>
        
            <div className="tl-content">
                <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
                <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
            </div>
        
            </div>
        
        </section>
        </div>
    )
}
export default Servicios