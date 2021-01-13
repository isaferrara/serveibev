import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

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
        marginRight:'60px'
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
        marginRight:'60px',
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
    <Layout >
        <div style={!navbar? navy: navyScroll } >
                <div>
                    <img alt="logo-servibev" src='../../servibev.png' style={{width:'70px', height:'60px', marginLeft:'20px'}}/>
                </div>
            <Menu  mode="horizontal"  style={{background:'transparent', border:'none'}}>
                <Menu.Item key="1" style={{listStyleType: 'none'}} >
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
                <Menu.Item key="5"  style={{listStyleType: 'none'}}>
                    <Link to="/contacto" style={nav}>
                        Contacto
                    </Link>
                </Menu.Item>
            </Menu>
        </div>

      <Content>
        <div >{children}</div>
      </Content>
      
    </Layout>
    )
}
export default LayoutServibev