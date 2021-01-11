import React, {useState} from 'react'
import { Form, Input, Button } from 'antd'
import emailjs from 'emailjs-com';

const Forms = () => {
    const [form] = Form.useForm()
    const [sent, setSent]= useState(false)

    const forma ={
        background: 'rgba( 255, 255, 255, 0.05 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 9.5px )',
        WebkitBackdropFilter: 'blur( 9.5px )',
        borderRadius: '10px',
        width:'400px',
        padding:'10px 20px 7% 20px'

    }
        
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
        <div style={{ position:'absolute', top:'26%', left:'12%'}}>
            <Form className="contact-form" layout="vertical" form={form} onFinish={sendEmail} style={forma} >
                <Form.Item name='name' type='text' id='nombre' label="Nombre:" style={{padding:'10px 0px', margin:'0'}}  rules={[{ required: true, message: 'Su nombre es requerido' }]}>
                    <Input  bordered={true} style={{ background: 'rgba( 255, 255, 255, 0.10 )'}}/>
                </Form.Item>
                <Form.Item name='email' type='email' label="Correo electrónico:" style={{padding:'0', margin:'0'}}  rules={[{required: true, message: 'Se requiere un email válido', type: 'email' }]} >
                    <Input  bordered={true} style={{background: 'rgba( 255, 255, 255, 0.10 )'}}/>
                    </Form.Item>
                <Form.Item name='telefono' type='telefono' label="Teléfono:" style={{padding:'0', margin:'0'}} >
                    <Input  bordered={true} style={{background: 'rgba( 255, 255, 255, 0.10 )', padding:'0', margin:'0'}}/>
                </Form.Item>
                <Form.Item name='message' type='message' label="Mensaje:" style={{padding:'0', margin:'0'}}  rules={[{ required: true, message: '¿Qué te gustaría saber?' }]} >
                    <Input.TextArea  bordered={true} style={{background: 'rgba( 255, 255, 255, 0.10 )', padding:'0', margin:'0'}}/>
                </Form.Item>
                <Button type="primary" block htmlType="submit" className='btnHeads' style={{background:'#EF325A', border:'none'}}> Enviar </Button>       

                {!sent? <></>:         
                <h4 style={{color:'black', textAlign:'center', margin:'5%'}}> El mensaje fue enviado con éxito</h4>          
                }
            </Form>
    </div>
    )
}

export default Forms