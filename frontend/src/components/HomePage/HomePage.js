import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 2px 16px;
  text-align: center;
`;

function HomePage() {
  const history = useHistory();
  return (
    <Container>
      <h1>Welcome to Line Up Exercise.</h1>
      <br />
      <h3>Please Navigate to /users/:id get user info.</h3>
      <br />
      <h3>
        For Example:
        <a href="" onClick={() => history.push("/users/1")}>
          /users/1
        </a>
      </h3>
    </Container>
  );
}

export default HomePage;
