import React, {useState} from 'react'
import { Layout, Menu, Popover } from 'antd';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import ResponsiveAntMenu from 'responsive-ant-menu'

require("lodash.throttle/package.json")

const { Content } = Layout;


const LayoutServibev = ({ children }) => {

    const [navbar, setNav]= useState(false)

    const nav = {
        textDecoration:'none',
        color:'black',
        fontSize:'18px',
        border:'none',
        fontWeight:'100'
    }
    const navy = {
        width: '100%',
        background: 'transparent',
        position: 'fixed',
        top: '0' ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: '4',
      }
      const navyScroll = {
        width: '100%',
        background: 'white',
        position: 'fixed',
        top: '0' ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: '4',
        transition: '2s',
      }



    const changeBack =()=>{
        if(window.scrollY>=20){
            setNav(true)
        }else{
            setNav(false)

        }
    }
    window.addEventListener('scroll', changeBack)

    return (
    <Layout style={{width:'100%', backgroundColor:'white'}}>
        <Row style={!navbar? navy: navyScroll } justify='space-around'>
                <Col md={4} lg={2} xl={2}  >
                    <img alt="logo-servibev" src='../../servibev.png' style={{width:'70px', height:'60px', position: 'relative', left:'20px'}}/>
                </Col>
            <Col  xs={6} sm={10}  md={20} lg={20} xl={22} >
            <ResponsiveAntMenu
                mobileMenuContent={isMenuShown => isMenuShown ? <button>Close</button> : <button>Open</button>}
                menuClassName={'responsive-ant-menu'}
                mobileBreakPoint={800}
                throttleViewportChange={100}
                mode={'vertical'}
            >
                {(onLinkClick) =>
  
            <Menu  mode="horizontal"  style={{background:'transparent', border:'none', width:'100%' , display:'flex', justifyContent:'flex-end'}}>
                <Menu.Item key="1" style={{listStyleType: 'none'}} >
                    <Link to="/" onClick={onLinkClick} style={nav}>
                        Home
                    </Link>
                </Menu.Item>      
                <Menu.Item key="2"  style={{listStyleType: 'none'}}>
                    <Link to="/nosotros"  onClick={onLinkClick} style={nav}>
                        Nosotros
                    </Link>
                </Menu.Item>
                <Menu.Item key="3"  style={{listStyleType: 'none'}}>
                    <Link to="/productos" onClick={onLinkClick}  style={nav}>
                        Productos y servicios
                    </Link>
                </Menu.Item>
                <Menu.Item key="4"  style={{listStyleType: 'none'}}>
                <Link to="/blog" onClick={onLinkClick} style={nav}>
                        Blog
                    </Link>
                </Menu.Item>
                <Menu.Item key="5"  style={{listStyleType: 'none'}}>
                    <Link to="/contacto" onClick={onLinkClick} style={nav}>
                        Contacto
                    </Link>
                </Menu.Item>
            </Menu>
                 }
            </ResponsiveAntMenu>
            </Col>
        </Row>

      <Content style={{width:'100%'}}>
        {children}
      </Content>
      
    </Layout>
    )
}
export default LayoutServibev