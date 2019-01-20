import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from '../container/Appbar';
import { signout } from '../Store/action/action';




class Booking extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    button() {
        this.props.signout();    
    }
    render(){
        return(
            <div>
            <ButtonAppBar btn={this.button.bind(this)} text={"signout"} /> 
            Booking
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
        signout: () => {dispatch(signout())},
        // parkingLocation: (loca) => { dispatch(parkingLocation(loca)) },
        // getSlotss: (timeAndArea) => { dispatch(getSlotss(timeAndArea)) },
        // slotbooking: (ev) => { dispatch(slotbooking(ev))},

    })
}


export default connect(mapStateToProp, mapDispatchToProp)(Booking);