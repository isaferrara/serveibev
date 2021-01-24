import React from 'react'
import styled from 'styled-components'

export const Header= styled.div`
width: 100%;
height: 80vh;
background-image: url(https://images5.alphacoders.com/761/761629.jpg) ;
background-position: 0% 94%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`
export const TitleHeader= styled.h2`
font-size: 70px;
font-weight: 500;
font-family: sans-serif;
letter-spacing: 2px;
text-shadow: 5px 5px 10px rgba(0,0,0,0.31);
`

export const BlogHeader = () => {

    return (
        <div style={{boxShadow:'2px px 26px 4px rgba(0,0,0,0.11)'}}>
            <Header>
                <TitleHeader>Blog</TitleHeader>
            </Header>
        </div>
    )
}
