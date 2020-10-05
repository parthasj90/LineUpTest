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
  width: 300px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  padding: 2px 16px;
`;

const Image = styled.img`
  width: 100%;
`;
class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    let user = this.props.user.length > 0 ? this.props.user[0] : undefined;
    return (
      <div>
        {user ? (
          <Card>
            <Image src={user.avatar}></Image>
            <br />
            <TextContainer>
              {`User Id : ${user.id}`}
              <br />
              {`Name: ${user.firstName} ${user.lastName}`}
              <br />
              {`Email : ${user.email}`}
            </TextContainer>

            <br />
          </Card>
        ) : (
          "No data found for the user"
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
