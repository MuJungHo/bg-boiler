import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


export default withStyles(theme => ({
  root: {
    color: theme.palette.button.color
  }
}))((props) => <Checkbox color="primary"  {...props} />)
