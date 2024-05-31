import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default withStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: 'rgba(190, 190, 190, 0.4)'
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
      transition: 'border-color ease-in-out 0.3s'
    },
    '&::placeholder': {
      fontSize: '1rem'
    },
    '& .MuiFormLabel-root': {
      fontSize: '1.2rem'
    },
    '& span': {
      color: theme.palette.error.main
    },
    '& .MuiInputBase-root': {
      // minHeight: 36,
      // height: 33,
      color: theme.palette.layout.color

    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 5
    },
    '& svg': {
    },
    '& .MuiInputLabel-formControl': {
      // top: -10,
      color: theme.palette.layout.color
    }
    // flex: '1 1 auto'
  }
}))((props) => <TextField
  size="small"
  variant="outlined"
  {...props}
  inputProps={{
    style: {
      ...props.inputProps,
    }
  }} />)