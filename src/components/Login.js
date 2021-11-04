import React from 'react'
import { GoolgeOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Unichat</h2>
                <div
                    className="login-button google"
                >
                    <GoolgeOutlined /> Sign In with Google
                </div>
                <br /> <br />
                <div
                    className="login-button facebook"
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login
