import React from 'react'
import styled from 'styled-components'
import {Header, TitleHeader} from './BlogHeader'

const TitleHeaderContacto= styled(TitleHeader)`
    margin-bottom: 100px;
    color:white;
`

const ContHeader = () => {

    return (
        <div style={{boxShadow:'2px 0px 26px 4px rgba(0,0,0,0.41)'}}>
            <Header>
                <TitleHeaderContacto>Contacto</TitleHeaderContacto>
            </Header>
        </div>
    )
}

export default ContHeader