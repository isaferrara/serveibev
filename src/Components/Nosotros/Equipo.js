import React from 'react'

const Equipo = () => {
    const equipo={
        borderRadius:'50%',
        width:'170px',
        height:'170px',
        marginBottom: '20px'

    }
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', padding:'20px', marginTop:'30px'}}>
        <h2>Conoce al equipo</h2>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
             <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3>Victor Ferrara</h3>
                <h3>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3>Victor Ferrara</h3>
                <h3>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3>Victor Ferrara</h3>
                <h3>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3>Victor Ferrara</h3>
                <h3>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3>Victor Ferrara</h3>
                <h3>Director General</h3>
            </div>

            </div>
        </div>
    )
}
export default Equipo