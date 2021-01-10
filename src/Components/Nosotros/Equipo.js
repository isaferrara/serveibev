import React from 'react'

const Equipo = () => {
    const equipo={
        borderRadius:'50%',
        width:'170px',
        height:'170px',
        marginBottom: '20px'

    }
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'row', textAlign:'center', padding:'20px', margin:'auto', width:'100%'}}>
            <h2 style={{ width:'300px',height:'70px', marginRight:'100px', position:'relative',fontSize:'40px',margin:'auto 50px auto 50px', fontWeight:'300', borderBottom: '10px solid #FAB033'}}> Conoce al equipo</h2>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', width:'700px'}}>
             <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3 style={{margin:'0'}}><b>Victor Ferrara</b></h3>
                <h3 style={{fontWeight:'200'}}>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3 style={{margin:'0'}}><b>Victor Ferrara</b></h3>
                <h3 style={{fontWeight:'200'}}>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3 style={{margin:'0'}}><b>Victor Ferrara</b></h3>
                <h3 style={{fontWeight:'200'}}>Director General</h3>
            </div>

            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3 style={{margin:'0'}}><b>Victor Ferrara</b></h3>
                <h3 style={{fontWeight:'200'}}>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3 style={{margin:'0'}}><b>Victor Ferrara</b></h3>
                <h3 style={{fontWeight:'200'}}>Director General</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
                <img alt='our team' src='../../calidad.jpeg' style={equipo}/>
                <h3 style={{margin:'0'}}><b>Victor Ferrara</b></h3>
                <h3 style={{fontWeight:'200'}}>Director General</h3>
            </div>
            </div>
        </div>
    )
}
export default Equipo