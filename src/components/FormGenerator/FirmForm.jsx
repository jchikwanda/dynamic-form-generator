import React from 'react'
import GenerateForm from './GenerateForm'

const LoginForm = () => {
    
    const config = {
        title: 'Create New Firm',
        elements: [
            {
                name: 'entity_name',
                type: 'text-field',
                label: 'Entity Name',
                defaultValue: '',
                placeholder: 'Firm Name'
            },
            {
                name: 'entity_name',
                type: 'text-field',
                label: 'Entity Name',
                defaultValue: '',
                placeholder: 'Firm Name'
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
        layout: [2, 3, 2, 3, 2, 1]
    }
    
    return (
        <GenerateForm config={config} />
    )
}

export default LoginForm