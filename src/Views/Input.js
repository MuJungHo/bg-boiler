import React from "react";
import {
  Breadcrumbs,
  Radio,
  Checkbox,
  Text,
  Paper
} from "../components/common";

import {
  Link,
  Typography,
  Divider
} from '@material-ui/core'

const Component = () => {
  // const { t } = useContext(GlobalContext);
  return (
    <>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Breadcrumbs</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Breadcrumbs>
          <Link component="button">
            Material-UI
          </Link>
          <Link component="button">
            Core
          </Link>
          <Typography>Breadcrumb</Typography>
        </Breadcrumbs>
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Radio</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Radio checked={false} />
        <Radio checked={true} />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Checkbox</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Checkbox checked={false} />
        <Checkbox checked={true} />
      </Paper>
    </>
  );
}


export default Component;