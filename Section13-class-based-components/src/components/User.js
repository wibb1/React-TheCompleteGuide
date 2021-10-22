import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    // same as useEffect cleanup function - 
    //useEffect((=>{
    //   some handling code...
    //   return(
    //     cleanup code...
    //   )
    // }))
    console.log("User will unmount"); 
    // runs 3 times every time users are hidden because there are 3 users
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{this.props.name}</li>;
// }

export default User;
