// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// function TabContainer({ children }) {
//     // console.log(dir)
//   return (
//     <Typography component="div" style={{ padding: 8 * 2, backgroundColor: '#546ae7', textAlign:'center' }}>
//       {children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: '100%',
//   },
// });

// class FullWidthTabs extends React.Component {
//   state = {
//     value: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   handleChangeIndex = index => {
//     this.setState({ value: index });
//   };

//   render() {
//     const { classes, theme } = this.props;

//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={this.state.value}
//             onChange={this.handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             fullWidth
            
//           >
//             <Tab label="Parking 1" />
//             <Tab label="Parking 2" />
//             <Tab label="Parking 3" />
//             <Tab label="Parking 4" />
//             <Tab label="Parking 5" />
//             <Tab label="Parking 6" /> 
//           </Tabs>
//         </AppBar>
//         <SwipeableViews
          
//           index={this.state.value}
//           onChangeIndex={this.handleChangeIndex}
//         >
//           <TabContainer >Parking Area 1</TabContainer>
//           <TabContainer >Parking Area 2</TabContainer>
//           <TabContainer >Parking Area 3</TabContainer>
//           <TabContainer >Parking Area 1</TabContainer>
//           <TabContainer >Parking Area 2</TabContainer>
//           <TabContainer >Parking Area 3</TabContainer>
//         </SwipeableViews>
//       </div>
//     );
//   }
// }

// FullWidthTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(FullWidthTabs);
