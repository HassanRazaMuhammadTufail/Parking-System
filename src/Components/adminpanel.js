import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from '../container/Appbar';
import { signout } from '../Store/action/action';


class AdminPanel extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    button() {
        this.props.signout()    
    }
    render(){
        return(
            <div>
            <ButtonAppBar btn={this.button.bind(this)} text={"signout"} /> 
                Admin Panel
            </div>
        )
    }
}
function mapStateToProp(state) {
    // console.log(state.root.studentData)
    return ({
        // studentData: state.root.studentData,
        // companyData: state.root.companyData,
        // jobs: state.root.jobs,
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        signout: () => dispatch(signout())
        // ShowCompanyData:()=>{dispatch(ShowCompanyData())},
        // ShowStudentData:()=>{dispatch(ShowStudentData())},
        // ShowCompanyJobs:()=>{dispatch(ShowCompanyJobs())},
        // studentdelete:(value)=>{dispatch(studentdelete(value))},
        // companydelete:(value)=>{dispatch(companydelete(value))},
        // signout: () => dispatch(signout()),
        // jobsdelete:(valueuid,valueuseruid)=>{dispatch(jobsdelete(valueuid,valueuseruid))}
    })
}




export default connect(mapStateToProp, mapDispatchToProp)(AdminPanel);