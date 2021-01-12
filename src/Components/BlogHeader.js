import React from 'react'

export const BlogHeader = () => {
    const header={
        width:'100%',
        height:'50vh',
        backgroundImage:'url(https://images5.alphacoders.com/761/761629.jpg)',
        backgroundPosition: '0% 94%',
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
                <h2 style={{fontSize:'70px', fontWeight:'500', fontFamily:'sans-serif', letterSpacing:'2px', textShadow: '5px 5px 10px rgba(0,0,0,0.51)'}}>Blog</h2>
                </div>
            </div>
        </div>
    )
}
