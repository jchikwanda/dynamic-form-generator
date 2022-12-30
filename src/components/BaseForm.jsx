import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, Switch, TextField } from '@mui/material';
import { RiFullscreenFill, RiFullscreenExitLine } from 'react-icons/ri';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../data/dummyData';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers';


const BaseForm = ({title, openDialogButton, form, }) => {

    const [open, setOpen] = React.useState(false);
    const [fullScreen, setFullScreen] = React.useState(false);
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    
    const [switchState, setSwitchState] = React.useState({
        easy: true,
        hard: false,
        legend: true,
      });
    
      const handleSwitchChange = (event) => {
        setSwitchState({
          ...switchState,
          [event.target.name]: event.target.checked,
        });
      };
    
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      const handleDateChange = (newValue) => {
        console.log("DATE => ", newValue);
        setValue(newValue);
      };
    
      const { gilad, jason, antoine } = state;
      const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = {
            email: event.target[0].value,
            date: event.target[0].value,
            time: event.target[0].value,
            dropDown: event.target[0].value,
            radio: event.target[0].value,
            datetime: event.target[0].value,
            checkbox: event.target[0].value,
            number: event.target[0].value,
            file: event.target[0].value,
            text: event.target[0].value,
            password: event.target[0].value,
        }

        console.log(formData);
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle className='flex justify-between items-center'>
                        Test Form
                        <button onClick={() => setFullScreen((prev) => !prev)} className='hover:bg-gray-100 rounded-full p-2'>
                            { fullScreen ? <RiFullscreenExitLine /> : <RiFullscreenFill /> }
                        </button>
                    </DialogTitle>
                    <DialogContent>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className='grid gap-4 grid-cols-3'>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField sx={{paddingTop: '.5rem'}} variant={'standard'} {...params} />}
                                />
                                <TimePicker
                                    label="Time"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField sx={{paddingTop: '.5rem'}} variant={'standard'} {...params} />}
                                />
                            </div>
                            <div className='grid gap-4 grid-cols-3'>
                                <Autocomplete
                                    options={top100Films}
                                    getOptionLabel={(option) => option.label}
                                    id="disable-close-on-select"
                                    disableCloseOnSelect
                                    sx={{paddingBlock: '.5rem'}}
                                    renderInput={(params) => (
                                    <TextField {...params} label="Options" variant="standard" />
                                    )}
                                />
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField sx={{paddingTop: '.5rem'}} variant='standard' {...params} />}
                                />
                            </div>
                            <div className='grid gap-4 grid-cols-3'>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                        <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                        }
                                        label="Gilad Gray"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox checked={jason} onChange={handleChange} name="jason" />
                                        }
                                        label="Jason Killian"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                                        }
                                        label="Antoine Llorca"
                                    />
                                </FormGroup>
                                <TextField
                                    id="outlined-number"
                                    label="Number"
                                    type="number"
                                    variant='standard'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="standard-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    placeholder="Enter Message"
                                    variant="standard"
                                />
                            </div>
                            <div className="grid gap-4 grid-cols-3">
                                <TextField
                                    id="standard-multiline-static"
                                    label=""
                                    type={'file'}
                                    sx={{paddingTop: '1.5rem'}}
                                    placeholder="Enter Message"
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Text"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                />
                            </div>
                            <div className="grid gap-4 grid-cols-3">
                                <FormControl component="fieldset" variant="standard">
                                    <FormLabel component="legend">Difficulty</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                        control={
                                            <Switch checked={switchState.easy} onChange={handleSwitchChange} name="easy" />
                                        }
                                        label="Easy"
                                        />
                                        <FormControlLabel
                                        control={
                                            <Switch checked={switchState.hard} onChange={handleSwitchChange} name="hard" />
                                        }
                                        label="Hard"
                                        />
                                        <FormControlLabel
                                        control={
                                            <Switch checked={switchState.legend} onChange={handleSwitchChange} name="legend" />
                                        }
                                        label="Legend"
                                        />
                                    </FormGroup>
                                    <FormHelperText>Be careful</FormHelperText>
                                </FormControl>
                            </div>
                        </LocalizationProvider>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default BaseForm