import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

const LayoutServibev = ({ children }) => {

    const nav = {
        textDecoration:'none',
        color:'gray',
        padding:'20px',
    }
    const logo = {
        textDecoration:'none',
        color:'gray',
        padding:'20px',
    }
    return (
    <Layout >
        <Header className="header" style={{  top:'0', display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                <div>
                    <img alt="logo-servibev" src='../../servibev.png' style={{width:'70px', height:'60px'}}/>
                </div>
            <Menu  theme="dark" mode="horizontal"  style={{ top:'0', display:'flex', flexDirection:'row', justifyContent:'flex-end',}}>
                <Menu.Item key="1" style={{listStyleType: 'none'}}>
                    <Link to="/" style={nav}>
                        Home
                    </Link>
                </Menu.Item>      
                <Menu.Item key="2"  style={{listStyleType: 'none'}}>
                    <Link to="/nosotros" style={nav}>
                        Nosotros
                    </Link>
                </Menu.Item>
                <Menu.Item key="3"  style={{listStyleType: 'none'}}>
                    <Link to="/productos" style={nav}>
                        Productos y servicios
                    </Link>
                </Menu.Item>
                <Menu.Item key="4"  style={{listStyleType: 'none'}}>
                    <Link to="/blog" style={nav}>
                        Blog
                    </Link>
                </Menu.Item>
                <Menu.Item key="4"  style={{listStyleType: 'none'}}>
                    <Link to="/contacto" style={nav}>
                        Contacto
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>

      <Content>
        <div >{children}</div>
      </Content>
      
    </Layout>
    )
}
export default LayoutServibev