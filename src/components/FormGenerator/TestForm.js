import dayjs from 'dayjs'
import React, { useState } from 'react'
import { top100Films } from '../../data/dummyData'
import GenerateForm from './GenerateForm'

const TestForm = () => {
    
    // Dropdown
    const [dropdownOptions, setDropdownOptions] = useState(top100Films)
    
    // Radio
    const [radioOptions, setRadioOptions] = useState(['Male', 'Female'])
    


    const config = {
        title: 'Test Form',
        elements: [{
            name: 'email',
            type: 'email-field',
            label: 'Email',
            defaultValue: '',
            placeholder: 'Enter your email'
        }, {
            name: 'date',
            type: 'date-picker',
            label: 'Date',
            defaultValue: dayjs('2022-08-18T21:11:54')
        }, {
            name: 'time',
            type: 'time-picker',
            label: 'Time',
            defaultValue: dayjs('2022-08-18T21:11:54')
        }, {
            name: 'dropdown',
            type: 'dropdown',
            label: 'Locations',
            dropdownList: dropdownOptions,
            defaultValue: dayjs('2022-08-18T21:11:54')
        }, {

            name: 'radio',
            type: 'radio',
            label: 'Gender',
            radioList: radioOptions,
            defaultValue: 'Male'
        }, {
            name: 'datetime',
            type: 'datetime-picker',
            label: 'Date & Time',
            defaultValue: dayjs('2022-08-18T21:11:54')
        }, {
            name: 'checkbox',
            type: 'checkbox',
            label: 'Avoidable',
            defaultValue: ''
        }, {
            name: 'number',
            type: 'number-field',
            label: 'Age',
            defaultValue: 0
        }, {
            name: 'message',
            type: 'message-field',
            label: 'Message',
            placeholder: "Enter Your Message",
            rows: 4,
            defaultValue: ''
        }, {
            name: 'file',
            type: 'file-field',
            label: 'Document',
            defaultValue: ''
        }, {
            name: 'text',
            type: 'text-field',
            label: 'Title',
            placeholder: 'Enter title',
            defaultValue: ''
        }, {
            name: 'password',
            type: 'password-field',
            label: 'Password',
            placeholder: 'Enter password',
            defaultValue: ''
        }, {
            name: 'switch',
            type: 'switch-field',
            label: 'Monthly Charge',
            defaultValue: false
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