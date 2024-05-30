import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import {
  Breadcrumbs,
  Radio,
  Checkbox,
  Text
} from "../components/common";

import {
  Link,
  Typography
} from '@material-ui/core'

const Component = () => {
  // const { t } = useContext(GlobalContext);
  return (
    <>
      <Breadcrumbs>
        <Link component="button">
          Material-UI
        </Link>
        <Link component="button">
          Core
        </Link>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>
      <Radio checked={false} />
      <Radio checked={true} />
      <Checkbox checked={false} />
      <Checkbox checked={true} />
    </>
  );
}


export default Component;