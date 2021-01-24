import React, {useState} from 'react'
import { Form, Input, Button } from 'antd'
import emailjs from 'emailjs-com';
import {FormStyle} from '../Cont'
import styled from 'styled-components'


const FormTransparent = styled(FormStyle)`
        background: rgba( 255, 255, 255, 0.05 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 9.5px );
        -webkit-backdrop-filter: blur( 9.5px );
`

const FormContainer = styled.div`
        position: absolute;
        top: 26%;
        left:12%;
`
const FormInput = styled(Input)`
        background: rgba( 255, 255, 255, 0.10 );
`

const Forms = () => {
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
            .then((result) => {
                setSent(true)
        
            }, (error) => {
                setSent(false)
            });
          }

    return (
        <FormContainer>
            <FormTransparent className="contact-form" layout="vertical" form={form} onFinish={sendEmail}  >
            <h4 style={{margin:0}}>Pide informes sin compromiso.</h4>

                <Form.Item name='name' type='text' id='nombre' label="Nombre:" style={{padding:'10px 0px', margin:'0'}}  rules={[{ required: true, message: 'Su nombre es requerido' }]}>
                    <FormInput  bordered={true} />
                </Form.Item>
                <Form.Item name='email' type='email' label="Correo electrónico:" style={{padding:'0', margin:'0'}}  rules={[{required: true, message: 'Se requiere un email válido', type: 'email' }]} >
                    <FormInput  bordered={true} />
                    </Form.Item>
                <Form.Item name='telefono' type='telefono' label="Teléfono:" style={{padding:'0', margin:'0'}} >
                    <FormInput  bordered={true} />
                </Form.Item>
                <Form.Item name='message' type='message' label="Mensaje:" style={{padding:'0', margin:'0'}}  rules={[{ required: true, message: '¿Qué te gustaría saber?' }]} >
                    <FormInput.TextArea  bordered={true} style={{background: 'rgba( 255, 255, 255, 0.10 )', padding:'0', margin:'0'}}/>
                </Form.Item>
                <Button type="primary" block htmlType="submit" className='btnHeads' style={{background:'#EF325A', border:'none'}}> Enviar </Button>       

                {!sent? <></>:         
                <h4 style={{color:'black', textAlign:'center', margin:'5%'}}> El mensaje fue enviado con éxito</h4>          
                }
            </FormTransparent>
    </FormContainer>
    )
}

export default Forms