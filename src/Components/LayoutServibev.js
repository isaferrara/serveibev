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

    return (
    <Layout >
        <Header className="header"  >
        <div className="logo" />
        {/* <img alt="logo-servibev" src='../../servibev.png' style={{width:'100px', height:'100px', position:'relative'}}/> */}
            <Menu  theme="dark" mode="horizontal"  style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', marginRight:'30px'}}>
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
            </Menu>
        </Header>

      <Content>
        <div >{children}</div>
      </Content>
      <Footer style={{height:'200px', backgroundColor:'#1F2933'}}>

      </Footer>
    </Layout>
    )
}
export default LayoutServibev