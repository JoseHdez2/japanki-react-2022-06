import React from "react";
import styled from "styled-components";

export const Panel = styled.div`
  box-shadow: 5px 5px 0px gray;
  border: 1px solid black;
  border-radius: 3px;
  margin: 1rem;
  background-color: ${(props) => props.color || "lightcyan"};
`;
