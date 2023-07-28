import { Alert, Snackbar } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface ISuccessSnackBar {
  openSuccess: boolean
  message: string
  setOpenSuccess: Dispatch<SetStateAction<boolean>>
}

export function SuccessSnackBar({
  openSuccess,
  message,
  setOpenSuccess,
}: ISuccessSnackBar) {
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openSuccess}
      onClose={() => setOpenSuccess(false)}
    >
      <Alert
        severity="success"
        variant="filled"
        sx={{ backgroundColor: '#00875f' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
