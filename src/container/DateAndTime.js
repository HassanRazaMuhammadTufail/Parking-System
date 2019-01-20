import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import '../Components/component.css';
import Snackbar from 'material-ui/Snackbar';
// import { isUndefined } from 'util';
// import TextField from 'material-ui/TextField';
// import AlertWarning from 'material-ui/SvgIcon';
// import AlertErrorOutline from 'material-ui/SvgIcon';
// import { error } from 'util';


export default class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open:true,
      controlledDate: null,
      value12: null,
      value13: null,
      autoHideDuration: 1000,
      message: 'You are mistaken while selecting time, Please try again',
      sTime: '',
      eTime: '',
      fullDate: '',
      error: false,
    };
  }
  handleChangeTimePicker12 = (event, date) => {
    // console.log(event,date);
    let sDat= date.getTime();
    
    // console.log(sDate);
    this.setState({value12: date,
    sTime: sDat
    });
  };
  handleChangeTimePicker13 = (event, date) => {
    let eDat= date.getTime();
    this.setState({value13: date,
    eTime:eDat
    });
  };
  handleChange = (event,date) => {
    console.log(date);
    let da = date.getDate();
    let mo = date.getMonth()+1;
    let ye = date.getFullYear();
    let fullDat = `${da}-${mo}-${ye}`;
    
    // const checkDate = date.getTime();
    this.setState({
      controlledDate: date,
      fullDate: fullDat,
      d:da,
      m:mo,
      y:ye,
    });
    console.log(this.state.fullDate,this.state.controlledDate,fullDat)
  };

  handleClose = () => {
    // let time = new Date().getTime();
    // let abc = new Date(this.state.sTime);
    console.log(this.state.sTime,this.state.eTime,this.state)
    if(this.state.sTime<this.state.eTime){
      // if(time<=this.state.sDate){if(time<=this.state.sDate){}}
      this.props.nextStep(this);
      this.setState({open: false});
      let user={
        date:this.state.fullDate,
        startingTime:this.state.sTime,
        endingTime:this.state.eTime,
      }
      this.props.getSlots(user);
    }
    else{
      
      this.setState({
        value12: null,
        value13: null,
        error:true
      })
    }
  };
  handleRequestClose = () => {
    this.setState({
      error: false,
    });
  };
  // checkStartingTime = () => {
  //   console.log(this.state.controlledDate,this.state.value12);
  // };
  // disablePastDate = (date) => {
  //   console.log(date.getDay());
  //   return (
  //     date.getDay() === 0 || date.getDay() === 6
  //   )
  // }

  render() {
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleClose}
        
        // onClick={this.props.nextStep.bind(this)}
      />,
    ];
    return (
      <div>
      
        <Dialog
        title="Date &amp; Time"
        actions={actions}
        open={this.state.open}
        onRequestClose={this.handleClose}
        
        >
        
      <DatePicker
        hintText="Select Date"
        value={this.state.controlledDate}
        onChange={this.handleChange}
        // shouldDisableDate={this.disablePastDate}
        // minDate={new Date()}
        disableYearSelection={false}
      />
      <TimePicker
          format="ampm"
          hintText="Starting Time"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
          pedantic={false}
          autoOk={true}
        />
        <TimePicker
          format="ampm"
          hintText="Ending Time"
          value={this.state.value13}
          onChange={this.handleChangeTimePicker13}
          pedantic={false}
          autoOk={true}
        />
        </Dialog>
        <Snackbar
          open={this.state.error}
          message={this.state.message}
          // action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionClick={this.handleActionClick}
          onRequestClose={this.handleRequestClose}
        />
        </div>
    );
  }
}
