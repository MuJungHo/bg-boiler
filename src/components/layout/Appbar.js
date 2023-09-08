import React, { useContext } from 'react'
import clsx from 'clsx';
import { useLocation } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'unset',
    backgroundColor: '#f4f6f8',
    // boxShadow: theme.shadows[0],
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${73}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& .MuiToolbar-root': {
      height: 80
    }
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paper: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    fontSize: 14,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  }
}));

const PathComponent = () => {
  const location = useLocation();
  const { t } = useContext(GlobalContext);
  // console.log(location.pathname)
  if (location.pathname === "/") return t("home")
  if (location.pathname === "/user") return t("user")
  
  return ""
}

const Appbar = ({ open }) => {
  const classes = useStyles();
  const { logout } = useContext(AuthContext);
  const { locale, changeLocale, } = useContext(GlobalContext);
  const [anchor, setAnchor] = React.useState(null);

  const languageMenuOpen = !!anchor;

  const handleChangeLocale = (locale) => {
    changeLocale(locale)
    setAnchor(null)
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <Paper className={classes.paper}>
          <PathComponent />
          <div>
            <IconButton onClick={e => setAnchor(e.currentTarget)}>
              <LanguageSharpIcon />
            </IconButton>
            <IconButton
              onClick={logout}
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Paper>
        <Menu
          open={languageMenuOpen}
          anchorEl={anchor}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          getContentAnchorEl={null}
          onClose={() => setAnchor(null)}
        >
          <MenuItem selected={locale === 'en'} onClick={() => handleChangeLocale('en')}>English</MenuItem>
          <MenuItem selected={locale === 'zh-TW'} onClick={() => handleChangeLocale('zh-TW')}>繁體中文</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>)
}

export default Appbar