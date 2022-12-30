import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Switch, TextField } from "@mui/material";
import { DateTimePicker, DesktopDatePicker, TimePicker } from "@mui/x-date-pickers";
import { v4 as uuidv4 } from 'uuid';

/**
 * Creates a form element based on type
 * @param {object} element to be created 
 * @returns JSX element
 */
const createFormElement = ({element={}}) => {
    switch (element.type) {
        case 'email-field':
            return (field) => (
                <TextField
                    margin="dense"
                    label={element.label}
                    type="email"
                    value={element.defaultValue}
                    placeholder={element.placeholder}
                    fullWidth
                    variant="standard"
                    {...field}
                />
            )
            break;

        case 'date-picker':
            return (field) => (
                <DesktopDatePicker
                    {...field}
                    label={element.label}
                    className='w-full'
                    value={element.defaultValue}
                    inputFormat="MM/DD/YYYY"
                    renderInput={(params) => <TextField sx={{paddingTop: '.5rem'}} variant={'standard'} {...params} />}
                />
            )
            break;

        case 'time-picker':
            return (field) => (
                <TimePicker
                    {...field}
                    className='w-full'
                    value={element.defaultValue}
                    label={element.label}
                    renderInput={(params) => <TextField sx={{paddingTop: '.5rem'}} variant={'standard'} {...params} />}
                />
            )
            break;

        case 'dropdown':
            return (field) => (
                <Autocomplete
                    options={element.dropdownList}
                    getOptionLabel={(option) => option.label}
                    disableCloseOnSelect
                    onChange={(event, item) => field.onChange(item)}
                    sx={{paddingBlock: '.5rem'}}
                    renderInput={(params) => (
                        <TextField {...params} label="Options" variant="standard" />
                    )}
                />
            )
            break;

        case 'radio':
            return (field) => (
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        defaultValue={element.radioList[0]}
                        value={element.defaultValue}
                        {...field}
                    >
                        {element.radioList.map((item) => (
                            <FormControlLabel key={uuidv4()} className="capitalize" value={item} control={<Radio />} label={item} />
                        ))}
                    </RadioGroup>
                </FormControl>
            )
            break;

        case 'datetime-picker':
            return (field) => (
                <DateTimePicker
                    label={element.label}
                    {...field}
                    className='w-full'
                    value={element.defaultValue}
                    renderInput={(params) => <TextField sx={{paddingTop: '.5rem'}} variant={'standard'} {...params} />}
                />
            )
            break;

        case 'checkbox':
            return (field) => (
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox />
                        }
                        className='capitalize'
                        label={element.label}
                        {...field}
                    />
                </FormGroup>
            )
            break;

        case 'number-field':
            return (field) => (
                <TextField
                    id="outlined-number"
                    label={element.label}
                    type="number"
                    placeholder={element.placeholder}
                    fullWidth
                    variant='standard'
                    {...field}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            )
        break;

        case 'message-field':
            return (field) => (
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    fullWidth
                    multiline
                    value={element.defaultValue}
                    rows={element.rows}
                    placeholder={element.placeholder}
                    variant="standard"
                    {...field}
                />
            )
            break;

        case 'file-field':
            return (field) => (
                <TextField
                    id="file"
                    type={'file'}
                    sx={{paddingTop: '1.5rem'}}
                    fullWidth
                    variant="standard"
                    {...field}
                />
            )
            break;

        case 'text-field':
            return (field) => (
                <TextField
                    margin="dense"
                    label={element.label}
                    type="text"
                    value={element.defaultValue}
                    fullWidth
                    {...field}
                    variant="standard"
                    placeholder={element.placeholder}
                />
            )
            break;
        
        case 'password-field':
            return (field) => (
                <TextField
                    margin="dense"
                    label={element.label}
                    type="password"
                    value={element.defaultValue}
                    fullWidth
                    {...field}
                    variant="standard"
                    placeholder={element.placeholder}
                />
            )
            break;
        
        case 'switch-field':
            return (field) => (
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">{element.label}</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch  />
                            }
                            className='capitalize'
                            label={element.label}
                            {...field}
                        />
                    </FormGroup>
                </FormControl>
            )
            break;
    
        default:
            return (
                <TextField
                    margin="dense"
                    label={element.label}
                    value={element.getter}
                    type="text"
                    fullWidth
                    onChange={e => element.setter(e.target.value)}
                    variant="standard"
                    placeholder={element.placeholder}
                />
            )
            break;
    }
}

/**
 * creates react hook form object
 * @param {array} elements array containing element data
 * @returns {object} react hook form object
 */
export const createFormConfigObject = ({elements=[]}) => {
    const formConfig = {}

    elements.map(element => {
        const { name, defaultValue } = element;
        formConfig[name] = defaultValue;
    })

    return formConfig
}

/**
 * generates form data structure
 * @param {Array} elements from which structure is to be created  
 * @returns {Array} of JSX elements
 */
export const generateFormSchema = ({elements=[], columns=3}) => {
    const formData = [];
    let count = 0;
    let tempObj = {};
    const arrLength = elements.length - 1

    elements.map((element, index) => {
        if (count < columns) {
            tempObj[index] = createFormElement({element})
        }
        count++;
        if (count === columns || index === arrLength) {
            formData.push(tempObj)
            tempObj = {}
            count = 0
        }
    })

    return formData;
}