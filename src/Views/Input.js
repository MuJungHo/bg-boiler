import React from "react";
import {
  Breadcrumbs,
  Radio,
  Checkbox,
  Text,
  Paper,
  Button
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
        <Radio checked={false} color="secondary" />
        <Radio checked={true} color="secondary" />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Checkbox</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Checkbox checked={false} />
        <Checkbox checked={true} />
        <Checkbox checked={false} color="secondary" />
        <Checkbox checked={true} color="secondary" />
      </Paper>
      <Paper style={{ width: '100%', padding: 16, marginBottom: 20 }}>
        <Text variant="h5">Button</Text>
        <Divider style={{ margin: '16px 0' }} />
        <Button style={{ marginRight: 16 }}>Button</Button>
        <Button color="secondary">Button</Button>
      </Paper>
    </>
  );
}


export default Component;