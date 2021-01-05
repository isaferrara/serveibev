import React from 'react'
import { Carousel, Card } from 'antd';

export const Testimonials = () => {
    const contentStyle = {
        width:'30%',
        height:'320px',
        color: '#fff',
        lineHeight: '16px',
        textAlign: 'center',
        background: '#fafafa',
        borderRadius:'5px',
        position:'relative',
        
        
    };

    const pic = {
        width:'100px',
        height:'100px',
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
        <h1 style={{ textAlign:'left', fontSize:'40px', textDecoration:'underline'}}>¿Qué opinan nuestros clientes?</h1>
        <Carousel autoplay  dotPosition='top' style={carousel}>
            <div >
            {/* first slide */}
                <Card style={{...contentStyle, left:'70px', top:'20px', border:'5px solid #faa71d'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                 
                </Card>

                <Card style={{...contentStyle, left:'380px', bottom:'300px', border:'5px solid #ed1747'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img  alt='testimonial'  src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                </Card>


                <Card style={{...contentStyle, left:'690px', bottom:'620px', border:'5px solid #87c440'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                </Card>
            </div>

                        <div >
            {/* first slide */}
                <Card style={{...contentStyle, left:'70px', top:'20px', border:'5px solid #faa71d'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                 
                </Card>

                <Card style={{...contentStyle, left:'380px', bottom:'300px', border:'5px solid #ed1747'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                </Card>


                <Card style={{...contentStyle, left:'690px', bottom:'620px', border:'5px solid #87c440'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                </Card>
            </div>

                        <div >
            {/* first slide */}
                <Card style={{...contentStyle, left:'70px', top:'20px', border:'5px solid #faa71d'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial'  src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                 
                </Card>

                <Card style={{...contentStyle, left:'380px', bottom:'300px', border:'5px solid #ed1747'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                </Card>


                <Card style={{...contentStyle, left:'690px', bottom:'620px', border:'5px solid #87c440'}}> 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>         
                       
                        {/* parrafo */}
                        <div style={{ padding:'0px',width:'cover'}} >
                            <h4 style={{marginTop:'20px', padding:'0px', fontWeight:'lighter', lineHeight:'18px', letterSpacing:'2px'}}> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </h4>
                        </div>
                        {/* imagen y nombres */}
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                            <h2 style={{ fontWeight:'600'}}> Isabel Ferrara</h2>
                            <h3 >Servibev</h3>
                        </div>
                        <img alt='testimonial' src='../../postmix.png' style={{...pic, padding:'3px', border:'3px solid white'}}/>
                    </div>
                </div>
                </Card>
            </div>
        </Carousel>          
        </div>
    )
}
export default Testimonials