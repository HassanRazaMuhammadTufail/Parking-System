import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';


// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

const styles = {
  card: {
      // height:'50%',
      // width: '62%',
      minWidth: 250,
      // display: 'inline-block',
    // minWidth: 275,
    margin: '5% auto',
    opacity: 0.95,
  },
  button: {
    margin: '2%',
  },
  heading: {
    textAlign: 'center',
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    
  },
  container: {
    width: '75%',
    margin: '0 auto'
  }
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     marginBottom: 16,
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
};
class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };




    render() {
  const { classes
    // ,signin,handleChange
   } = this.props;
//   const bull = <span className={classes.bullet}>•</span>;
console.log(this.props.props);
  return (
    (this.props.props.form)?
    <div>
      <Card className={classes.card}>
      <Typography variant="headline" component="h1" className={classes.heading}>
            Log In
          </Typography>
      <form className={classes.container} onSubmit={this.props.signin} noValidate autoComplete="off">
        <TextField
          // id="name"
          label="E-mail"
          error={false}
          autoFocus={true}
          required={true}
          placeholder=' id@yourdomain.com'
          helperText="your E-mail won't be share!"
          className={classes.textField}
          value={this.props.props.loginEmail}
          name='loginEmail'
          onChange={this.props.handleChange}
          margin="normal"
          type="email"
          fullWidth={true}
        />
        <br />
        <TextField
          // id="password-input"
          label="Password"
          value={this.props.props.loginPassword}
          helperText="minimum 6 characters"
          onChange={this.props.handleChange}
          fullWidth={true}  
          placeholder=' *********'
          required={true}
          error={false}
          className={classes.textField}
          type="password"
          name='loginPassword'
          autoComplete="current-password"
          margin="normal"
        />

  <Button variant="contained" color="primary" type='submit' onClick={this.props.signin} className={classes.button}  >
        Submit
      </Button>
        </form>
      </Card>
    </div>
    :
    null


  );
}
}

Signin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);

























