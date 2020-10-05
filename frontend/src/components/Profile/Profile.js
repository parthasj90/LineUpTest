import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../actions/index";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: center;
  padding: 20px;
`;
const Container = styled.div`
  padding: 2px 16px;
`;
class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    let user = this.props.user.length > 0 ? this.props.user[0] : undefined;
    return (
      <div>
        {user ? (
          <Card>
            <img src={user.avatar}></img>
            <br />
            <Container>
              {`User Id : ${user.id}`}
              <br />
              {`Name: ${user.firstName} ${user.lastName}`}
              <br />
              {`Email : ${user.email}`}
            </Container>

            <br />
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
