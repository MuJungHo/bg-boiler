import Home from '../Views/Home';
import User from "../Views/User";
import Input from "../Views/Input";
import Typography from "../Views/Typography";

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
    // component: Input,
    sider: true,
    icon: ComponentIcon,
    children: [
      {
        path: "/typography",
        name: "typography"
      },
      {
        path: "/input",
        name: "input"
      }
    ]
  },
  {
    path: "/typography",
    name: "typography",
    component: Typography
  },
  {
    path: "/input",
    name: "input",
    component: Input
  }
]

export default routes