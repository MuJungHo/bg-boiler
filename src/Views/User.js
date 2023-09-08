import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const User = () => {
  const { t } = useContext(GlobalContext);
  return (
    <h5>{t("current-location", { page: t("user") })}</h5>
  );
}


export default User;