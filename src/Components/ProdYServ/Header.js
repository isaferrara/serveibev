import React from 'react'

const Header = () => {
    const header={
        width:'100%',
        height:'50vh',
        backgroundImage:'url(../../b3.jpg)',
        backgroundPosition: '0% 0%',
        backgroundSize: 'cover',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'

      }
    return (
        <div style={{boxShadow:'2px 0px 26px 4px rgba(0,0,0,0.41)'}}>
            <div style={header}>
                <h2 style={{fontSize:'70px', fontWeight:'500', marginTop:'100px', fontFamily:'sans-serif', letterSpacing:'2px', }}>Productos y servicios</h2>
            </div>
        </div>
    )
}
export default Header