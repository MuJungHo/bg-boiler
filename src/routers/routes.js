import Home from '../Views/Home';
import User from "../Views/User";
import Component from "../Views/Component";

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import {
  Component as ComponentIcon,
  Home as HomeIcon,
  ManageAccount
} from "../images/icons"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    icon: HomeIcon,
    sider: true,
    exact: true
  },
  {
    path: "/user",
    name: "user",
    component: User,
    sider: true,
    icon: ManageAccount,
  },
  {
    path: "/component",
    name: "component",
    component: Component,
    sider: true,
    icon: ComponentIcon,
  },
]

export default routes