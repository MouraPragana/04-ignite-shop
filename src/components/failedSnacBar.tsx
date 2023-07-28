import { Alert, Snackbar } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

interface IFailedSnackBar {
  openError: boolean
  message: string
  setOpenError: Dispatch<SetStateAction<boolean>>
}

export function FailedSnackBar({
  openError,
  message,
  setOpenError,
}: IFailedSnackBar) {
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openError}
      onClose={() => setOpenError(false)}
    >
      <Alert
        severity="error"
        variant="filled"
        sx={{ backgroundColor: '#E83F5B' }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}
