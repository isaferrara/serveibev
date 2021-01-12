import React, { useState } from 'react'
import { Modal } from 'antd'

import {
    PlayCircleOutlined,
  } from '@ant-design/icons';

 const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false);
      };

      const header={
        width:'100%',
        height:'50vh',
        backgroundImage:'url(https://blog.cure.fit/wp-content/uploads/2020/08/2020-08-22.jpg)',
        backgroundPosition: '0% 80%',
        backgroundSize: 'cover',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'

      }

    return (
        <div style={{boxShadow:'2px 0px 26px 4px rgba(0,0,0,0.41)'}}>
            <div style={header}>
                <div >
                <h2 style={{fontSize:'70px', fontWeight:'500', marginTop:'40px', fontFamily:'sans-serif', letterSpacing:'2px', textShadow: '5px 5px 10px rgba(0,0,0,0.51)'}}>Nosotros</h2>
                <PlayCircleOutlined onClick={showModal} style={{fontSize:'100px', color:'white', opacity:'0.5', }}   />           
                </div>
            </div>
        <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} width={900}>
            <iframe width="100%" height="500px"
                style={{marginTop:'20px'}}
                src="https://www.youtube.com/embed/nb6A9_8hLRY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
            ></iframe>
        </Modal>
        </div>
    )
}
export default Header

