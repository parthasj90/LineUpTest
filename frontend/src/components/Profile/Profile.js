import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../actions/index";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.weather);
  }

  componentDidMount() {
    this.props.fetchUser();

  }

  render() {
    return (
      <div>
        hello
 {this.props.user.length >0 ? this.props.user[0].avatar:""}
      </div>
       
    
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

function mapStateToProps(state){
  console.log(state)
	return {
  	user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);