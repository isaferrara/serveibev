
import React, {useState} from 'react'
import { Form, Input, Button } from 'antd'
import emailjs from 'emailjs-com';
import styled from 'styled-components'


export const TitleForm= styled.h2`
    font-size: 40px ;
    font-weight:300;
    color: black ;
    margin: 0;
`
export const InfoForm= styled(TitleForm)`
    font-size: 18px ;
`
export const Container= styled.div`
width: 100%;
padding: 10px 50px 50px 50px;
display: flex;
align-items: center;
justify-content: center;
`
export const FormStyle= styled(Form)`
    width: 400px;
    padding: 20px ;
    background-color: #f1f2f5;
    border-radius: 10px;
    box-shadow: 1px 21px 42px 2px rgba(0,0,0,0.14);
`

const Cont = () => {
    const [form] = Form.useForm()
    const [sent, setSent]= useState(false)

        
        function sendEmail(e) {
            const templateParams = {
                name: e.name,
                telefono: e.telefono,
                email: e.email,
                to_name: 'Servibev',
                subject: 'Mensaje nuevo',
                message_html: e.message,
            }            
        
            emailjs.send('service_f5ps4th', 'template_eq9avce', templateParams, 'user_wusjnmrGAzSGCf2vSz2b2')
            .then(() => {
                setSent(true)
        
            }, () => {
                setSent(false)
            });
          }


    
 
    return (
        <div>
        <div style={{marginLeft:'50px'}}>
            <TitleForm >Contáctanos</TitleForm>
            <InfoForm >Teléfono: 55 5369 6000</InfoForm>
            <InfoForm >Correo electrónico: contacto@servibev.com.mx</InfoForm>
        </div>

        <Container>
            
            <FormStyle className="contact-form" layout="vertical" form={form} onFinish={sendEmail} >
                <Form.Item name='name' type='text' id='nombre' label="Nombre:" rules={[{ required: true, message: 'Su nombre es requerido' }]}>
                    <Input  bordered={false} style={{backgroundColor:'white'}}/>
                </Form.Item>
                <Form.Item name='email' type='email' label="Correo electrónico:" rules={[{required: true, message: 'Se requiere un email válido', type: 'email' }]} >
                    <Input  bordered={false} style={{backgroundColor:'white'}}/>
                    </Form.Item>
                <Form.Item name='telefono' type='telefono' label="Teléfono:" >
                    <Input  bordered={false} style={{backgroundColor:'white'}}/>
                </Form.Item>
                <Form.Item name='message' type='message' label="Mensaje:" rules={[{ required: true, message: '¿Qué te gustaría saber?' }]} >
                    <Input.TextArea  bordered={false} style={{backgroundColor:'white'}}/>
                </Form.Item>
                <Button type="primary" block htmlType="submit" className='btnHeads'> Enviar </Button>       
                {!sent? <></>:         
                <h4 style={{color:'green', textAlign:'center'}}> El mensaje fue enviado con éxito</h4>          
                }
            </FormStyle>

        </Container>
    </div>
    )
}
export default Cont