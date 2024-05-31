import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default withStyles(theme => ({
  root: {
    // color: theme.palette.button.color
  }
}))((props) => <Button variant="outlined" color={props.color || "primary"}  {...props} />)
