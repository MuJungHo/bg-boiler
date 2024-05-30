import Home from '../Views/Home'
import User from "../Views/User"

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    icon: DashboardIcon,
    sider: true,
    exact: true
  },
  {
    path: "/user",
    name: "user",
    component: User,
    sider: true,
    icon: PersonIcon,
  },
]

export default routes