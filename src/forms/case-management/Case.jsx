import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { RiFullscreenFill, RiFullscreenExitLine } from 'react-icons/ri';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';

const Case = () => {
  
  const [open, setOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {

    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  })
 
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
          Open form
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'md'} fullScreen={fullScreen}>
            <DialogTitle className='flex justify-between items-center'>
                Case
                <button onClick={() => setFullScreen((prev) => !prev)} className='hover:bg-gray-100 rounded-full p-2'>
                    { fullScreen ? <RiFullscreenExitLine /> : <RiFullscreenFill /> }
                </button>
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {/* Form Fields Come Here */}
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

export default Case