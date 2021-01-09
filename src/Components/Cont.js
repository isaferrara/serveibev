
import React from 'react'
import { Form, Input, Button } from 'antd'

const Cont = () => {
    const [form] = Form.useForm()
    function handleSubmit(userInput) {
            
      }
    return (
        <div style={{width:'100%', backgroundColor:'white', display:'flex', justifyContent:'center', padding:'50px'}}>

            <Form layout="vertical" form={form} onFinish={handleSubmit} style={{width:'400px', padding:'20px',backgroundColor:'#f1f2f5',  boxShadow:'1px 21px 42px 2px rgba(0,0,0,0.14)'}} >
                <Form.Item name='nombre' type='nombre' id='nombre' label="Nombre:" rules={[{ required: true, message: 'Por favor escriba su nombre' }]}>
                    <Input  bordered={false} style={{backgroundColor:'white'}}/>
                </Form.Item>
                <Form.Item name='email' type='email' label="Correo electrónico:" rules={[{required: true, type: 'email' }]} >
                    <Input  bordered={false} style={{backgroundColor:'white'}}/>
                    </Form.Item>
                <Form.Item name='email' type='email' label="Teléfono:" >
                    <Input  bordered={false} style={{backgroundColor:'white'}}/>
                </Form.Item>
                <Form.Item name='mensaje' type='mensaje' label="Mensaje:" rules={[{ required: true, message: 'Please input your password!' }]} >
                    <Input.TextArea  bordered={false} style={{backgroundColor:'white'}}/>
                </Form.Item>


                <Button type="primary" block htmlType="submit">
                Sign up
                </Button>
            </Form>
        </div>

    )
}
export default Cont