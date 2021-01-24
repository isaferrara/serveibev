import React from 'react'
import styled from 'styled-components'


const Name= styled.h3`
    margin: 0; 
`
const Position= styled.h3`
    font-weight:'200'
`
const ImgTeam= styled.img`
    border-radius: 50%;
    width: 170px;
    height: 170px;
    margin-bottom: 20px;
`

const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    padding: 20px;
    margin: auto;
    width: 100%;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`
const TitleTeam = styled.h2`
    width: 300px;
    height: 70px;
    margin-right: 100px;
    position: relative;
    font-size: 40px;
    margin: auto 50px auto 50px;
    font-weight: 300;
    border-bottom: 10px solid #FAB033;
`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 700px;
`

const Equipo = () => {
    return (
        <TeamContainer>
            <TitleTeam> Conoce al equipo</TitleTeam>
            <ContainerInfo>
            
             <ProfileContainer>
                <ImgTeam alt='our team' src='../../calidad.jpeg' />
                <Name><b>Victor Ferrara</b></Name>
                <Position>Director General</Position>
            </ProfileContainer>
            <ProfileContainer>
                <ImgTeam alt='our team' src='../../calidad.jpeg' />
                <Name><b>Victor Ferrara</b></Name>
                <Position>Director General</Position>
            </ProfileContainer>
            <ProfileContainer>
                <ImgTeam alt='our team' src='../../calidad.jpeg' />
                <Name><b>Victor Ferrara</b></Name>
                <Position>Director General</Position>
            </ProfileContainer>

            <ProfileContainer>
                <ImgTeam alt='our team' src='../../calidad.jpeg' />
                <Name><b>Victor Ferrara</b></Name>
                <Position>Director General</Position>
            </ProfileContainer>
            <ProfileContainer>
                <ImgTeam alt='our team' src='../../calidad.jpeg'/>
                <Name><b>Victor Ferrara</b></Name>
                <Position>Director General</Position>
            </ProfileContainer>
            <ProfileContainer>
                <ImgTeam alt='our team' src='../../calidad.jpeg'/>
                <Name><b>Victor Ferrara</b></Name>
                <Position>Director General</Position>
            </ProfileContainer>
            </ContainerInfo>
        </TeamContainer>
    )
}
export default Equipo