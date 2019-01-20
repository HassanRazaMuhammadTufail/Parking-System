import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './component.css';
import ButtonAppBar from '../container/Appbar';

import { getSlotss, parkingLocation, slotbooking,signout } from '../Store/action/action';
// import FullWidthTabs from '../container/tabs';
// import CustomizedTable from '../container/tables';
import HorizontalLabelPositionBelowStepper from '../container/stepper';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingLocation: '',
            date: null,
            start: null,
            end: null,
            bookDetails: null,
        }
    }

    parkingLocation(ev) {
        console.log(ev);
        this.setState({
            parkingLocation: ev
        })
        this.props.parkingLocation(ev);
    }
    bookingslot(ev){
        ev.uid = localStorage.getItem('uid')
        this.setState({
            bookDetails : ev

        })
        this.props.slotbooking(ev);
    }

    getSlot(time) {
        console.log(time);
        let timeAndArea = {
            area: this.state.parkingLocation,
            date: time.date,
            startingTime: time.startingTime,
            endingTime: time.endingTime,
        }
        this.setState({
            date: timeAndArea.date,
            start: timeAndArea.startingTime,
            end: timeAndArea.endingTime,
        })
        this.props.getSlotss(timeAndArea);
        // console.log(this.state);
    }
    button() {
        this.props.signout();    
    }
    render() {
        return (
            <div>
                <ButtonAppBar btn={this.button.bind(this)} text={"signout"} /> 
                <HorizontalLabelPositionBelowStepper getSlot={this.getSlot.bind(this)} parkingLocation={this.parkingLocation.bind(this)} bookingslot={this.bookingslot.bind(this)} />
                {/* <CustomizedTable /> */}
                {/* <div>
                     <button onClick={this.parkingLocation.bind(this,'parking Location 1')}>parking Location 1</button>
                     <button onClick={this.parkingLocation.bind(this,'parking Location 2')}>parking Location 2</button>
                     <button onClick={this.parkingLocation.bind(this,'parking Location 3')}>parking Location 3</button>
                 </div> */}

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
        parkingLocation: (loca) => { dispatch(parkingLocation(loca)) },
        getSlotss: (timeAndArea) => { dispatch(getSlotss(timeAndArea)) },
        slotbooking: (ev) => { dispatch(slotbooking(ev))},

    })
}


export default connect(mapStateToProp, mapDispatchToProp)(Home);