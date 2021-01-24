import React from 'react'
import { Carousel, Card } from 'antd';
import styled from 'styled-components'

const ContentStyle= styled.div`
        width: 28%;
        height: 320px;
        color: white;
        line-height: 16px;
        text-align: center;
        background: #F7F7F7;
        border-radius: 5px;
        position: relative;
        border: 1px solid #F7F7F7;
`
const ContentStyleFirst= styled(ContentStyle)`
        left: 70px;
        top: 20px; 
`
const ContentStyleSecond= styled(ContentStyle)`
        left: 380px;
        bottom: 300px;
`
const ContentStyleThird= styled(ContentStyle)`
        left: 690px;
        bottom: 620px;
`
const ContainerCard= styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const ContainerCardText= styled.div`
    padding: 20px;
    width: cover;
`

const Text= styled.h4`
    margin-top: 10px;
    padding: 0px;
    font-weight: lighter;
    line-height: 18px;
    letter-spacing: 2px;
`

const Name= styled.h2`
    margin-top: 20px;
    font-weight: 600;
    color: white;
    line-height: 20px;
`

const Comment= styled.h3`
    font-weight: 600;
    color: white;
`
const OuterName= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #faa71d;
    padding: 20px 20px 20px 20px;
`
const OuterNameFirst= styled(OuterName)`
    background: #faa71d;
`
const OuterNameSecond= styled(OuterName)`
    background: #ed1747;
`
const OuterNameThird= styled(OuterName)`
    background: #87c440;
`
const InnerName= styled.div`
    display: flex;
    flex-direction: column;
    
` 
const Pic = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 3px;
    border: 1px solid white,
`
const CarouselStyle = styled(Carousel)`
        display: flex;
        justifyContent: space-between;
        position: relative;
        width: 100%;
        height: 500px;
`


export const Testimonials = () => {

    const carousel = {
        display:'flex',
        justifyContent:'space-between',
        position:'relative',
        width:'100%',
        height:'500px',
    }


    return (
        <div style={{ padding:'5% 15% 0% 15%',  backgroundColor:'white', margin:'auto'}}>
        <h1 style={{ textAlign:'left', fontSize:'40px', fontWeight:'300'}}>¿Qué opinan nuestros clientes?</h1>
        <CarouselStyle autoplay dotPosition='top'>
            <div >
            {/* first slide */}
                <ContentStyleFirst > 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText>
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameFirst>
                        <InnerName>
                            <Name > Isabel Ferrara</Name>
                            <Comment >Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png' />
                    </OuterNameFirst>
                </ContainerCard>
                 
                </ContentStyleFirst>

                    {/* second card */}

                <ContentStyleSecond> 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText >
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameSecond>
                        <InnerName>
                            <Name> Isabel Ferrara</Name>
                            <Comment>Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png'/>
                    </OuterNameSecond>
                </ContainerCard>
                </ContentStyleSecond>


                <ContentStyleThird> 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText >
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameThird>
                        <InnerName>
                            <Name> Isabel Ferrara</Name>
                            <Comment>Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png'/>
                        </OuterNameThird>
                </ContainerCard>
                </ContentStyleThird>
            </div>

            <div >
            {/* first slide */}
            <ContentStyleFirst > 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText>
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameFirst>
                        <InnerName>
                            <Name > Isabel Ferrara</Name>
                            <Comment >Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png' />
                    </OuterNameFirst>
                </ContainerCard>
                 
                </ContentStyleFirst>

                    {/* second card */}

                <ContentStyleSecond> 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText >
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameSecond>
                        <InnerName>
                            <Name> Isabel Ferrara</Name>
                            <Comment>Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png'/>
                    </OuterNameSecond>
                </ContainerCard>
                </ContentStyleSecond>


                <ContentStyleThird> 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText >
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameThird>
                        <InnerName>
                            <Name> Isabel Ferrara</Name>
                            <Comment>Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png'/>
                        </OuterNameThird>
                </ContainerCard>
                </ContentStyleThird>
            </div>

            <div >
            {/* first slide */}
            <ContentStyleFirst > 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText>
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameFirst>
                        <InnerName>
                            <Name > Isabel Ferrara</Name>
                            <Comment >Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png' />
                    </OuterNameFirst>
                </ContainerCard>
                 
                </ContentStyleFirst>

                    {/* second card */}

                <ContentStyleSecond> 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText >
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameSecond>
                        <InnerName>
                            <Name> Isabel Ferrara</Name>
                            <Comment>Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png'/>
                    </OuterNameSecond>
                </ContainerCard>
                </ContentStyleSecond>


                <ContentStyleThird> 
                <ContainerCard>         
                       
                        {/* parrafo */}
                        <ContainerCardText >
                            <Text> Duis mollit adipisicing ut aute minim deserunt proident amet consequat proident co 
                            mmodo non in reprehenderit. Sit nulla pariatur dolore irure cillum commod. Sit nulla pariatur dolore irure cillum commod
                            </Text>
                        </ContainerCardText>
                        {/* imagen y nombres */}
                        <OuterNameThird>
                        <InnerName>
                            <Name> Isabel Ferrara</Name>
                            <Comment>Servibev</Comment>
                        </InnerName>
                        <Pic alt='testimonial' src='../../postmix.png'/>
                        </OuterNameThird>
                </ContainerCard>
                </ContentStyleThird>
            </div>
        </CarouselStyle>          
        </div>
    )
}
export default Testimonials