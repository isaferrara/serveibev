import React from 'react'
import { Carousel } from 'antd';

const Equipos = () => {

const contentStyle = {
    height: '400px',
    width: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',

  }
    return (
        <div style={{position:'relative', bottom:'500px', backgroundColor:'white', width:'75%', height:'400px', paddingTop:'500px',  margin:'auto', zIndex:'0'}}>
         <div style={{backgroundColor:'white', height:'450px'}}>
          <Carousel autoplay dotPosition='top' style={{width:'600px', position:'absolute', marginLeft:'12%', boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)', backgroundColor:'white'}}>
          <div>
            <div style={{...contentStyle, backgroundImage:'url(../../valv6.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat',backgroundColor:'white',  backgroundPosition: '100% 73%'}}></div>
          </div>
          <div>
          <div style={{...contentStyle, backgroundImage:'url(../../valv8.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat',backgroundColor:'white',  backgroundPosition: '100% 73%'}}></div>
          </div>
          <div>
          <div style={{...contentStyle, backgroundImage:'url(../../frape.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat',backgroundColor:'white',  backgroundPosition: '100% 73%'}}></div>
          </div>
        </Carousel>
        </div>
      </div>

    )
}
export default Equipos