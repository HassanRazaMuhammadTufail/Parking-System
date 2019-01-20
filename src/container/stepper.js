import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomizedTable from './tables';
import Slots from './slots';
import DatePickerExampleControlled from './DateAndTime';






const styles = theme => ({

    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});



function getSteps() {
    return ['Area', 'Date & Time', 'Slot'];
}



// function getStepContent(stepIndex) {
//     switch (stepIndex) {
//         case 0:
//             return 'Select Parking Location ....';

//         case 1:
//             return 'Select Date and Time ....';

//         case 2:
//             return 'Select Parking Slots!';

//         default:
//             return 'Uknown stepIndex';
//     }
// }




class HorizontalLabelPositionBelowStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    nextStep(ev){
        const { activeStep } = this.state;
        // console.log(ev);
        this.setState({
            activeStep: activeStep + 1,
        });
    }

    getSlots(eve){
        console.log(eve);
        this.props.getSlot(eve);
    }

    parkingArea(eve){
        console.log(eve);
        this.props.parkingLocation(eve);
    }

    slotbook(eve){
        console.log(eve);
        this.props.bookingslot(eve);
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        // console.log(this.props);


        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        // console.log(steps);
                        return (
                            <Step key={label}>
                                {/* {console.log(this.state.activeStep)} */}
                                <StepLabel>
                                    {label}
                                </StepLabel>
                            </Step>
                        );
                    })
                    }
                </Stepper>
                {(this.state.activeStep === 0) ? (
                    <CustomizedTable nextStep={this.nextStep.bind(this)} parkingArea={this.parkingArea.bind(this)} />

                ) :

                    (this.state.activeStep === 1) ?
                        (
                            <DatePickerExampleControlled nextStep={this.nextStep.bind(this)} getSlots={this.getSlots.bind(this)} />
                        ) :
                        (this.state.activeStep === 2) ?
                            (
                                <Slots slotbook={this.slotbook.bind(this)} />
                            ) :
                            null



                }



                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                Your Parking slot is booked successfully!<br /> Wanna book more?
              </Typography>
                            <Button onClick={this.handleReset}>Book Another</Button>
                        </div>

                    ) : (
                            //             <div>
                            //                 <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            //                 <div>
                            //                     <Button
                            //                         disabled={activeStep === 0}
                            //                         onClick={this.handleBack}
                            //                         className={classes.backButton}
                            //                     >
                            //                         Back
                            // </Button>
                            //                     <Button variant="contained" color="primary" onClick={this.handleNext}>
                            //                         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            //                     </Button>
                            //                 </div>
                            //             </div>
                            null
                        )}
                </div>
            </div>
        );
    }
}

HorizontalLabelPositionBelowStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);


















































