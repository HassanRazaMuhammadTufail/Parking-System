import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


// function CustomizedTable(props) {
  class CustomizedTable extends Component{
    constructor(props){
      super(props);
      this.state={
        parkingArea:'',
      }
    }
    
    
    next = (ev) => {

      this.props.nextStep(this);
      this.props.parkingArea(ev);
      console.log(ev);
      // this.setState({
      //   parkingArea : ev
      // })
      
    }
    
    render(){
      let id = 0;
      function createData(parkingLocation, area, slots, pa) {
        id += 1;
        return { id, parkingLocation, area, slots, pa};
      }
      
      const data = [
        createData('CDGK Parking Plaza', 'Empress' , 10, 'CDGK_Plaza'),
        // createData('Gul Plaza Parking', 'Saddar' , 10, 'Gul_Plaza'),
        // createData('Techno City Parking', 'I.I.Chundrigar' , 10, 'Techno_City'),
        // createData('Dolmen City Mall', 'Clifton' , 10, 'Dolmen_Mall'),
        // createData('Serena Mobile Mall', 'Nazimabad' , 10, 'Serena_Mall'),
      ];
      const { classes } = this.props;

    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Parking</CustomTableCell>
            <CustomTableCell numeric>Area</CustomTableCell> 
            <CustomTableCell numeric>Slots</CustomTableCell>
            <CustomTableCell numeric>Book Now</CustomTableCell>
            {/* <CustomTableCell numeric>Protein (g)</CustomTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.parkingLocation}
                </CustomTableCell>
                 <CustomTableCell numeric>{n.area}</CustomTableCell>
                <CustomTableCell numeric>{n.slots}</CustomTableCell>
                <CustomTableCell numeric>
                  {<Button variant="outlined" color="primary" onClick={this.next.bind(this,n.pa)} className={classes.button}>
                    Book
                  </Button>}
                </CustomTableCell>
                {/*
                <CustomTableCell numeric>{n.protein}</CustomTableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
