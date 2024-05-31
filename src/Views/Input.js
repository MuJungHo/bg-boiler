import React from "react";
import {
  Breadcrumbs,
  Radio,
  Checkbox,
  Text,
  Paper,
  Button,
  Switch,
  TextField
} from "../components/common";

import {
  Link,
  Typography,
  Divider,
  InputAdornment
} from '@material-ui/core'

import { DateRangePicker, DatePicker } from 'rsuite';
import SearchIcon from "@material-ui/icons/Search"


const Input = () => {
  // const { t } = useContext(GlobalContext);
  return (
    <>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Radio</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Radio checked={false} />
        <Radio checked={true} />
        <Radio checked={true} color="secondary" />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Checkbox</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Checkbox checked={false} />
        <Checkbox checked={true} />
        <Checkbox checked={true} color="secondary" />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Button</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Button style={{ marginRight: 16 }}>Button</Button>
        <Button color="secondary">Button</Button>
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Switch</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Switch checked={false} style={{ marginRight: 16 }} />
        <Switch checked={true} style={{ marginRight: 16 }} />
        <Switch checked={true} color="secondary" />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">TextField</Text>
        <Divider style={{ margin: '16px 0' }} />
        <TextField label="TextField" style={{ marginRight: 16 }} />
        <TextField label="TextField" style={{ marginRight: 16 }} value="TextField Text" />
        <TextField type="search" style={{ marginRight: 16 }} label="Search TextField" value="Search Text" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }} />
        <TextField type="number" label="TextField Number" value={1000} />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">DateTimePicker</Text>
        <Divider style={{ margin: '16px 0' }} />
        <DateRangePicker format="yyyy-MM-dd HH:mm:ss" style={{ marginRight: 16 }} placement="auto" />
        <DatePicker placement="auto" />
      </Paper>
    </>
  );
}


export default Input;