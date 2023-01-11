import dayjs from 'dayjs'
import React, { useState } from 'react'
import { top100Films } from '../../data/dummyData'
import GenerateForm from './GenerateForm'

const TestForm = () => {
    
    // Dropdown
    const [dropdownOptions, setDropdownOptions] = useState(top100Films)
    
    // Radio
    const [radioOptions, setRadioOptions] = useState(['Male', 'Female'])
    const [addCase, setAddCase] = useState(false)
    
    const handleChange = () => {
        setAddCase((prev) => !prev);
    }


    const config = {
        title: 'Test Form',
        elements: [{
            name: 'email',
            type: 'email-field',
            label: 'Email',
            defaultValue: '',
            placeholder: 'Enter your email',
            required: false
        }, {
            name: 'date',
            type: 'date-picker',
            label: 'Date',
            defaultValue: new Date().toISOString().split('T')[0],
            required: false
        }, {
            name: 'time',
            type: 'time-picker',
            label: 'Time',
            defaultValue: new Date().toLocaleTimeString(),
            required: false
        }, {
            name: 'multiDropdown',
            type: 'multi-dropdown',
            label: 'Locations',
            dropdownList: dropdownOptions,
            required: false,
            // defaultValue: [{ label: 'The Shawshank Redemption', year: 1994 }],
            key: "label",
            handler: handleChange,
            getter: addCase
        }, {
            name: 'dropdown',
            type: 'dropdown',
            label: 'Locations',
            dropdownList: dropdownOptions,
            required: false,
            key: "label",
        }, {

            name: 'radio',
            type: 'radio',
            label: 'Gender',
            radioList: radioOptions,
            defaultValue: 'Male',
            required: false
        }, {
            name: 'checkbox',
            type: 'checkbox',
            label: 'Avoidable',
            defaultValue: '',
            required: false
        }, {
            name: 'number',
            type: 'number-field',
            label: 'Age',
            defaultValue: 0,
            required: false
        }, {
            name: 'message',
            type: 'message-field',
            label: 'Message',
            placeholder: "Enter Your Message",
            rows: 4,
            defaultValue: '',
            required: false
        }, {
            name: 'file',
            type: 'file-field',
            label: 'Document',
            defaultValue: '',
            required: false
        }, {
            name: 'text',
            type: 'text-field',
            label: 'Title',
            placeholder: 'Enter title',
            defaultValue: '',
            required: false
        }, {
            name: 'password',
            type: 'password-field',
            label: 'Password',
            placeholder: 'Enter password',
            defaultValue: '',
            required: false
        }, {
            name: 'switch',
            type: 'switch-field',
            label: 'Monthly Charge',
            defaultValue: false,
            required: false
        }],
        largeDevice: {
            columns: 3
        },
        mediumDevice: {
            columns: 2
        },
        smallDevice: {
            columns: 1
        }
    }

    return (
        <GenerateForm config={config} />
    )
}

export default TestForm