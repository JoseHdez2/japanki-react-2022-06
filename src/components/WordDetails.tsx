import React from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

export type WordDetailsProps = {
  word: String;
  meaning: String;
  jlptRank?: number;
};

export const WordInline: React.FC<WordDetailsProps> = ({ word, meaning }) => (
  <>
    <strong>{word}</strong>
    <small>{meaning}</small>
  </>
);

export const WordDetails: React.FC<WordDetailsProps> = ({ word, meaning }) => (
  <>
    <h1>{word}</h1>
    <h2>{meaning}</h2>
  </>
);

const InlineDiv = styled.div`
  display: flex;
`;
