import React, {useState} from 'react'
import { Form, Input, Button } from 'antd'
import emailjs from 'emailjs-com';

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
            .then(() => {
                setSent(true)
        
            }, () => {
                setSent(false)
            });
          }

    return (
        <div>
        <div style={{marginLeft:'50px'}}>
            <h2 style={{ fontSize:'40px', fontWeight:'300',  margin:'0', color:'white'}}>Contáctanos</h2>
            <h3 style={{ fontSize:'18px', fontWeight:'300', color:'white', margin:'0'}}>Teléfono: 55 5369 6000</h3>
            <h3 style={{ fontSize:'18px', fontWeight:'300', color:'white', margin:'0'}}>Correo electrónico: contacto@servibev.com.mx</h3>
        </div>
        <div style={{width:'100%', display:'flex', justifyContent:'center', padding:'10px 50px 50px 50px'}}>
            <Form className="contact-form" layout="vertical" form={form} onFinish={sendEmail} style={{width:'400px', padding:'20px',backgroundColor:'#f1f2f5', borderRadius:'10px',  boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}} >
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
            </Form>
        </div>
    </div>
    )
}
export default Forms