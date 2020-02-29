import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import DrawerComponentAuth from '../../elements/DrawerAuth';
import DrawerComponentNonAuth from '../../elements/DrawerNonAuth';

import * as ROUTES from '../../constants/routes';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = ({ authUser }) => (
<div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
)

function NavigationAuth() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='green'>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
              <Link to={ROUTES.LANDING} style={{ textDecoration: "none", color: 'blue'}}>
                Tusome
              </Link>
        
          </Typography>
          <Button color="inherit"><DrawerComponentAuth /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function NavigationNonAuth() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='green'>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
              <Link to={ROUTES.LANDING} style={{ textDecoration: "none", color: 'blue'}}>
                Tusome
              </Link>
        
          </Typography>
          <Button color="inherit"><DrawerComponentNonAuth /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;