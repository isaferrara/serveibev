import React, { useState } from 'react'
import { Modal } from 'antd'
import { Link } from 'react-router-dom'

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
        height:'90vh',
        backgroundImage:'url(../../f10.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }


      const threeCardsHeader={
        width:'20em',
        height:'17em',
        display:'flex',
        padding:'0px 25px 0px 25px',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'gray',
        margin:'10px',
        position:'relative', 
        bottom:'20px',
        background: 'rgba( 255, 255, 255, 0.60 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 9.5px )',
        WebkitBackdropFilter: 'blur( 9.5px )',
        borderRadius: '10px',
        zIndex:'1'
      }

      const buttonHead={
        position:'absolute',
        top:'35%', 
        left:'15%', 
        fontSize:'20px', 
        color:'white', 
        height:'60px', 
        width:'300px', 
        backgroundColor:'#EF325A',
        hover: {
          backgroundColor:'red',
        }
      }


    return (
        <div>
            <div style={header}>
            <div>
            
            <h1 style={{position:'absolute',top:'5%', left:'13%', fontSize:'100px', color:'black', fontFamily:'sans-serif'}}> Servibev </h1>
            <h2 style={{position:'absolute',top:'19%', left:'12%', fontSize:'30px', color:'black'}}>Expertos en jarabes para bebidas</h2>
            <PlayCircleOutlined onClick={showModal} style={{fontSize:'100px', color:'black', opacity:'0.4'}}   />           
            </div>
        <div style={{ display:'flex', flexDirection:'row', position:'absolute', marginTop:'800px'}}>
            <div style={threeCardsHeader}>
                <h2 style={{fontSize:'2em',fontWeight:'400'}}>Servicio</h2>
                <p style={{lineHeight:'17px'}}>Adipisicing reprehenderit non pariatur anim Lorem culpa in. Non fugiat amet proident qui ut ex incididunt et nostrud voluptate nisi in pariatur. Pariatur fugiat occaecat tempor.</p>
            </div> 
            <div style={threeCardsHeader}>
              <h2 style={{fontSize:'2em',  fontWeight:'400'}}>Calidad</h2>
              <p style={{lineHeight:'17px'}}>Adipisicing reprehenderit non pariatur anim Lorem culpa in. Non fugiat amet proident qui ut ex incididunt et nostrud voluptate nisi in pariatur. Pariatur fugiat occaecat tempor.</p>           
            </div> 
            <div style={threeCardsHeader}>
                <h2 style={{fontSize:'2em', fontWeight:'400'}}>Innovación</h2>
                <p style={{lineHeight:'17px'}}>Adipisicing reprehenderit non pariatur anim Lorem culpa in. Non fugiat amet proident qui ut ex incididunt et nostrud voluptate nisi in pariatur. Pariatur fugiat occaecat tempor.</p>            </div> 
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