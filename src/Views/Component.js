import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Component = () => {
  const { t } = useContext(GlobalContext);
  return (
    <h5>{t("current-location", { page: t("component") })}</h5>
  );
}


export default Component;