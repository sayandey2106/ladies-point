import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Routes from "../../components/router/router";

//import { setAffiliates,setEmail, setPhone, setdescription,resetAffiliates,AffiliatesFunc} from "../../actions/affiliates/affiliates_action";

import { 
  onLogout
} from "../../actions/loginActions";

export class Routes_con extends Component {

  render() {
    return (
      <Routes {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
   login: store.login,
   
  };
};

export const mapDispatchToProps = dispatch => {
    return {
      onLogout: (user_token, uuid) => {
        dispatch(onLogout(user_token, uuid));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Routes_con );