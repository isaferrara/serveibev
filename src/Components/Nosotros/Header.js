import React, { useState } from 'react'
import { Modal } from 'antd'
import {PlayCircleOutlined,} from '@ant-design/icons';
import styled from 'styled-components'
import {Header as HeaderImg, TitleHeader} from '../BlogHeader'


const HeaderNos= styled(HeaderImg)`
    background-image: url(https://blog.cure.fit/wp-content/uploads/2020/08/2020-08-22.jpg);
    backgroundPosition: 0% 80%;

`

 const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(true)
    }
    const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <div style={{boxShadow:'2px 0px 26px 4px rgba(0,0,0,0.11)'}}>
            <HeaderNos>
                <div >
                <TitleHeader>Nosotros</TitleHeader>
                <PlayCircleOutlined onClick={showModal} style={{fontSize:'100px', color:'white', opacity:'0.5', }}   />           
                </div>
            </HeaderNos>
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

