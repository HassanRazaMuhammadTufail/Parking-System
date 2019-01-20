import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import '../App.css';

const style = {
    height: 98,
    width: 98,
    margin: 18,
    textAlign: 'center',
    display: 'inline-block',
};


class Slots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slotsAvailable:[]
        }
    }

    bookSlot(de){
        console.log(this.props.time,de);
        let details=this.props.time;
        details.slot = de;
        console.log(details);

        this.props.slotbook(details);

    }

    render() {
        // for(let i=0;i<=10;i++){
        console.log(this.props.slots, this.props.time);
        // this.props.slots
        // }    

        let slotsArr = this.props.slots;
        // let finalArr = [];
        let sArr=[];
        let Arr = [];
        let usersUidObj = null;
        for (let i=0 ; i<slotsArr.length ; i++){
            // console.log(slotsArr[i]);
             usersUidObj = slotsArr[i];
             for(let key in usersUidObj){
                 sArr.push(usersUidObj[key]);
             //     let j=0;
             //     // if(i===j){
            }
        }
            // console.log(usersUidObj);
                // console.log(sArr);
                for(let j=0; j<sArr.length;j++){
                    let abc=sArr[j];
                for(let keys in abc){
                    console.log(abc);
                    Arr.push(abc[keys]);
        }
    }
    // console.log(Arr);
            // console.log(sArr);
            // finalArr = finalArr.concat(sArr);
        //     j=i;
        // }
        
        // console.log(finalArr,Arr);







        // // this.setState({slotsAvailable:finalArr})
        // for (let i = 1; i <= 10; i++) {
        //     console.log(slotsArr[i].booking);
        //     let uidsObj = slotsArr[i].booking;
        //     var uidsArr = []
        //     for (let key in uidsObj) {
        //         uidsArr.push(uidsObj[key])
        //     }
        //     console.log(uidsArr);
        //     // if(slotsArr[i].booking === )
        //     uidsArr.map((value, index) => {
        //        console.log(value, index)
        //        if (value.date !== this.props.time.date){
        //            console.log(value,index); 
        //         //    this.state.slotsAvailable.
                   
        //        }
        //        else{

        //        }
               
        //    })
        // }
        
        let repeat = '';
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Parking Slots"
                        subtitle="Select your desired slot"
                        />
                        {
                            Arr.map((value,index)=>{
                                console.log(value,index);
                                // for(let i = 0 ; i < Arr.length ; i++){
                                    // console.log(value.date,this.props.time.date);
                                    let st = new Date(value.startingTime).getHours();
                                    let et = new Date(value.endingTime).getHours();
                                    let nst = new Date(this.props.time.startingTime).getHours();
                                    let net = new Date(this.props.time.endingTime).getHours();
                                    let stm = new Date(value.startingTime).getMinutes();
                                    let etm = new Date(value.endingTime).getMinutes();
                                    let nstm = new Date(this.props.time.startingTime).getMinutes();
                                    let netm = new Date(this.props.time.endingTime).getMinutes();
                                    // console.log(value.slot,repeat,st,et,nst,net,net<st,nst>et)
                                    if(value.date !== this.props.time.date){
                                        // if(net<st || nst>et){
                                        // console.log(stt,ett,nstt,nett)
                                        if(repeat !== value.slot){
                                        repeat = value.slot;
                                        return(
                                            <Paper style={style} zDepth={3} key={index}  onClick={this.bookSlot.bind(this,value.slot)}>
                                             {value.slot}
                                             </Paper>
                                        )
                                    }
                                }
                                else if(net<st && st>net || et<nst && nst>et){
                                    console.log(net<st , nst>et)
                                    if(repeat !== value.slot){
                                        repeat = value.slot;
                                        return(
                                            <Paper style={style} zDepth={3} key={index}  onClick={this.bookSlot.bind(this,value.slot)}>
                                             {value.slot}
                                             </Paper>
                                        )
                                    }
                                }
                                // else if(net===st && netm<stm){
                                //     if(repeat !== value.slot){
                                //         repeat = value.slot;
                                //         return(
                                //             <Paper style={style} zDepth={3} key={index}  onClick={this.bookSlot.bind(this,value.slot)}>
                                //              {value.slot}
                                //              </Paper>
                                //         )
                                //     }
                                // }
                                // else if(nst===et && nstm>etm){
                                //     if(repeat !== value.slot){
                                //         repeat = value.slot;
                                //         return(
                                //             <Paper style={style} zDepth={3} key={index}  onClick={this.bookSlot.bind(this,value.slot)}>
                                //              {value.slot}
                                //              </Paper>
                                //         )
                                //     }
                                // }    
                                
                            })
                        }
                            {/* {
                                finalArr.map((value,index)=>{
                                console.log(value,index)
                                // for( let i=0;i<=finalArr.length;i++){
                                    console.log(value.date,this.props.time.date)
                                    if(value.date !== this.props.time.date){
                                        console.log(value.slotName)
                                        if(repeat !== value.slotName){
                                        repeat = value.slotName;
                                        return(
                                            <Paper style={style} zDepth={3} key={index}  onClick={this.bookSlot.bind(this,value.slotName)}>
                                            {value.slotName}
                                            </Paper>
                                        )
                                    }
                                    }
                                // }
                            })} */}

                        
                    

                    {/* <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} />
                    <Paper style={style} zDepth={3} /> */}

                </Card>
            </div>
        )
    }
}
function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
        slots: state.root.slots,
        time: state.root.time,
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        // parkingLocation: (loca)=>{dispatch(parkingLocation(loca))},
        // getSlotss: (time)=> {dispatch(getSlotss(time))},

    })
}


export default connect(mapStateToProp, mapDispatchToProp)(Slots);
// export default Slots;