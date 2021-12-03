import React from "react";
import { PageHeader } from 'antd';
import './Form.css';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from "./Componenets/Header";

const Login = () => {
    let email = '';
    let password = '';
    const onFinish = (values) => {
        console.log('Success:', values);
        email = values.email;
        password = values.password;
        signInWithEmailAndPassword(auth, email, password)
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
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const auth = getAuth();

    return (

        <>
            <Header />

            <div className="form-div">
                <h1 className="form-name" >LogIn Form</h1>

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
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            LogIn
                        </Button>



                    </Form.Item>
                    <div className="Nav_links_ajdust">Don't have Account<NavLink exact activeClassName="Nav_links" to="/"
                    > Click Here</NavLink> </div>
                </Form>
            </div>
        </>
    );

};



export default Login;



