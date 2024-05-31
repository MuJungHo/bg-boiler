import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


export default withStyles(theme => ({
  root: {
    color: theme.palette.input.color
  }
}))((props) => <Checkbox color={props.color || "primary"}  {...props} />)
