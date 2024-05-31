import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import {
  Text,
  Paper,
  Button
} from "../components/common";

import {
  Divider,
} from '@material-ui/core'

const Feedback = () => {
  const { setDialog, setSnackBar } = useContext(GlobalContext);

  const handleSetDialog = () => {
    setDialog({
      title: "Dialog Title",
      open: true,
      content: <Text variant="h5">
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.</Text>,
      actions: <>
        <Button>
          Disagree
        </Button>
        <Button autoFocus>
          Agree
        </Button>
      </>
    })
  }

  const handleSetSnackbar = (severity) => {
    setSnackBar({
      open: true,
      message: "Snackbar Message",
      severity
    })
  }

  return (
    <>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Dialog</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Button onClick={handleSetDialog}>Button</Button>
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Snackbar</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Button style={{ marginRight: 16 }} onClick={() => handleSetSnackbar("success")}>Button</Button>
        <Button color="secondary" onClick={() => handleSetSnackbar("error")}>Button</Button>
      </Paper>
    </>
  );
}


export default Feedback;