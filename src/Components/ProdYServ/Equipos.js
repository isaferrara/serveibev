import React from 'react'
import { Carousel } from 'antd';

const Equipos = () => {

const contentStyle = {
    height: '360px',
    width: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',

  }
    return (
        <Carousel autoplay dotPosition='top' style={{width:'600px'}}>
        <div>
          <h3 style={{...contentStyle, backgroundImage:'url(https://theholistichealthacademy.com/wp-content/uploads/2019/07/shutterstock_1337089139.jpg)'}}>1</h3>
        </div>
        <div>
        <h3 style={{...contentStyle, backgroundImage:'url(https://theholistichealthacademy.com/wp-content/uploads/2019/07/shutterstock_1337089139.jpg)'}}>1</h3>
        </div>
        <div>
        <h3 style={{...contentStyle, backgroundImage:'url(https://theholistichealthacademy.com/wp-content/uploads/2019/07/shutterstock_1337089139.jpg)'}}>1</h3>
        </div>
      </Carousel>

    )
}
export default Equipos