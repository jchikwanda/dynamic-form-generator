import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { RiFullscreenFill, RiFullscreenExitLine } from 'react-icons/ri';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createFormConfigObject, generateFormSchema } from './FormMaker/formMaker';
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { useContextProvider } from '../../contexts/AppProvider';

const GenerateForm = ({config={}}) => {
  
  const [open, setOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  let count = 0

  const {screenSize} = useContextProvider()
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const { control, handleSubmit } = useForm({
    defaultValues: createFormConfigObject({elements:config.elements})
  });

  const onSubmit = (data) => console.log(data);

  const determineScreenSize = () => {
    if (screenSize > 400 && screenSize <= 850)
      return 'mediumDevice'
    else if (screenSize <= 400)
      return 'smallDevice'
    else
      return 'largeDevice'
  }

  console.log(config[determineScreenSize()].noColumns)
  
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
          Open form
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'md'} fullScreen={fullScreen}>
          <form onSubmit={handleSubmit(onSubmit)}>
              <DialogTitle className='flex justify-between items-center'>
                  {config.title}
                  <button onClick={() => setFullScreen((prev) => !prev)} className='hover:bg-gray-100 rounded-full p-2'>
                      { fullScreen ? <RiFullscreenExitLine /> : <RiFullscreenFill /> }
                  </button>
              </DialogTitle>
              <DialogContent>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {
                        generateFormSchema({elements:config.elements, columns:config[determineScreenSize()].columns}).map((element, index) => (
                          <div key={index} className={`grid gap-4 mb-4 grid-cols-${config[determineScreenSize()].columns}`}>
                            {Object.keys(element).map((key, index2) => (
                              <div key={uuidv4()}>
                                <Controller
                                  name={config.elements[count].name}
                                  control={control}
                                  render={({field}) => {
                                    return (
                                      element[key](field)
                                    )
                                  }}
                                />
                                {count++ ? '' : ''}
                              </div>
                            ))}
                          </div>
                        ))
                      }
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

export default GenerateForm