import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './component.css';
import ButtonAppBar from '../container/Appbar';
import Signin from '../container/signin.js';
import Signup from '../container/signup.js';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {signupAction,signinAction} from '../Store/action/action';



class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: false,
            username:'',
            email:'',
            contact:'',
            confirmPassword:'',
            password:'',
            loginEmail:'',
            loginPassword:'',
            
        }
    }
    handleChange(e) {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    button() {
        this.setState({
            form: true,
        })
    }

    signIn(e) {
        e.preventDefault();
        let user = {
            email:this.state.loginEmail,
            password:this.state.loginPassword,
        }
        this.setState({
            loginEmail:'',
            loginPassword:'',
        })
        console.log('Hello Sign in',user);
        if(user.email!=='' && user.password !==''){
            this.props.signinWithEmailPassword(user);
            // console.log(user)
        }
        else{
            alert("All fields are required!");
        }
    }


    signUp(e) {
        e.preventDefault();
        let createdUser = {
            username: this.state.username,
            email:this.state.email,
            contact:this.state.contact,
            confirmPassword:this.state.confirmPassword,
            password:this.state.password,
            
        }
        this.setState({
            username:'',
            email:'',
            contact:'',
            confirmPassword:'',
            password:'',
        })
        // this.props.khali();
        if(createdUser.email!==''&&createdUser.username!==''&&createdUser.qualification!==''&&createdUser.number!==''&&createdUser.age!==''&&createdUser.password!==''&&createdUser.Conpassword!==''){
            if(createdUser.password===createdUser.confirmPassword){
            this.props.signupWithEmailPassword(createdUser);
            // console.log('user information',user)
        }
            else{
                alert("Password Didn't match!");
            }}
            else{
                alert("All fields are required!");
            }
        
    
        // console.log('Hello Sign up',user);
    }

    render() {

        console.log(this.state);
        return (
            <div   >
                <ButtonAppBar btn={this.button.bind(this)} text={"let's start!"} />
                <div className="bgimg">
                <div style={{width:"80%", margin:"auto",  flexGrow: 1,}} >
             <Grid  container spacing={16}>
                <Grid item sm={6} xs={6}>

                    <Signin props={this.state}  signin={this.signIn.bind(this)} handleChange={this.handleChange.bind(this)} />
                </Grid>
                <Grid item  sm={6} xs={6}>
                    <Signup defalut={this.state}  signup={this.signUp.bind(this)} handleChange={this.handleChange.bind(this)} />
                </Grid>
             </Grid>
             </div>
             </div>
             
                

            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signinWithEmailPassword: (user)=>{
            dispatch(signinAction(user))
        },
        signupWithEmailPassword: (createdUser)=>{
            dispatch(signupAction(createdUser))
        }
    })
}

// Signin.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default connect(mapStateToProp, mapDispatchToProp)(SignIn);




