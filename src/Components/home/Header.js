import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import ReactPlayer from 'react-player'
import {
    PlayCircleOutlined,
  } from '@ant-design/icons';

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(true)
    }
  
    const handleCancel = () => {
      setIsModalVisible(false)
    }

    return (
        <div>

            <div >
            <Button type="primary" onClick={showModal}>
             Open Modal
            </Button>
        </div>
        <div>
            <h2>Servicio</h2>
            <p>hola</p>
        </div> 
        <div>
            <h2>Calidad</h2>
            <p>hola</p>
        </div> 
        <div>
            <h2>Innovación</h2>
            <p>hola</p>
        </div> 
        <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
         {/* <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=pSfqUhCt_CI'
          width='100%'
          height='100vh'
          light={true}
          playIcon={<PlayCircleOutlined />} style={{fontSize:'100px', color:'white'}} 
        //   wrapper={'https://www.incimages.com/uploaded_files/image/1920x1080/getty_478389113_970647970450091_99776.jpg'}
        /> */}
        </Modal>
        </div>
    )
}
export default Header