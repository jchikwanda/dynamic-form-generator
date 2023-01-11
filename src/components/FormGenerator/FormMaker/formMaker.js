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
            return ({field, register, errors}) => (
                <div>
                    <TextField
                        margin="dense"
                        label={element.label}
                        type="email"
                        value={element.defaultValue}
                        placeholder={element.placeholder}
                        fullWidth
                        variant="standard"
                        {...field}
                        {...register(element.name, {
                            required:element.required,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                        })}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required.</p>}
                    {errors?.[element.name]?.type === "pattern" && <p className="text-red-500 text-xs">Email is not valid.</p>}
                </div>
            )

        case 'date-picker':
            return ({field, register, errors}) => (
                <div>
                    <TextField
                         margin="dense"
                         label={element.label}
                         type="date"
                         value={element.defaultValue}
                         placeholder={element.placeholder}
                         fullWidth
                         variant="standard"
                         {...field}
                         {...register(element.name, {
                             required:element.required,
                         })}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'time-picker':
            return ({field, register, errors}) => (
                <div>
                    <TextField
                         margin="dense"
                         label={element.label}
                         type="time"
                         value={element.defaultValue}
                         placeholder={element.placeholder}
                         fullWidth
                         variant="standard"
                         {...field}
                         {...register(element.name, {
                             required:element.required,
                         })}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'dropdown':
            return ({field, register, errors}) => (
                <div>
                    <Autocomplete
                        options={element.dropdownList}
                        onInputChange={(event, item) => field.onChange(item)}
                        getOptionLabel={(option) => option[element.key]}
                        sx={{paddingBlock: '.5rem'}}
                        renderInput={(params) => (
                            <TextField {...params} {...register(element.name, {required:element.required})} label="Options" variant="standard" />
                        )}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )
        
        case 'multi-dropdown':
            return ({field, register, errors}) => (
                <div>
                    <div className="flex justify-between items-center">
                        <Autocomplete
                            fullWidth
                            disabled={element.getter}
                            defaultValue={element?.defaultValue}
                            isOptionEqualToValue={(option, value) => option[element.key] === value[element.key]}
                            multiple={true}
                            options={element.dropdownList}
                            getOptionLabel={(option) => option[element.key]}
                            onChange={(event, item) => field.onChange(item)}
                            sx={{paddingBlock: '.5rem'}}
                            renderInput={(params) => (
                                <TextField {...params} label="Options" variant="standard" />
                            )}
                        />
                        <FormControlLabel 
                            control={
                                <Checkbox checked={element.getter} onChange={() => {
                                    element.handler()
                                    if (!element.getter) {
                                        field.onChange([])
                                    }
                                }} />   
                            }
                            label="Do Not Add Case"
                        />
                    </div>
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'radio':
            return ({field, register, errors}) => (
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        defaultValue={element.radioList[0]}
                        value={element.defaultValue}
                        {...field}
                        {...register(element.name, {
                            required:element.required,
                        })}
                    >
                        {element.radioList.map((item) => (
                            <FormControlLabel key={uuidv4()} className="capitalize" value={item} control={<Radio />} label={item} />
                        ))}
                    </RadioGroup>
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </FormControl>
            )

        case 'checkbox':
            return ({field, register, errors}) => (
                <div>
                    <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox />
                            }
                            className='capitalize'
                            label={element.label}
                            {...field}
                            {...register(element.name, {
                                required:element.required,
                            })}
                        />
                    </FormGroup>
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'number-field':
            return ({field, register, errors}) => (
                <div>
                    <TextField
                        id="outlined-number"
                        label={element.label}
                        type="number"
                        placeholder={element.placeholder}
                        fullWidth
                        variant='standard'
                        {...field}
                        {...register(element.name, {
                            required:element.required
                        })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'message-field':
            return ({field, register, errors}) => (
                <div>
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
                        {...register(element.name, {
                            required:element.required
                        })}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'file-field':
            return ({field, register, errors}) => (
                <div>
                    <TextField
                        id="file"
                        type={'file'}
                        sx={{paddingTop: '1.5rem'}}
                        fullWidth
                        variant="standard"
                        {...field}
                        {...register(element.name, {
                            required:element.required
                        })}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )

        case 'text-field':
            return ({field, register, errors}) => (
                <div>
                    <TextField
                        margin="dense"
                        label={element.label}
                        type="text"
                        value={element.defaultValue}
                        fullWidth
                        {...field}
                        {...register(element.name, {
                            required:element.required
                        })}
                        variant="standard"
                        placeholder={element.placeholder}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </div>
            )
        
        case 'password-field':
            return ({field, register, errors}) => (
                <div>
                    <TextField
                        margin="dense"
                        label={element.label}
                        type="password"
                        value={element.defaultValue}
                        fullWidth
                        {...field}
                        {...register(element.name, {
                                required:element.required,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                            })}
                        variant="standard"
                        placeholder={element.placeholder}
                    />
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                    {errors?.[element.name]?.type === "pattern" && <p className="text-red-500 text-xs">Password is not valid</p>}
                </div>
            )
        
        case 'switch-field':
            return ({field, register, errors}) => (
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
                            {...register(element.name, {
                                required:element.required,
                            })}
                        />
                    </FormGroup>
                    {errors?.[element.name]?.type === "required" && <p className="text-red-500 text-xs">This field is required</p>}
                </FormControl>
            )
    
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