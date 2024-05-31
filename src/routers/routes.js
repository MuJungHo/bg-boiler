import Home from '../Views/Home';
import User from "../Views/User";
import Input from "../Views/Input";
import Display from "../Views/Display";
import Layout from "../Views/Layout";
import Feedback from "../Views/Feedback";

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
        path: "/display",
        name: "display"
      },
      {
        path: "/input",
        name: "input"
      },
      {
        path: "/layout",
        name: "layout"
      },
      {
        path: "/feedback",
        name: "feedback"
      }
    ]
  },
  {
    path: "/display",
    name: "display",
    component: Display
  },
  {
    path: "/input",
    name: "input",
    component: Input
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback
  }
]

export default routes