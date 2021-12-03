import React from "react";
import { PageHeader } from 'antd';
import './Form.css';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { auth, createUserWithEmailAndPassword } from "./Firebase/Firebase";
import { NavLink } from "react-router-dom";



const Signup = () => {
    let email = '';
    let password = '';
    const onFinish = (values) => {
        console.log('Success:', values);
        email=values.email;
        password=values.password;
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user) 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ..
  });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <>
        <header className="site-page-header">Friends</header>

           <div className="form-div-signup">
            <h1 className="form-name" >Signup Form</h1>

            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Signup
                    </Button>
                    
                </Form.Item>
                <div className="Nav_links_ajdust">Already have Account<NavLink exact activeClassName="Nav_links" to="/login"
                         > Click Here</NavLink> </div>
            </Form>
           </div>
             </>
    );

};



export default Signup;



