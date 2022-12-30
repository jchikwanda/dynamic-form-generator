import * as yup from 'yup';

/**
 * returns yup definition based on type
 * @param {string} field 
 * @returns yup definition
 */
const getTypeDefinition = (field) => {
    switch (field) {
        case 'email-field':
            return yup.string().email().required()
            break;

        case 'date-picker':
            return yup.string().required('Field is required')
            break;

        case 'time-picker':
            return yup.string().required('Field is required')
            break;

        case 'dropdown':
            return yup.string().required('Field is required')
            break;

        case 'radio':
            return yup.bool().required('Choose an option')
            break;

        case 'datetime-picker':
            return yup.string().required('Field is required')
            break;

        case 'checkbox':
            return yup.bool()
            break;

        case 'number-field':
            return yup.number().min(0);
        break;

        case 'message-field':
            return yup.string().required('Field is required')
            break;

        case 'file-field':
            return yup.mixed().required('File is required')
            break;

        case 'text-field':
            return yup.string().required('Field is required')
            break;
        
        case 'password-field':
            return yup.string()
            .required('Please Enter your password')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
            break;
    
        default:
            return yup.string().required('Field is required')
            break;
    }
}

/**
 * generates yup object shape
 * @param {*} param0 
 * @returns yup object shape
 */
const generateShape = ({elements=[]}) => {
    const shape = {};

    elements.map((element) => {
        shape[element.getterName] = getTypeDefinition(element.type)
    })

    return shape;
}

/**
 * generates yup schema
 * @param {*} param0 array of elements
 * @returns yup schema
 */
export const generateFormValidationSchema = ({elements=[]}) => yup.object().shape(generateShape({ elements }));