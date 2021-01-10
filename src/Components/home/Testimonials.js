import React from 'react'
import { Carousel, Card } from 'antd';

export const Testimonials = () => {
    const contentStyle = {
        width:'28%',
        height:'320px',
        color: 'white',
        lineHeight: '16px',
        textAlign: 'center',
        background: '#fafafa',
        borderRadius:'5px',
        position:'relative',
        boxShadow: '200px 200px 200px rgba(0,0,0, 0.0)'
    };

    const pic = {
        width:'80px',
        height:'80px',
        borderRadius:'50%',
    }

    const carousel = {
        display:'flex',
        justifyContent:'space-between',
        position:'relative',
        width:'100%',
        height:'500px',
    }


    return (
        <div style={{ padding:'5% 15% 0% 15%',  backgroundColor:'white', margin:'auto'}}>
        <h1 style={{ textAlign:'left', fontSize:'40px', fontWeight:'300'}}>¿Qué opinan nuestros clientes?</h1>
        <Carousel autoplay dotPosition='top' style={carousel}>
            <div >
            {/* first slide */}
                <div style={{...contentStyle, backgroundColor:'white', left:'70px', top:'20px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.2)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left',}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#faa71d', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                 
                </div>

                    {/* second card */}
                <div style={{...contentStyle, left:'380px', bottom:'300px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.14)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#ed1747', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                </div>


                <div style={{...contentStyle, left:'690px', bottom:'620px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.14)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#87c440', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                </div>
            </div>

            <div >
            {/* first slide */}
                <div style={{...contentStyle, backgroundColor:'white', left:'70px', top:'20px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.2)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left',}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#faa71d', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                 
                </div>

                    {/* second card */}
                <div style={{...contentStyle, left:'380px', bottom:'300px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.14)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#ed1747', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                </div>


                <div style={{...contentStyle, left:'690px', bottom:'620px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.14)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#87c440', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                </div>
            </div>

            <div >
            {/* first slide */}
                <div style={{...contentStyle, backgroundColor:'white', left:'70px', top:'20px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.2)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left',}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#faa71d', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                 
                </div>

                    {/* second card */}
                <div style={{...contentStyle, left:'380px', bottom:'300px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.14)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#ed1747', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                </div>


                <div style={{...contentStyle, left:'690px', bottom:'620px',  boxShadow:'10px 10px 45px 2px rgba(0,0,0,0.14)'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'20px',width:'cover'}} >
                            <h4 style={{marginTop:'10px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'#87c440', padding:'20px 20px 20px 20px'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2 style={{ fontWeight:'600', color:'white', marginTop:'20px', lineHeight:'20px'}}> Isabel Ferrara</h2>
                            <h3 style={{ fontWeight:'600', color:'white'}}>Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'1px solid white'}}/>
                    </div>
                </div>
                </div>
            </div>
        </Carousel>          
        </div>
    )
}
export default Testimonials