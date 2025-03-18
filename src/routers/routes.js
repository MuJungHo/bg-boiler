import User from '../Views/User';
// import NotFound from '../Views/404';
import {
  ManageAccount,
} from "../images/icons";


const routes = [
  {
    path: "/user",
    name: "_user",
    component: User,
    icon: ManageAccount,
    sider: true,
    exact: true
  }
]

export default routes