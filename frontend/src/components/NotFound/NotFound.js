import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2px 16px;
  text-align: center;
`;

function NotFound() {
  return (
    <Container>
      <h1>
        Ooops..page is not available right now.Please Navigate to /users/id
      </h1>
    </Container>
  );
}

export default NotFound;
