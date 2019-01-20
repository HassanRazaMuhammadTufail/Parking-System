import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SignIn from '../Components/Signin';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 5,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



function ButtonAppBar(props) {
  const { classes } = props;
  // console.log(btn)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="title" color="inherit" className={classes.flex}>
            Parking System
          </Typography>
          <Button color="inherit" onClick={props.btn}>{(props.text)?props.text:'Signout'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);