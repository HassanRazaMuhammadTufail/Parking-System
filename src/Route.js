import React, { Component } from 'react';
import { Route, Router, Switch,
//  Redirect
  } from 'react-router-dom';
import './App.css'
import history from './History';
// import firebase from 'firebase';
import { connect } from 'react-redux';


// import Home from "./components/Home";
import Booking from "./Components/booking";
import Feedback from "./Components/feedback";
import AdminPanel from "./Components/adminpanel"
import Login from "./Components/AdimnLogin";
import SignIn from "./Components/Signin";
import Home from "./Components/Home";


// function PrivateRoute({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
//         />
//     )
// }

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false,
            loader: false,
        }
    }



componentWillReceiveProps = (props) => {
    if(props.authed1){
        // console.log(props.authed1)
        this.setState({
            authed : props.authed1
        })
    }
}

    componentWillMount() {
        let that = this
        let uide = localStorage.getItem("uid")
        if (uide) {
            // console.log(uide)
      that.setState({
                authed: true,
            })
            let type = localStorage.getItem("page")
            // console.log(type)
            // history.push(type)
        }

        else {
            // console.log(uide)
            that.setState({
                authed: false
            })
        }
        // }    );
    }



    render() {
        // console.log(this.state.authed)
        return (
            <div>
                <Router history={history} >
                    <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/parking" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/adminpanel" component={AdminPanel} />
                    <Route path="/feedbacks" component={Feedback} />
                    <Route path="/booked" component={Booking} />
                    </Switch >
                </Router>
            </div>
        )

    }
}
function mapStateToProp(state) {
    // console.log(state.root.authed)
    return ({
        authed1: state.root.authed
    })
}

export default connect(mapStateToProp, null)(Routers);

