import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';


export default withStyles(theme => ({
  root: {
      color: theme.palette.input.color
  }
}))((props) => <Radio color={props.color || "primary"} {...props} />)
