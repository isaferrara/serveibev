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
        height:'45vh',
        backgroundImage:'url(https://theholistichealthacademy.com/wp-content/uploads/2019/07/shutterstock_1337089139.jpg)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }

    return (
        <div>
            <div style={header}>
                <div>
                <PlayCircleOutlined onClick={showModal} style={{fontSize:'100px', color:'white', opacity:'0.5'}}   />           
                </div>
            </div>
        <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} width={900}>
            <iframe width="100%" height="500px"
                style={{marginTop:'20px'}}
                src="https://www.youtube.com/embed/BMGixkvJ-6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
            ></iframe>
        </Modal>
        </div>
    )
}
export default Header