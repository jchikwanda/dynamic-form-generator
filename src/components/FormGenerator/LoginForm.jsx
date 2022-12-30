import React from 'react'
import GenerateForm from './GenerateForm'

const LoginForm = () => {
    
    const config = {
        title: 'Login',
        elements: [
            {
                name: 'email',
                type: 'email-field',
                label: 'Email',
                defaultValue: '',
                placeholder: 'Enter your email'
            },
            {
                name: 'email',
                type: 'password-field',
                label: 'Password',
                defaultValue: '',
                placeholder: 'Enter your email'
            },
        ],
        largeDevice: {
            columns: 2
        },
        mediumDevice: {
            columns: 2
        },
        smallDevice: {
            columns: 1
        },
    }
    
    return (
        <GenerateForm config={config} />
    )
}

export default LoginForm